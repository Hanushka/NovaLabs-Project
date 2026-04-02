import React from "react";
import styles from "./services.module.css";
import Cards from "../UI/Cards";

export default function Services() {
  return (
    <section className={styles.services}>
      <h4 className={styles.tag}>Our Services</h4>
      <h1>
        Why you should get our{" "}
        <span className={styles.highlight}>Professional Services</span>
      </h1>
      <Cards />
    </section>
  );
}
