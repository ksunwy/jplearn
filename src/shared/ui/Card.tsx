import { motion } from "framer-motion";

interface CardProps {
  title: string;
  status?: "default" | "completed" | "locked";
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card = ({ title, status = "default", onClick, hoverable = true }: CardProps) => {
  const isCompleted = status === "completed";
  const isLocked = status === "locked";

  return (
    <motion.div
      whileHover={hoverable && !isLocked ? { scale: 1.03 } : {}}
      onClick={onClick}
      className={`
        h-full rounded-2xl p-6 shadow-md transition-all flex flex-col bg-white justify-between cursor-pointer select-none
        ${isCompleted && "bg-green-100 border-2 border-green-400"}
        ${isLocked && "opacity-50"}
      `}
    >
      <h3 className="text-xl font-bold text-foreground max-w-[350px]">{title}</h3>
      <p className="text-gray-600 mt-2">
        {isCompleted ? "✅ Completed" : isLocked ? "🔒 Locked" : "Start learning →"}
      </p>
    </motion.div>
  );
};
