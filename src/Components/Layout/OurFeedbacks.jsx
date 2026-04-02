import React from "react";
import { FeedbackCard } from "../UI/Cards";
import styles from "./ourfeedbacks.module.css";

const feedbacks = [
  {
    bg: "blue",
    stars: 5,
    text: "Etihuku delivered a sophisticated AI system that greatly enhanced our security. Their expertise in biometrics and clustering algorithms helped us proactively detect threats and improve our...",
    client: "Champion Mobile",
  },
  {
    bg: "white",
    stars: 5,
    text: "Etihuku built a robust Data Warehouse that improved our data management and decision-making. Their cloud-based infrastructure and data quality measures increased our efficiency...",
    client: "ANE",
  },
  {
    bg: "white",
    stars: 5,
    text: "Etihuku developed an advanced AI-powered web application for us, enabling accurate financial inclusion predictions. Their team's dedication and technical skill ensured project success and...",
    client: "University of Eswatini",
  },
];

export default function OurFeedbacks() {
  return (
    <section className={styles.feedbacks}>
      <h4 className={styles.tag}>OUR FEEDBACKS</h4>
      <h2>
        What they're<span className={styles.orange}> talking about us</span>
      </h2>
      <p className={styles.desc}>
        How to pursue pleasure rationally encounter consequences that painful
        again is there anyone who loves.
      </p>

      <div className={styles.cards}>
        {feedbacks.map((fb, index) => (
          <FeedbackCard
            key={index}
            bg={fb.bg}
            stars={fb.stars}
            text={fb.text}
            client={fb.client}
          />
        ))}
      </div>
    </section>
  );
}
