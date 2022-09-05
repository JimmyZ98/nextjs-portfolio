import Image from "next/image";
import styles from "./Header.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/../public/images/logo-transparent.png"
            alt="logo open"
            width={35}
            height={25}
          />
        </div>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
}

export default Header;
