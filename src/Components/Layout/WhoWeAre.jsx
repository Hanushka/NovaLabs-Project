import React from "react";
import styles from "./whoweare.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.whoweare}>
      
      {/* Left side image */}
      <div className={styles.left}>
        <img src="/assets/images/hero-4.jpg" alt="Who We Are" />
      </div>

      {/* Right side content */}
      <div className={styles.right}>
        <h4 className={styles.tag}>WHO WE ARE</h4>
        <h1>Experts in technology driving digital transformation</h1>
        <p>
          We deliver cutting-edge solutions across the technology spectrum, from
          agile software delivery to cloud computing. Our team of experts helps
          organizations navigate digital transformation with strategic
          assurance, data science expertise, and advanced AI & machine learning
          capabilities.
        </p>

        {/* side by side */}
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src="/assets/images/w-6.png" alt="Agile" />
            <h3>Agile Software Delivery</h3>
          </div>
          <div className={styles.feature}>
            <img src="/assets/images/w-6 (1).png" alt="Cloud" />
            <h3>Cloud Computing Solutions</h3>
          </div>
        </div>

        <button className={styles.button}>Read More</button>
      </div>
    </section>
  );
}
