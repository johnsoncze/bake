import React, { useState } from "react";

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
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

export default CollapsibleSection;
