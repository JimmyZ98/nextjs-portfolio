import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

export default function NavLinks(props) {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <motion.ul
      initial={{ opacity: 0, y: -150 }}
      animate={animateTo}
      transition={{ delay: 0.05 }}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#skills" className={styles.navText}>
          SKILLS
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#projects" className={styles.navText}>
          PROJECTS
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="#contact" className={styles.navText}>
          CONTACT
        </a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="" className={styles.navText}>
          RESUME
        </a>
      </motion.li>
    </motion.ul>
  );
}
