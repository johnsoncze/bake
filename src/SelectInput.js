import React from 'react';

const SelectInput = ({ options, value, onChange, className = "" }) => {
  return (
    <div className={"inline-block relative " + className}>
      <select
        className="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548c.436-.446 1.045-.446 1.481 0L10 10.551l2.964-2.964c.436-.446 1.045-.446 1.481 0 .462.466.462 1.192 0 1.658l-4 4c-.436.446-1.045.446-1.481 0l-4-4c-.462-.466-.462-1.192 0-1.658z"/>
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;
