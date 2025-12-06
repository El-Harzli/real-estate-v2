function Badges({ Icon, label, count }) {
  return (
    <span
      className="
        flex items-center gap-x-2
        px-2 py-2
        border border-gold-400/40
        rounded-xl
        bg-white/60
        backdrop-blur-sm
        shadow-[0_2px_10px_rgba(0,0,0,0.04)]
      "
    >
      <div
        className="
          p-1.5 rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(201,176,139,0.55),rgba(201,176,139,0.15)_70%)]
          flex items-center justify-center
          shadow-[0_0_8px_rgba(201,176,139,0.35)]
        "
      >
        <Icon className="text-accent-500 text-[15px]" />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-main font-semibold text-[12px]">{count}+</span>
        <span className="text-secondary text-[10px] font-medium whitespace-nowrap">
          {label}
        </span>
      </div>
    </span>
  );
}

export default Badges;
