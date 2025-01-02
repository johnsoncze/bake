import React from 'react';

const ReceiptPreview = ({ receipt }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">{receipt.name}</h2>
      <div className="space-y-2">
        {receipt.steps.map((step, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
            <div>
              <span className="font-semibold text-blue-600">{step.name}:</span>
              <span className="text-gray-600"> {step.duration} minutes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptPreview;
