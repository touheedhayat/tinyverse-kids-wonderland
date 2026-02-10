const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" };
  const starSizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-6 h-6" };

  return (
    <div className="flex items-center gap-1 select-none">
      <span className={`font-heading font-bold ${sizes[size]} text-foreground tracking-tight`}>
        Tiny
      </span>
      <div className="relative inline-flex items-center">
        <span className={`font-heading font-bold ${sizes[size]} text-primary tracking-tight`}>
          Verse
        </span>
        <div className="absolute -top-1 -right-3">
          <svg className={`${starSizes[size]} star-orbit text-primary`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6z" />
          </svg>
        </div>
        <svg className={`${starSizes[size]} absolute -bottom-1 -left-1 twinkle text-secondary opacity-60`} viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: "1s" }}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
