import React, { useState, useEffect } from "react";
const preparationSteps = [
  { name: "Začátek vedení kvásku", duration: 0 },
  { name: "První přidání mouky a vody do kvásku", duration: 270 },
  { name: "Druhé přidání mouky a vody, když je kvásek hladový", duration: 360 },
  {
    name: "Třetí přidání mouky a vody, když je kvásek opět hladový",
    duration: 210,
  },
  { name: "Míchání těsta", duration: 15 },
  { name: "První odpočinek těsta", duration: 30 },
  { name: "Formování bochánku a odpočinek na pokojové teplotě", duration: 20 },
  { name: "Chlazení těsta v lednici", duration: 840 },
  { name: "Temperování těsta před pečením", duration: 45 },
  { name: "Pečení na 250 °C", duration: 10 },
  { name: "Pečení na 200 °C", duration: 30 },
  { name: "Chlazení chleba", duration: 0 },
];

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

function calculateSchedule(dateTime, isStart) {
  let currentDateTime = new Date(dateTime);
  let steps = preparationSteps.slice(); // Kopie pole, abychom mohli reverzovat bez mutace původního

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

function CollapsibleSection({ title, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-8">
      <h1
        className="text-2xl font-bold mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </h1>
      {isOpen && (
        <div className="content p-4 bg-gray-100 rounded">{children}</div>
      )}
    </div>
  );
}

function App() {
  const [dateTime, setDateTime] = useState("");
  const [isStart, setIsStart] = useState(true); // Initialize isStart state
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const savedDateTime = localStorage.getItem("selectedDateTime");
    const savedIsStart = localStorage.getItem("isStartProcess"); // Retrieve the isStart value from localStorage

    if (savedDateTime) {
      setDateTime(savedDateTime);
      setSchedule(calculateSchedule(savedDateTime, savedIsStart === "true"));
    }

    if (savedIsStart !== null) {
      setIsStart(savedIsStart === "true"); // Set isStart based on the retrieved value
    }
  }, []);

  const handleDateTimeChange = (event) => {
    const newDateTime = event.target.value;
    setDateTime(newDateTime);
    localStorage.setItem("selectedDateTime", newDateTime);
    setSchedule(calculateSchedule(newDateTime, isStart));
  };

  const handleProcessChange = (event) => {
    const newIsStart = event.target.value === "start";
    setIsStart(newIsStart);
    localStorage.setItem("isStartProcess", newIsStart); // Save the isStart state to localStorage
    setSchedule(calculateSchedule(dateTime, newIsStart));
  };

  return (
    <div className="container mx-auto p-4">
      <CollapsibleSection title="Plánování přípravy chleba">
        <div className="form-row flex items-center mb-4">
          <label htmlFor="startDateTime" className="mr-2">
            Datum a čas:
          </label>
          <input
            type="datetime-local"
            id="startDateTime"
            name="startDateTime"
            value={dateTime}
            onChange={handleDateTimeChange}
            className="mr-2 p-2 border rounded"
          />
          <div>
            <input
              type="radio"
              id="startProcess"
              name="processTime"
              value="start"
              checked={isStart}
              onChange={handleProcessChange}
            />
            <label htmlFor="startProcess" className="mr-2">
              Začátek
            </label>
            <input
              type="radio"
              id="endProcess"
              name="processTime"
              value="end"
              checked={!isStart}
              onChange={handleProcessChange}
            />
            <label htmlFor="endProcess">Konec</label>
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
                    className="p-3 bg-white shadow rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  >
                    <span className="font-semibold text-blue-600">
                      {formatTime(step.date)}:
                    </span>
                    <span className="text-gray-600"> {step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Vedení kvásku">
        <p className="my-4">
          Poté, co jsme kvásek založili, bude veškerá další péče spočívat v jeho
          krmění – tomu se mezi pekaři říká vedení kvásku.
        </p>

        <h2 className="text-lg font-bold mb-2">3-stupňové vedení:</h2>
        <p className="my-4">
          Jedná se o 3-stupňové vedení kvásku, které je sice náročnější na
          vedení, ale zajišťuje zvláště výrazlou chuť a stabilitu. V prvním
          stupni se množí především kvasinky, v druhém stupni pak bakterie
          produkující kyseliny. Třetí stupeň slouží k vyrovnání poměru bakterií
          homo- a heterofermentativního kvašení.
        </p>

        <h2 className="text-lg font-bold mb-2">
          Návod pro výrobu 0,39 kg kvásku / 1 ks chleba
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            1:00 - Vyndáme kvásek z boxu o objemu 0,13 kg. Do 0,13 kg zbylého
            kvásku přimícháme 0,043 kg žitné mouky a 0,043 l vlažné vody 32°C,
            přikryjeme a necháme stát 4-6 hodin při 22-26°C. Kvásek by měl
            zvětšit objem a po nějaké době začít klesat.
          </li>
          <li>
            5:00 - Když je kvásek hladový (jeho objem se zmenšil a už dále
            neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,021 l vlažné
            vody 32°C. Necháme stát asi 6 hodin při cca 30°C.
          </li>
          <li>
            11:00 - Když je kvásek opět hladový (jeho objem se zmenšil a už dále
            neklesá), přimícháme dalších 0,043 kg žitné mouky a 0,069 l vlažné
            vody 32°C. Necháme stát 3-4 hodiny při 28-30°C.
          </li>
          <li>
            15:00 - Když je kvásek ve fázi klesání nebo už je „spadlý“ úplně
            (cca po 4 hodinách), můžeme zadělat těsto na chleba. Z kvásku
            odebereme 0,13 kg, které dáme do chladu v uzavřené nádobě (ne pevně
            uzavřené!) a zbytek kvásku použijeme do chleba.
          </li>
        </ul>

        <h2 className="text-lg font-bold mb-2">Poznámky:</h2>
        <ul>
          <li>
            Teploty není třeba úzkostlivě dodržovat. Důležité je aby kvásek vždy
            vyběhl nahoru a pak začal klesat a byl hodně kyselý (dochutnat).
          </li>
          <li>
            Časy mezi jednotlivými krměními velmi záleží na teplotě, takže je
            berte jako orientační.
          </li>
          <li>Kvásku nevadí, když zůstane nějakou dobu hladový.</li>
          <li>
            Pokud to vypadá, že kvásek utíká z nádoby, tak je možno ho důkladně
            zamíchat aby spadnul dolů – vůbec mu to nevadí a navíc dostane více
            kyslíku.
          </li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Chleba 33">
        <h2 className="text-lg font-bold mb-2">Suroviny na jeden bochník</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>kvas 220 g</li>
          <li>mouka pšeničná chlebová PROBIO 330 g</li>
          <li>voda 200 ml</li>
          <li>sůl 20 g</li>
          <li>drcený kmín 10 g</li>
          <li>brambory (vařené ve slupce a nastrouhané) 140 g</li>
        </ul>
        <p className="my-4">
          Základ dobrého chleba. Ten náš je třístupňově vedený, který je trochu
          náročnější na založení, ale odměnou vám bude vyzrálá chuť a stabilita.
          Pokud vám kvásek doma umře, stavte se pro nový. Rádi vám ho dáme.
        </p>
        <h2 className="text-xl font-semibold my-4">Postup</h2>
        <p className="mb-4">
          Do díže dáme vodu (22 °C), kvas a mouku. Pomalu mícháme 5 minut. V
          průběhu přidáme sůl a kmín. Pak přidáme uvařené brambory a rychle
          mícháme ještě 10 minut. Těsto zaprášíme moukou a necháme 30 minut stát
          v díži.
        </p>
        <p className="mb-4">
          Poté skoulíme a uděláme bochánek do ošatky s vysypaným plátnem.
          Necháme 20 minut venku, pak uložíme do lednice na 14 hodin. Před
          pečením necháme natemperovat cca 30-60 minut tak, aby byl nakynutý.
          Chleba z ošatky překlopíme přes ruce na pečicí papír, ometeme
          přebytečnou mouku, propíchneme špejlí a postříkáme vodou.
        </p>
        <p className="mb-4">
          Sázíme do předehřáté trouby na 250 °C, rozprašovačem do ní stříkneme
          vodu a pečeme cca 10 minut. Pak teplotu snížíme na 200 °C a dopečeme
          cca 30 minut. Čas se může lišit podle výkonu trouby nebo pece.
        </p>
      </CollapsibleSection>
    </div>
  );
}

export default App;
