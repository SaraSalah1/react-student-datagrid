import React from "react";

const InputField = ({
  icon: Icon,
  type,
  value,
  onChange,
  placeholder,
  inputRef,
  name,
}) => {
  return (
    <div className="w-full relative">
      <Icon className="absolute top-3 left-3 text-gray-400" />

      <input
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-10 py-3 
                   focus:outline-none focus:ring-2 focus:ring-orange-400 
                   transition duration-300"
      />
    </div>
  );
};

export default InputField;
