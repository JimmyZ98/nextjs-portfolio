import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function footer() {
  return (
    <div className={styles.footerContainer}>
      <Image
        src="/../public/images/logo2-transparent.png"
        alt="logo open"
        width={25}
        height={25}
      />
      <p className={styles.footerText}>Designed and Developed by Jimmy Zhen</p>
    </div>
  );
}
