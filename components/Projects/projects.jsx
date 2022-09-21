import React from "react";
import styles from "./Project.module.scss";

export default function projects({ proj, image1, image1Hover }) {
  return (
    <div className={styles.projects}>
      <style jsx>
        {`
          .image {
            background-image: url(${image1});
          }
          .image:hover {
            background-image: url(${image1Hover});
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
