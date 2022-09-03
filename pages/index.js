import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jimmy Zhen</title>
        <meta name="Jimmy Zhen portfolio site" content="Jimmy Zhen projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.introText}>Hi, my name is</h2>
          <h1 className={styles.introName}>Jimmy Zhen</h1>
          <h2 className={styles.introText}>
            I'm an accountant turned{" "}
            <span className={styles.highlight}>web developer</span>. I love
            problem solving and building cool applications!
          </h2>
        </div>
      </section>
      <section id="skills" className={styles.containerContent}>
        <div className={styles.main}>
          <h2>skills</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <Image
                src="/../public/images/techlogos/html5.png"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="projects">projects</section>
      <section id="contact">contact</section>
    </div>
  );
}
