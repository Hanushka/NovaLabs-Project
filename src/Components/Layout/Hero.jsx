import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

export default function Hero() {
  const [slide, setSlide] = useState(0);

  // it will slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        {slide === 0 ? (
          <>
            <h3 className={styles.orangeH3}>Leading software solutions</h3>
            <h1>
              Transforming your idea into reality with{" "}
              <span className={styles.highlight}>Etihuku</span>
            </h1>
            <p>
              Empowering businesses with innovative solutions for a brighter
              future
            </p>
            <button>Explore Now</button>
          </>
        ) : (
          <>
            <h3 className={styles.blueH3}>Innovative digital solutions</h3>
            <h1>
              Building the future with{" "}
              <span className={styles.highlight}>Excellence</span>
            </h1>
            <p>
              Transforming businesses through cutting-edge technology and
              innovative solutions that drive growth and success
            </p>
            <button>Get Started</button>
          </>
        )}
      </div>

      <div className={styles.right}>
        <div className={styles.bgImage}></div>
        {slide === 0 ? (
          <div className={styles.images}>
            <img
              src="/assets/images/hero-2.jpg"
              alt="Person 2"
              className={styles.lower}
            />
            <img
              src="/assets/images/hero-1.jpg"
              alt="Person 1"
              className={styles.higher}
            />
          </div>
        ) : (
          <div className={styles.images}>
            <img
              src="/assets/images/hero-4.jpg"
              alt="Person 4"
              className={styles.lower}
            />
            <img
              src="/assets/images/hero-3.jpg"
              alt="Person 3"
              className={styles.higher}
            />
          </div>
        )}
      </div>
    </section>
  );
}
