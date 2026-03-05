import { motion } from "framer-motion";

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = { sm: "text-xl", md: "text-2xl", lg: "text-4xl" };
  const starScale = { sm: 0.5, md: 0.7, lg: 1 };
  const s = starScale[size];

  return (
    <div className="flex items-center gap-0.5 select-none relative">
      {/* Tiny */}
      <motion.span
        className={`font-heading font-bold ${sizes[size]} text-foreground tracking-tight`}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Tiny
      </motion.span>

      {/* Verse with decorations */}
      <div className="relative inline-flex items-center">
        <motion.span
          className={`font-heading font-bold ${sizes[size]} tracking-tight bg-gradient-to-r from-primary via-[hsl(var(--lavender))] to-primary bg-clip-text text-transparent`}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          Verse
        </motion.span>

        {/* Orbiting star */}
        <motion.div
          className="absolute -top-1 -right-3"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ originX: 0.5, originY: 1.5 }}
        >
          <svg
            width={14 * s}
            height={14 * s}
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary"
          >
            <motion.path
              d="M12 2l2.09 6.26L20.18 9.27l-5.09 3.9L16.18 19.73 12 16.27l-4.18 3.46 1.09-6.56L3.82 9.27l6.09-1.01z"
              fill="currentColor"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Sparkle dots */}
        {[
          { x: -6 * s, y: -4 * s, delay: 0, size: 3 * s },
          { x: 4 * s, y: 14 * s, delay: 0.8, size: 2.5 * s },
          { x: -10 * s, y: 10 * s, delay: 1.6, size: 2 * s },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: dot.size,
              height: dot.size,
              left: dot.x,
              top: dot.y,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle glow ring */}
        <motion.div
          className="absolute inset-0 -m-2 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Logo;
