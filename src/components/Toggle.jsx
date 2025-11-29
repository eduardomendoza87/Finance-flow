import React from "react";

const Toggle = ({ enabled, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
        enabled ? 'bg-primary' : 'bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
          enabled ? 'translate-x-7' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default Toggle;