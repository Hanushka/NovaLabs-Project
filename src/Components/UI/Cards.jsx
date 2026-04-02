import React from "react";
import styles from "./cards.module.css";


// Data for the cards
const cardsData = [
  {
    img: "/assets/images/card1.png",
    title: "Agile Software Delivery",
    desc: "We help our clients develop software products and solutions using agile methodologies, which emphasize flexibility, collaboration, and customer feedback.",
  },
  {
    img: "/assets/images/card2.png",
    title: "Cloud Engineering",
    desc: "Offer cloud-based solutions and services, helping clients leverage cloud technology to scale, secure, and optimize their operations.",
  },
  {
    img: "/assets/images/card3.png",
    title: "Strategic Assurance",
    desc: "Ensuring that client's technology and business strategies are aligned and secure, mitigating risks, and ensuring compliance with industry regulations.",
  },
  {
    img: "/assets/images/card4.png",
    title: "Data Science & Artificial Intelligence",
    desc: "We use data science and AI/ML techniques to extract meaningful information, build predictive models, automate processes, and drive data-driven decision-making for your business.",
  },
  {
    img: "/assets/images/card5.png",
    title: "Business Analytics Insight",
    desc: "We assist businesses across different domains in analyzing their data to gain valuable insights that can inform decision-making and improve efficiency.",
  },
  {
    img: "/assets/images/card6.png",
    title: "Product Design",
    desc: "Helping clients design user-friendly and innovative products, which could include software applications or physical products.",
  },
];

export default function Cards() {
  return (
    <div className={styles.cards}>
      {cardsData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.header}>
            <img src={card.img} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
          <p>{card.desc}</p>
          <button className={styles.button}>Learn More &gt;</button>
        </div>
      ))}
    </div>
  );
}


//Feedback Card Component 
export function FeedbackCard({ bg, stars, text, client }) {
  return (
    <div className={`${styles.card} ${bg === "blue" ? styles.blue : styles.white}`}>
      <div className={styles.stars}>
        {"★".repeat(stars)}
      </div>
      <p>{text}</p>
      <div className={styles.footer}>
        <div>
          <h4>{client}</h4>
          <p>Client</p>
        </div>
        <div className={styles.circle}>&gt;</div>
      </div>
    </div>
  );
}

