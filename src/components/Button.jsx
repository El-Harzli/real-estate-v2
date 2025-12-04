function Button({ variant = "primary", label, customCss }) {
  const base =
    "text-base font-medium whitespace-nowrap rounded-2xl px-6 py-3 cursor-pointer transition-all duration-300";

  const variants = {
    primary: `
      bg-accent-500 
      text-white 
      border border-accent-500 
      shadow-sm
      hover:bg-accent-600 
      hover:border-accent-600 
    `,
    outline: `
      text-accent-500 
      border border-accent-500
      hover:bg-accent-500
      hover:text-white
    `,
  };

  return (
    <button className={`${base} ${variants[variant]} ${customCss}`}>
      {label}
    </button>
  );
}

export default Button;
