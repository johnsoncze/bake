import React, { useState } from 'react';

const ReceiptForm = () => {
  const [name, setName] = useState('');
  const [steps, setSteps] = useState([{ name: '', duration: '' }]);

  const handleStepChange = (index, event) => {
    const newSteps = steps.map((step, stepIndex) => {
      if (index !== stepIndex) return step;
      return { ...step, [event.target.name]: event.target.value };
    });
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    setSteps([...steps, { name: '', duration: '' }]);
  };

  const handleRemoveStep = (index) => {
    setSteps(steps.filter((_, stepIndex) => index !== stepIndex));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, steps });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Receipt Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      {steps.map((step, index) => (
        <div key={index} className="space-y-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Step Name</label>
            <input
              type="text"
              name="name"
              value={step.name}
              onChange={(e) => handleStepChange(index, e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              name="duration"
              value={step.duration}
              onChange={(e) => handleStepChange(index, e)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            onClick={() => handleRemoveStep(index)}
            className="mt-2 bg-red-500 text-white p-2 rounded-md"
          >
            Remove Step
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddStep}
        className="mt-2 bg-blue-500 text-white p-2 rounded-md"
      >
        Add Step
      </button>
      <button
        type="submit"
        className="mt-4 bg-green-500 text-white p-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ReceiptForm;
