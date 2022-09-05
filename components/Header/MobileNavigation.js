import React, { useState } from "react";
import NavLinks from "./NavLinks";
import styles from "./Header.module.scss";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <CgMenuRightAlt
      className={styles.menuicon}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={styles.menuicon}
      size="30px"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.navigationMobile}>
      {open ? closeIcon : openIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}
