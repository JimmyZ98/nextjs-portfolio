import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";

export default function projects({ proj }) {
  return (
    <div className={styles.projects}>
      <style jsx>
        {`
          .image {
            background-image: url(${proj.image});
          }
          .image:hover {
            background-image: url(${proj.imageHover});
          }
        `}
      </style>
      <div className={styles.blur}></div>
      <div className={styles.projectDetails}>
        <h3 className={styles.projectTitle}>{proj.title}</h3>
        <p className={styles.projectText}>{proj.description}</p>
        <p className={styles.projectText}>{proj.techstack}</p>
        <div className={styles.linksContainer}>
          <a
            href={proj.website}
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            Website
          </a>
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            Github
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <a href={proj.url} target="_blank" rel="noreferrer">
          <div className={`${styles.image} image`}></div>
        </a>
      </div>
    </div>
  );
}
