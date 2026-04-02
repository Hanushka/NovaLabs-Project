import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";

export default function Counter() {

  // values
  const targets = [250, 520, 5, 50];
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map(
          (val, i) => Math.min(val + Math.ceil(targets[i] / 100), targets[i]),
        ),
      );
    }, 30); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.counter}>
      <div className={styles.item}>
        <h3>{counts[0]}+</h3>
        <p>Happy Clients</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.item}>
        <h3>{counts[1]}</h3>
        <p>Projects Completed</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.item}>
        <h3>{counts[2]}</h3>
        <p>Years Experienced</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.item}>
        <h3>{counts[3]}+</h3>
        <p>Expert Developers</p>
      </div>
    </section>
  );
}
