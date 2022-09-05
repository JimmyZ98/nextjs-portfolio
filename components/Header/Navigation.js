import React from "react";
import NavLinks from "./NavLinks";
import styles from "./Header.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
}
