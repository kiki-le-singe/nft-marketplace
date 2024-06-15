import { motion } from "framer-motion";
interface Props {
  className?: string;
  isActive?: boolean;
}

export default function BurgerMenuIcon({
  className = "",
  isActive = false,
}: Props) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={isActive ? "active" : "inactive"}
    >
      <g id="Burger Menu">
        <motion.path
          id="Vector (Stroke)"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 2.5 L 20 2.5"
          variants={{
            inactive: { d: "M 2 2.5 L 20 2.5" },
            active: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial="inactive" // Explicit initial state
          animate={isActive ? "active" : "inactive"}
        />
        <motion.path
          id="Vector (Stroke)_2"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            inactive: { opacity: 1 },
            active: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
        />
        <motion.path
          id="Vector (Stroke)_3"
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 16.346 L 20 16.346"
          variants={{
            inactive: { d: "M 2 16.346 L 20 16.346" },
            active: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
        />
      </g>
    </motion.svg>
  );
}
