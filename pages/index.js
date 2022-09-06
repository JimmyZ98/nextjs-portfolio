import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import techlogos from "../data/techlogos.json";
import TechLogo from "../components/TechLogo/techlogo";
import Project from "../components/Projects/projects";

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
          <h2 className={styles.introText}>Hello, my name is</h2>
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
          <div className={styles.subheading}>
            <h2 className={styles.subheadingText}>SKILLS</h2>
            <hr className={styles.subheadingLine} />
          </div>
          <div className={styles.cardContainer}>
            {techlogos.map((logo) => (
              <TechLogo key={logo.id} logo={logo} />
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className={styles.containerContent}>
        <div className={styles.main}>
          <div className={styles.subheadingReverse}>
            <h2 className={styles.subheadingText}>PROJECTS</h2>
            <hr className={styles.subheadingReverseLine} />
          </div>
          <Project />
        </div>
      </section>
      <section id="contact">contact</section>
      <Footer />
    </div>
  );
}
