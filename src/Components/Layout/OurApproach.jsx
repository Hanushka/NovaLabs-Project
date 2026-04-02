import React from "react";
import styles from "./ourapproach.module.css";

export default function OurApproach() {
  return (
    <section className={styles.approach}>
      
      {/* Left side image */}
      <div className={styles.left}>
        <img src="/assets/images/circle.png" alt="Our Approach" />
      </div>

      {/* Right side content */}
      <div className={styles.right}>
        <h4 className={styles.tag}>OUR APPROACH</h4>
        <h2>Product Development & Delivery Excellence</h2>
        <p className={styles.intro}>
          We combine innovative product development strategies with efficient
          delivery processes to ensure your technology solutions are built right
          and delivered on time.
        </p>

        {/* Feature items */}
        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/assets/images/w-6.png" alt="Agile Methodology" />
          </div>
          <div>
            <h3>Agile Methodology</h3>
            <p>
              We employ agile practices for regular feedback and course
              correction.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/assets/images/w-5.png" alt="Continuous Delivery" />
          </div>
          <div>
            <h3>Continuous Delivery</h3>
            <p>
              Our CI/CD pipelines ensure reliable, automated product delivery.
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.icon}>
            <img src="/assets/images/card3.png" alt="Quality Assurance" />
          </div>
          <div>
            <h3>Quality Assurance</h3>
            <p>
              Our testing strategies ensure products meet the highest quality
              standards.
            </p>
          </div>
        </div>

        <button className={styles.button}>
          Learn Our Process <span className={styles.arrow}>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
