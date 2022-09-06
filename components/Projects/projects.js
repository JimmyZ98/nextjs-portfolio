import React from "react";
import styles from "./Project.module.scss";
import Image from "next/image";

export default function projects() {
  return (
    <div>
      <div className={styles.projectDetails}>
        <h3>YGOMarket</h3>
        <p>
          An e-commerce website that allows users to buy and sell Yu-Gi-Oh cards
          from one another. The web app features user authentication, filtering,
          shopping cart, and payment processing.
        </p>
        <p>React | SASS | Node.js | Express | Stripe | MySQL</p>
        <div>logs/links</div>
      </div>
      <div className={styles.projectImage}>images</div>
    </div>
  );
}
