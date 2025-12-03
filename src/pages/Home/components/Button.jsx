import React from "react";

function Button({ variant = "primary", label, customCss }) {
  return (
    <button
      className={`text-base font-medium rounded-2xl px-6 py-3 border-2 cursor-pointer transition-colors duration-300 ${
        variant === "primary"
          ? "bg-accent-500 text-white border-accent-500 hover:bg-accent-600 hover:border-accent-600"
          : "text-accent-500 border-accent-500 hover:bg-accent-500 hover:text-white hover:border-accent-500"
      } ${customCss}`}
    >
      {label}
    </button>
  );
}

export default Button;
