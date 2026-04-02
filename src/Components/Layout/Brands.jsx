import React from "react";
import styles from "./brands.module.css";

export default function Brands() {
  return (
    <section className={styles.brands}>
      <h1>
        Worked with <span className={styles.highlight}>50+</span> Popular Brands
        and Companies
      </h1>
      <p>
        Trusted by leading organizations to deliver exceptional solutions and
        services
      </p>

      <div className={styles.logos}>
        <img src="/partner-2.jpg" alt="Company 1" />
        <img src="/partner-3.jpg" alt="Company 2" />
        <img src="/partner-4.jpg" alt="Company 3" />
        <img src="/partner-5.jpg" alt="Company 4" />
        <img src="/partner-6.jpg" alt="Company 5" />
      </div>
    </section>
  );
}
