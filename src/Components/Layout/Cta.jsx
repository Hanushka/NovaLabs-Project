import React from "react";
import styles from "./cta.module.css";

export default function Cta() {
  return (
    <section className={styles.cta}>
      <h1>Ready to transform your business?</h1>
      <p>
        Our team of experts is ready to help you implement the right solutions
        for your unique business needs.
      </p>
      <button className={styles.button}>
        Contact Us Today <span className={styles.arrow}>&rarr;</span>
      </button>
    </section>
  );
}
