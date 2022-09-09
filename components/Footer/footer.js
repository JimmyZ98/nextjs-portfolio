import React from "react";
import styles from "./Footer.module.scss";

export default function footer() {
  return (
    <div className={styles.footerContainer}>
      <img
        src="/images/logo2-transparent.png"
        alt="header logo"
        className={styles.footerLogo}
      />
      <p className={styles.footerText}>Designed and Developed by Jimmy Zhen</p>
    </div>
  );
}
