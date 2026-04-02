import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles["contact-page"]}>
      {/* Banner with overlay */}
      <section className={styles.banner}>
        <div className={styles.overlay}></div>
        <div className={styles["banner-text"]}>
          <h1>
            Get in <span className={styles.highlight}>Touch</span>
          </h1>
          <p>
            We'd love to hear from you! Whether you have a question about our
            services, need a quote, or want to discuss a project, our team is
            ready to help.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className={styles["cards-section"]}>
        <div className={styles.card}>
          <div className={styles["card-icon"]}>
            <img src="/assets/images/contactphone.png" alt="Phone" />
          </div>
          <h3>Phone</h3>
          <p>+27 11 470 0724</p>
        </div>

        <div className={styles.card}>
          <div className={styles["card-icon"]}>
            <img src="/assets/images/contactmail.png" alt="Email" />
          </div>
          <h3>Email</h3>
          <p>contact@etihuku.com</p>
        </div>

        <div className={styles.card}>
          <div className={styles["card-icon"]}>
            <img src="/assets/images/contactlocation.png" alt="Location" />
          </div>
          <h3>Address</h3>
          <p>
            22 Magwa Crescent, Waterfall City, Midrand, Gauteng, South Africa
          </p>
        </div>
      </section>

      {/* Form */}
      <section className={styles["form-section"]}>
        <form className={styles["contact-form"]}>
          <h2>Send a Message</h2>
          <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={styles["form-group"]}>
              <label>Email Address</label>
              <input type="email" placeholder="John@example.com" />
            </div>
          </div>
          <div className={styles["form-row"]}>
            <div className={styles["form-group"]}>
              <label>Phone Number</label>
              <input type="text" placeholder="+1 (234) 567-8900" />
            </div>
            <div className={styles["form-group"]}>
              <label>Subject</label>
              <input type="text" placeholder="Project inquiry" />
            </div>
          </div>
          <div className={`${styles["form-group"]} ${styles["full-width"]}`}>
            <label>Message</label>
            <textarea placeholder="Tell us about your project or inquiry..."></textarea>
          </div>
          <button type="submit" className={styles["send-btn"]}>
            <img src="/assets/images/send-message.png" alt="Send" /> Send
            Message
          </button>
        </form>
      </section>

      {/* Blue banner */}
      <section className={styles["blue-banner"]}>
        <div className={styles["banner-content"]}>
          <img src="/assets/images/contactpic.png" alt="Banner" />
          <div className={styles["banner-info"]}>
            <h1>Ready to start your next project?</h1>
            <p>
              Contact our team today to discuss how we can help bring your
              vision to life.
            </p>
            <div className={styles["banner-buttons"]}>
              <button className={styles["white-btn"]}> View Services</button>
              <button className={styles["blue-btn"]}>Learn About Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Background section */}
      <section className={styles["bg-section"]}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services and process.</p>
      </section>

      {/* Grid cards */}
      <section className={styles["grid-cards"]}>
        <div className={styles["grid-card"]}>
          <h1>What is your typical process for new projects?</h1>
          <p>
            We begin with a discovery call to understand your needs, followed by
            a detailed proposal. Once approved, we establish a project timeline
            and regular check-ins throughout the development process.
          </p>
        </div>

        <div className={styles["grid-card"]}>
          <h1>How long does a typical project take?</h1>
          <p>
            Project timelines vary based on scope and complexity. Small projects
            may take 2-4 weeks, while larger initiatives can take several
            months. We'll provide a detailed timeline during our initial
            consultation.
          </p>
        </div>

        <div className={styles["grid-card"]}>
          <h1>Do you provide support after project completion?</h1>
          <p>
            Yes, we offer ongoing support and maintenance packages for all our
            completed projects. This ensures your solution continues to run
            smoothly and stays up-to-date.
          </p>
        </div>

        <div className={styles["grid-card"]}>
          <h1>What industries do you specialize in?</h1>
          <p>
            While we have experience across various sectors, we particularly
            excel in healthcare, finance, education, e-commerce, and technology.
            However, our solutions can be tailored to any industry.
          </p>
        </div>
      </section>
    </div>
  );
}