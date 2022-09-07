import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import LogoData from "../data/techlogos.json";
import TechLogo from "../components/TechLogo/techlogo";
import Project from "../components/Projects/projects.jsx";
import ProjectData from "../data/projects.json";
import { MdMail } from "react-icons/md";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { TiArrowUpThick } from "react-icons/ti";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const projects = ProjectData;
  const techlogos = LogoData;
  return {
    props: {
      projects,
      techlogos,
    },
  };
}

export default function Home({ projects, techlogos }) {
  const animateFrom = { opacity: 0, y: 40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div id="home">
      <Head>
        <title>Jimmy Zhen</title>
        <meta name="Jimmy Zhen portfolio site" content="Jimmy Zhen projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.headerFill}></div>
      <section className={styles.container}>
        <div className={styles.main}>
          <motion.h2
            className={styles.introText}
            initial={animateFrom}
            animate={animateTo}
            transition={{
              delay: 1.1,
              type: "tween",
              duration: 0.75,
              stiffness: 100,
            }}
          >
            Hello, my name is
          </motion.h2>
          <motion.h1
            className={styles.introName}
            initial={animateFrom}
            animate={animateTo}
            transition={{
              delay: 1.35,
              type: "tween",
              duration: 1,
              stiffness: 100,
            }}
          >
            Jimmy Zhen
          </motion.h1>
          <motion.h2
            className={styles.introText}
            initial={animateFrom}
            animate={animateTo}
            transition={{
              delay: 1.45,
              type: "tween",
              duration: 1,
              stiffness: 100,
            }}
          >
            I'm an accountant turned{" "}
            <span className={styles.highlight}>web developer</span>. I love
            problem solving and building cool applications!
          </motion.h2>
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
          {projects.map((proj) => (
            <Project key={proj.id} proj={proj} />
          ))}
        </div>
      </section>
      <section id="contact" className={styles.containerContent}>
        <div className={styles.main}>
          <div className={styles.subheading}>
            <h2 className={styles.subheadingText}>CONTACT</h2>
            <hr className={styles.subheadingLine} />
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.contactText}>
              If you have any questions or want to chat, feel free to reach me
              through my email or any of my social media channels and I will get
              back to you as soon as possible.
            </div>
            <a
              href="mailto: jimmy.zhen98@gmail.com"
              target="_blank"
              className={styles.contactEmail}
            >
              jimmy.zhen98@gmail.com
            </a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
                type: "tween",
                duration: 1,
                stiffness: 100,
              }}
              className={styles.iconContainer}
            >
              <a href="https://www.linkedin.com/in/jimmyzhen/" target="_blank">
                <ImLinkedin size="20px" className={styles.icon} />
              </a>
              <a href="https://github.com/JimmyZ98" target="_blank">
                <ImGithub size="20px" className={styles.icon} />
              </a>
              <a href="mailto: jimmy.zhen98@gmail.com" target="_blank">
                <MdMail size="20px" className={styles.icon} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
                type: "tween",
                duration: 1,
                stiffness: 100,
              }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={styles.navText}
              >
                <TiArrowUpThick size="30px" className={styles.backtotopIcon} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
