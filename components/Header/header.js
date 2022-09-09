import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

function Header() {
  let lastScrollPos = 0;

  const [show, setShow] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const showNav = () => {
    if (window.scrollY > lastScrollPos) {
      setShow(false);
    } else {
      setShow(true);
    }

    if (lastScrollPos > 50) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }

    lastScrollPos = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", showNav);
  }, []);

  return (
    <div
      className={`${show ? styles.header : styles.headerHidden} ${
        isTop ? "" : styles.headerScrolled
      }`}
    >
      <div className={styles.headerContainer}>
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="/images/logo-transparent.png"
            alt="header logo"
            className={styles.headerLogo}
          />
        </motion.div>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
}

export default Header;
