import React, { useState, useEffect } from "react";
import receipts from "./receipts";
import SelectInput from "./SelectInput";
import CollapsibleSection from "./CollapsibleSection";

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

function groupStepsByDay(steps) {
  const groupedSteps = steps.reduce((acc, step) => {
    const date = step.date.split("T")[0]; // Získá datum bez času
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(step);
    return acc;
  }, {});

  return groupedSteps;
}

function calculateSchedule(dateTime, isStart, receiptId) {
  let currentDateTime = new Date(dateTime);
  let steps = receipts
    .find((receipt) => receipt.id === receiptId)
    .steps.slice();

  if (!isStart) {
    const length = steps.reduce((acc, step) => acc + step.duration, 0);
    currentDateTime = new Date(currentDateTime.getTime() + length * -60000);
  }

  let resultSteps = steps.map((step) => {
    let stepDateTime = new Date(currentDateTime.getTime());
    // Pro start přidáváme čas, pro konec odečítáme
    currentDateTime = new Date(
      currentDateTime.getTime() + step.duration * 60000
    );
    return { date: stepDateTime.toISOString(), name: step.name };
  });

  return groupStepsByDay(resultSteps);
}

function App() {
  const [dateTime, setDateTime] = useState("");
  const [isStart, setIsStart] = useState(true); // Initialize isStart state
  const [schedule, setSchedule] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(1);

  useEffect(() => {
    const savedDateTime = localStorage.getItem("selectedDateTime");
    const savedIsStart = localStorage.getItem("isStartProcess"); // Retrieve the isStart value from localStorage
    const savedReceipt = localStorage.getItem("selectedReceipt");

    if (savedIsStart !== null) {
      setIsStart(savedIsStart === "true"); // Set isStart based on the retrieved value
    }

    const receipt = parseInt(savedReceipt) || 1;
    setSelectedReceipt(receipt);

    if (savedDateTime) {
      setDateTime(savedDateTime);
      setSchedule(
        calculateSchedule(savedDateTime, savedIsStart === "true", receipt)
      );
    }
  }, []);

  const handleDateTimeChange = (event) => {
    const newDateTime = event.target.value;
    setDateTime(newDateTime);
    localStorage.setItem("selectedDateTime", newDateTime);
    setSchedule(calculateSchedule(newDateTime, isStart, selectedReceipt));
  };

  const handleProcessChange = (event) => {
    const newIsStart = event.target.value === "start";
    setIsStart(newIsStart);
    localStorage.setItem("isStartProcess", newIsStart); // Save the isStart state to localStorage
    setSchedule(calculateSchedule(dateTime, newIsStart, selectedReceipt));
  };

  const handleReceiptChange = (event) => {
    const newReceipt = parseInt(event.target.value);
    setSelectedReceipt(newReceipt);
    localStorage.setItem("selectedReceipt", newReceipt);
    setSchedule(calculateSchedule(dateTime, isStart, newReceipt));
  };

  const downloadIcsFile = (step) => {
    // You need to convert step's date and other details into the .ics format
    const { date, name } = step;
    console.log(typeof date);

    // Convert dates to an appropriate format, add more details as needed
    const start = new Date(date); // Convert or format this date as needed
    const end = new Date(start.getTime() + 60 * 60 * 1000); // example end time, 1 hour after start

    const icsFileContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Your Company//Your Product//EN",
      "BEGIN:VEVENT",
      `UID:${date}@example.com`,
      `DTSTAMP:${new Date().toISOString()}`,
      `DTSTART:${start.toISOString()}`,
      `DTEND:${end.toISOString()}`,
      `SUMMARY:${name}`,
      `DESCRIPTION:Step for ${name}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([icsFileContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${name}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto p-4">
      <CollapsibleSection title="Plánování přípravy chleba">
        <div className="form-row flex flex-col md:flex-row md:items-center mb-4">
          <label htmlFor="startDateTime" className="md:mb-0 md:mr-2">
            Datum a čas:
          </label>
          <div className="flex items-center mb-2 md:mb-0">
            <input
              type="datetime-local"
              id="startDateTime"
              name="startDateTime"
              value={dateTime}
              onChange={handleDateTimeChange}
              className="mr-2 p-2 border rounded"
            />
            <div className="mr-2 p-2 rounded">
              <SelectInput
                options={[
                  { value: "start", label: "Start" },
                  { value: "end", label: "Konec" },
                ]}
                value={isStart ? "start" : "end"}
                onChange={handleProcessChange}
                id="process"
              />
            </div>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <label htmlFor="receipt" className="mr-2 md:mb-0 md:mr-2">
              Recept:
            </label>
            <SelectInput
              options={receipts.map((receipt) => ({
                value: receipt.id,
                label: receipt.name,
              }))}
              value={selectedReceipt}
              onChange={handleReceiptChange}
              id="receipt"
            />
          </div>
        </div>
        <div className="mt-4">
          {Object.entries(schedule).map(([date, steps], index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">
                {new Date(date).toLocaleDateString()}
              </h3>
              <div className="space-y-2">
                {steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="flex items-center justify-between p-3 bg-white shadow rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    <div>
                      <span className="font-semibold text-blue-600">
                        {formatTime(step.date)}:
                      </span>
                      <span className="text-gray-600"> {step.name}</span>
                    </div>
                    <button
                      onClick={() => downloadIcsFile(step)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Add to calendar"
                    >
                      {/* Inline SVG for calendar icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10a2 2 0 011.987 1.779L22 20a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2h.013C4.098 7.646 8 7 8 7z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>
      {receipts.find((receipt) => receipt.id === selectedReceipt).description()}
    </div>
  );
}

export default App;
