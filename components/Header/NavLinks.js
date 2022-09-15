import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavLinks({ closeMobileMenu }) {
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
        onClick={closeMobileMenu}
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
          onClick={closeMobileMenu}
        >
          SKILLS
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={closeMobileMenu}
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
          onClick={closeMobileMenu}
        >
          PROJECTS
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={closeMobileMenu}
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
          onClick={closeMobileMenu}
        >
          CONTACT
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={closeMobileMenu}
      >
        <a
          href="https://drive.google.com/file/d/1mOsBcoC5d5s0Zneld4VkCX4S7KjSTjzw/view?usp=sharing"
          className={styles.navText}
          onClick={closeMobileMenu}
          target="_blank"
          rel="noreferrer"
        >
          RESUME
        </a>
      </motion.li>
    </motion.ul>
  );
}
