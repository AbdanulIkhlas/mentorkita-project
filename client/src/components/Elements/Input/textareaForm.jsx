import PropTypes from "prop-types";
import { useState } from "react";

const TextareaForm = ({ type, label, placeholder, name, requiredStatus }) => {
  const [isFocused, setIsFocused] = useState(false);
  const statusRequired = requiredStatus ? "required" : "";

  return (
    <div className="mt-5 relative">
      <label
        htmlFor={name}
        className={`absolute -top-4 left-4 bg-white p-1 text-sm font-medium ${
          isFocused ? "text-blue-400" : "text-black"
        } transform origin-top transition-all pointer-events-none`}
      >
        {label}
      </label>
      <textarea
        rows="3"
        cols="3"
        type={type}
        name={name}
        id={name}
        className="mt-1 p-4 block w-full text-sm rounded-md border-[2px] border-[#C9C9C9] focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
        placeholder={placeholder}
        required={statusRequired}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></textarea>
    </div>
  );
};

TextareaForm.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  requiredStatus: PropTypes.bool,
};

export default TextareaForm;
