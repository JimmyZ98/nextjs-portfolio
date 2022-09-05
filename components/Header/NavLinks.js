import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
        >
          SKILLS
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
        >
          PROJECTS
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
        >
          CONTACT
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.5 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to=""
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={styles.navText}
        >
          RESUME
        </Link>
      </motion.li>
    </motion.ul>
  );
}
