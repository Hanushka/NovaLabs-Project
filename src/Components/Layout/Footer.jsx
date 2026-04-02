import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.rows}>

        {/* Row 1 */}
        <div className={styles.col}>
          <h2 className={styles.logo}>Etihuku</h2>
          <p className={styles.desc}>
            End-to-end research and technology services driving innovation
            through strategic solutions.
          </p>
          <div className={styles.socials}>
            <img src="/assets/images/facebook.png" alt="Facebook" />
            <img src="/assets/images/twitter.png" alt="Twitter" />
            <img src="/assets/images/linkedin.png" alt="LinkedIn" />
            <img src="/assets/images/instagram.png" alt="Instagram" />
          </div>
        </div>

        {/* Row 2: */}
        <div className={styles.col}>
          <h3>About</h3>
          <ul>
            <li>
              <span className={styles.arrow}>&gt;</span> About Etihuku
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Just A Chance
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Careers
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Privacy Policy
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Blog
            </li>
          </ul>
        </div>

        {/* Row 3: */}
        <div className={styles.col}>
          <h3>Services</h3>
          <ul>
            <li>
              <span className={styles.arrow}>&gt;</span> Agile Software Delivery
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Cloud Engineering
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Strategic Assurance
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Data Science
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Business Analytics
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> Product Design
            </li>
            <li>
              <span className={styles.arrow}>&gt;</span> AI & Machine Learning
            </li>
          </ul>
        </div>

        {/* Row 4: */}
        <div className={styles.col}>
          <h3>Contact Us</h3>
          <div className={styles.contactItem}>
            <img src="/assets/images/email.png" alt="Email" />
            <div>
              <h4>Email</h4>
              <p>info@etihuku.com</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <img src="/assets/images/phone.png" alt="Phone" />
            <div>
              <h4>Phone</h4>
              <p>+27 11 470 0724</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <img src="/assets/images/location.png" alt="Address" />
            <div>
              <h4>Address</h4>
              <p>
                22 Magwa Crescent WaterFall City, Midrand Gauteng, South Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription box */}
      <div className={styles.subscribeBox}>
        <div className={styles.subscribeText}>
          <h3>Stay Connected</h3>
          <p>
            Subscribe to our newsletter for updates on industry trends,
            insights, and our latest projects.
          </p>
        </div>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Copyright */}
      <hr className={styles.line} />
      <p className={styles.copy}>© 2026 Etihuku. All rights reserved.</p>
    </footer>
  );
}
