import React from "react";
import styles from "./blogsection.module.css";

const blogs = [
  {
    label: "update",
    title:
      "How Business Analytics Insight Transforms Decision-Making Across Industries",
    desc: "Discover how Etihuku's Business Analytics Insight service adapts to your industry—from retail to healthcare, manufacturing to finance. Turn your data into decisions.",
    author: "Daniel Moses",
    date: "Mar 5, 2026",
    img: "/assets/images/blog-left.jpg",
  },
  {
    label: "update",
    title: "Cloud Migration Strategies for Enterprise",
    desc: "Cloud migration has become a critical initiative for enterprises looking to modernize their IT infrastructure and improve operational efficiency. However, migrating to the...",
    author: "Jeremiah Olamijuwon",
    date: "Mar 4, 2026",
    img: "/assets/images/blog-right.png",
  },
];

export default function BlogSection() {
  return (
    <section className={styles.blog}>
      <h4 className={styles.tag}>OUR BLOG</h4>
      <h2>
        Latest Insights & <span className={styles.orange}>Articles</span>
      </h2>
      <p className={styles.desc}>
        Stay updated with our latest thoughts on technology, innovation, and
        business transformation.
      </p>

      <div className={styles.cards}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${blog.img})` }}
            >
              <div className={styles.overlay}>
                <h4 className={styles.update}>{blog.label}</h4>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <div className={styles.footer}>
                  <h5>{blog.author}</h5>
                  <h5>{blog.date}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
