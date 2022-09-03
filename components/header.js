import Image from "next/image";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/../public/images/logo-transparent.png"
            alt="logo open"
            width={20}
            height={10}
          />
          JIMMY
          <Image
            src="/../public/images/logo2-transparent.png"
            alt="logo close"
            width={20}
            height={10}
          />
        </div>
        <ul className={styles.nav}>
          <li className={styles.navText}>
            <a href="#skills">SKILLS</a>
          </li>
          <li className={styles.navText}>
            <a href="#projects">PROJECTS</a>
          </li>
          <li className={styles.navText}>
            <a href="#contact">CONTACT</a>
          </li>
          <li className={styles.navText}>
            <a href="">RESUME</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
