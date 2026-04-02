import React from "react";
import styles from "./intelligence.module.css";
import { RiRobot2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <section className={styles.intelligence}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerOverlay}>
            <h1>AI & Intelligence Solutions</h1>
            <p>
              Harness the power of artificial intelligence with our
              comprehensive suite of <br /> solutions. From computer vision to
              natural language processing, we help businesses <br /> transform
              data into actionable insights.
            </p>
          </div>
        </div>

        {/* AI Solutions Section */}
        <div className={styles.solutionsSection}>
          <h4 className={styles.pinkBg}>AI Solutions</h4>
          <h2>Our AI Solutions</h2>
          <p>
            Explore our comprehensive suite of artificial intelligence solutions
          </p>

          <div className={styles.cards}>
            {/* Card 1 */}
            <div className={styles.card}>
              <div className={`${styles.cardImage} ${styles.firstImage}`}></div>
              <div className={styles.cardContent}>
                <h2>Computer Vision</h2>
                <p>
                  Advanced image recognition and processing solutions for your
                  business needs.
                </p>
                <ul>
                  <li>
                    <span className={styles.blueBullet}></span>Object Detection
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Facial
                    Recognition
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Image
                    Classification
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <div
                className={`${styles.cardImage} ${styles.secondImage}`}
              ></div>
              <div className={styles.cardContent}>
                <h2>Natural Language Processing</h2>
                <p>
                  Unlock insights from text and speech with advanced NLP
                  solutions.
                </p>
                <ul>
                  <li>
                    <span className={styles.blueBullet}></span>Sentiment
                    Analysis
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Text
                    Classification
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Language
                    Translation
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <div className={`${styles.cardImage} ${styles.thirdImage}`}></div>
              <div className={styles.cardContent}>
                <h2>Predictive Analytics</h2>
                <p>
                  Forecast trends and outcomes with machine learning models.
                </p>
                <ul>
                  <li>
                    <span className={styles.blueBullet}></span>Text Generation
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Context
                    Understanding
                  </li>
                  <li>
                    <span className={styles.blueBullet}></span>Multi-language
                    Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Transform Section */}
        <div className={styles.transformSection}>
          <div className={styles.transformLeft}>
            <h1>Transform Your Business with AI</h1>
            <p>
              Our AI solutions help businesses automate processes, gain insights
              from data, and make better decisions. We combine cutting-edge
              technology with industry expertise to deliver measurable results.
            </p>
            <ul>
              <li>
                <span className={styles.check}></span>
                <span className={styles.bulletText}>
                  Automate repetitive tasks and workflows
                </span>
              </li>
              <li>
                <span className={styles.check}></span>
                <span className={styles.bulletText}>
                  Extract valuable insights from your data
                </span>
              </li>
              <li>
                <span className={styles.check}></span>
                <span className={styles.bulletText}>
                  Make data-driven decisions with confidence
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.transformRight}>
            <img src="/assets/images/leftpic.png" alt="Transform with AI" />
          </div>
        </div>

        {/* Quick Action Section */}
        <div className={styles.quickAction}>
          <h4 className={styles.pinkBg}>Quick Action</h4>
          <h1>Ready to Build with AI?</h1>
          <p>
            Access our comprehensive AI platform and start building intelligent
            applications today.
          </p>
          <button className={styles.actionBtn}>
            <RiRobot2Line className={styles.btnIcon} />
            <h3>Go to Intelligence Platform</h3>
          </button>
        </div>
      </section>
    </div>
  );
}