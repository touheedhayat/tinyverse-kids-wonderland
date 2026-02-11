import { motion } from "framer-motion";

const AnnouncementBar = () => {
  const items = [
    "✨ New Summer Collection — LIVE NOW! ✨",
    "🚚 3-7 Days Delivery Across Pakistan",
    "✔️ 10-Day Refund Guarantee | T&Cs Apply",
    "💝 Use Code WELCOME10 for 10% Off",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="text-xs font-semibold tracking-wide flex items-center gap-8">
            {item}
            <span className="text-primary-foreground/40">—</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnnouncementBar;
