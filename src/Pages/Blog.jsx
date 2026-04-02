import React from "react";
import styles from "./blog.module.css";

export default function Blog() {
  return (
    <section className={styles.blog}>
      {/* Banner */}
      <div className={styles.blogHero}>
        <div className={styles.blogOverlay}>
          <h1>Etihuku Blog</h1>
          <p>
            Insights, updates, and stories on technology, innovation, and
            business <br /> transformation. Stay inspired and informed with our
            latest articles.
          </p>
        </div>
      </div>

      {/* Featured */}
      <h3 className={styles.orange}>Featured News</h3>
      <h2 className={styles.black}>Latest Updates</h2>

      <div className={styles.blogContent}>
        {/* Left Side */}
        <div className={styles.leftCards}>
          <div className={styles.blogCard}>
            <img src="/assets/images/blog-left.jpg" alt="Blog 1" />
            <div className={styles.meta}>
              <h3>March 5, 2026</h3>
              <h3>5 min read</h3>
            </div>
            <h1>
              How Business Analytics Insight Transforms Decision-Making Across
              Industries
            </h1>
            <p>
              Discover how Etihuku's Business Analytics Insights service adapts
              to your industry-from retail to healthcare, manufacturing to
              finance. Turn your da...
            </p>
          </div>

          <div className={styles.blogCard}>
            <img src="/assets/images/blog-right.png" alt="Blog 2" />
            <div className={styles.meta}>
              <h3>March 4, 2026</h3>
              <h3>1 min read</h3>
            </div>
            <h1>Cloud Migration Strategies for Enterprise</h1>
            <p>
              Cloud migration has become a critical initiative for enterprises
              looking to modernize their IT infrastructure and improve
              operational efficiency...
            </p>
          </div>

          {/* Trending Topics now inside left side */}
          <div className={styles.trendingWrapper}>
            <h3 className={styles.orange}>Trending Topics</h3>
            <div className={styles.trending}>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Business</h4>
                <div className={styles.circle}>1</div>
              </div>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Technology</h4>
                <div className={styles.circle}>1</div>
              </div>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Innovation</h4>
                <div className={styles.circle}>1</div>
              </div>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Growth</h4>
                <div className={styles.circle}>1</div>
              </div>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Strategy</h4>
                <div className={styles.circle}>1</div>
              </div>
              <div className={styles.topic}>
                <span>#</span>
                <h4>Leadership</h4>
                <div className={styles.circle}>1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.rightCard}>
          <div className={styles.updatesWrapper}>
            <h1>LATEST UPDATES</h1>

            {/* update 1 */}
            <div className={styles.updateItem}>
              <img src="/assets/images/blog-left.jpg" alt="Update" />
              <div>
                <h3>UPDATE</h3>
                <h2>
                  How Business Analytics <br />
                  Insight Transforms <br />
                  Decision-Making Across Industries
                </h2>
                <p>March 5, 2026</p>
              </div>
            </div>

            {/* update 2 */}
            <div className={styles.updateItemGrey}>
              <img src="/assets/images/blog-right.png" alt="Update" />
              <div>
                <h3>UPDATE</h3>
                <h2>
                  Cloud Migration <br />
                  Strategies for Enterprise
                </h2>
                <p>March 4, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
