import styles from "../../styles/Home.module.scss";

function TechLogo({ logo }) {
  return (
    <div className={styles.card}>
      <img
        src={logo.url}
        className={styles.cardImage}
        alt="tools and language logo"
      />
    </div>
  );
}

export default TechLogo;
