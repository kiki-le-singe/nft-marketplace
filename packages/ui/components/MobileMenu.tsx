import Link from "next/link";
import { motion, usePresence } from "framer-motion";

import { TextNormalSans } from "./TextNormalSans";
import { Button } from "./Button";
import { useEffect } from "react";

const containerVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.05, // Optionally, stagger children on exit as well
      staggerDirection: -1, // Reverse the stagger order on exit
    },
  },
};

const itemVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const buttonVariants = {
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   y: { stiffness: 1000, velocity: -100 },
    // },
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function MobileMenu() {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      safeToRemove();
    }
  }, [isPresent]);

  return (
    <motion.div
      className="menu-mobile-open h-screen bg-black pt-5 lg:hidden"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <nav>
        <motion.ul variants={listVariants} className="mb-10 overflow-hidden">
          <motion.li
            className="border-b border-purple"
            variants={itemVariants}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/" className="flex p-5">
              <TextNormalSans tag="span">Marketplace</TextNormalSans>
            </Link>
          </motion.li>
          <motion.li
            className="border-b border-purple"
            variants={itemVariants}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/" className="flex p-5">
              <TextNormalSans tag="span">Rankings</TextNormalSans>
            </Link>
          </motion.li>
          <motion.li
            className="border-b border-purple"
            variants={itemVariants}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.99 }}
          >
            <Link href="/" className="flex p-5">
              <TextNormalSans tag="span">Connect a wallet</TextNormalSans>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>

      <motion.div className="flex justify-center" variants={buttonVariants}>
        <Button>Sign Up</Button>
      </motion.div>
    </motion.div>
  );
}
