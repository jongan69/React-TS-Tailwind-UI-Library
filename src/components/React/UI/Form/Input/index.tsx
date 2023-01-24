import React from "react";

export const Input = ({ text }: String | any) => {
  return (
    <div>
      <label className="text-gray-700 block mb-1 font-semibold">Label</label>
      <input className="form-input leading-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  );
};
