import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <section className={styles.about}>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>
            About <span className={styles.orange}>Etihuku</span>
          </h1>
          <p>
            Etihuku is a pioneering research and technology services company,
            dedicated to driving innovation through strategic solutions that
            transform ideas into impactful realities.
            <br />
            <br />
            At Etihuku, we believe technology should serve a greater purpose.
            Beyond creating sophisticated systems, we're committed to developing
            solutions that make a meaningful difference in people's lives and
            drive sustainable growth for our clients. Founded on the principles
            of excellence and innovation, we've established ourselves as a
            trusted partner for organizations seeking to navigate the complex
            landscape of digital transformation. Our team of expert researchers,
            engineers, and technology consultants work collaboratively to
            deliver cutting-edge solutions tailored to meet the unique
            challenges of each client.
          </p>
        </div>
        <div className={styles.right}>
          <img src="/assets/images/bannerpic.png" alt="About Etihuku" />
        </div>
      </div>

      {/* Banner Section */}
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}>
          <h2>Discover Our Story</h2>
          <p>
            Learn more about Etihuku's mission, vision, and the values that
            drive our <br /> commitment to innovation and excellence.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className={styles.workspace}>
        <div className={styles.leftImage}>
          <img src="/assets/images/leftpic.png" alt="Workspace" />
          <div className={styles.gradientOverlay}>
            <h4>OUR WORKSPACE</h4>
            <p>
              Modern Collaborative <br /> Environment
            </p>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.vision}>
            <img src="/assets/images/eye.png" alt="Vision" />
            <div className={styles.textBlock}>
              <h2>Our Vision</h2>
              <p>
                Our vision at Etihuku is to be the forefront leader in driving
                technological advancement and transformation. We envision a
                future where businesses seamlessly integrate technology to
                unlock their full potential, making a positive impact on
                industries worldwide.
              </p>
            </div>
          </div>
          <div className={styles.mission}>
            <img src="/assets/images/tick.png" alt="Mission" />
            <div className={styles.textBlock}>
              <h2 className={styles.orange}>Our Mission</h2>
              <p>
                At Etihuku, our mission is to revolutionize the way businesses
                navigate the digital world. We strive to provide cutting-edge
                technology solutions that empower organizations to innovate,
                optimize efficiency, and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className={styles.coreValues}>
        <h4 className={styles.darkBlue}>Our Values</h4>
        <h1>
          <span className={styles.orange}>What</span> Defines Us: Etihuku's Core
          Values & Mission
        </h1>
        <p>
          Our core values guide everything we do and define who we are as a
          company.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/assets/images/animation1.jpg" alt="Customers First" />
            <h3>Customers First</h3>
            <p>
              We are in business to make our customers happy and meet their
              needs. Meeting the needs of our customers is an act we value
              dearly.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/assets/images/animation2.jpg" alt="Better Together" />
            <h3>Better Together</h3>
            <p>
              Our success depends upon the collective intelligence of our team
              members and the shared vision of our partners.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/assets/images/animation3.jpg" alt="Keep it real" />
            <h3>Keep it real</h3>
            <p>
              Do it right. Say and share the right thing. We manage tough
              situations with courage and candor with healthy debates and
              differences of opinion.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/assets/images/animation4.jpg" alt="Keep it simple" />
            <h3>Keep it simple</h3>
            <p>
              We create simple but powerful experiences because greatness is
              simple. We see with the eyes of our customers, listen with their
              ears and feel with their hearts.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/assets/images/animation5.jpg" alt="Set the bar high" />
            <h3>Set the bar high</h3>
            <p>
              We lead by doing the best work. What we do, we do very well. It is
              our nature to innovate and take responsibility for our actions.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src="/assets/images/animation6.png"
              alt="Never stop learning"
            />
            <h3>Never stop learning</h3>
            <p>
              Our growth as a company is a product of the growth of our
              individual team members. Grow daily. It compounds. Do your best
              work, daily.
            </p>
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className={styles.journey}>
        <h4 className={styles.darkBlue}>Our Journey</h4>
        <h1>
          <span className={styles.orange}>Our</span> Approach
        </h1>
        <p>
          From our humble beginnings to becoming a leading technology innovator,
          our <br /> approach has always been centered on creating impactful
          solutions that drive real <br /> value.
        </p>

        <div className={styles.approachCards}>
          
          {/* Card 1 */}
          <div className={styles.approachCard}>
            <div className={styles.topRow}>
              <div className={styles.iconBox}>
                <img
                  src="/assets/images/aboutCard1.png"
                  alt="Innovative Solutions"
                />
              </div>
              <h2>Innovative Solutions</h2>
            </div>
            <p>
              We approach every challenge with creativity and innovation,
              developing tailored solutions that address the unique needs of
              each client.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.approachCard}>
            <div className={styles.topRow}>
              <div className={styles.iconBox}>
                <img
                  src="/assets/images/aboutCard2.png"
                  alt="Collaborative Partnership"
                />
              </div>
              <h2>Collaborative Partnership</h2>
            </div>
            <p>
              We work closely with our clients, fostering long-term partnerships
              built on trust, transparency, and mutual success.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.approachCard}>
            <div className={styles.topRow}>
              <div className={styles.iconBox}>
                <img
                  src="/assets/images/aboutCard3.png"
                  alt="Accelerated Delivery"
                />
              </div>
              <h2>Accelerated Delivery</h2>
            </div>
            <p>
              Our agile methodology enables rapid development and deployment,
              helping clients quickly adapt to market changes.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.approachCard}>
            <div className={styles.topRow}>
              <div className={styles.iconBox}>
                <img
                  src="/assets/images/aboutCard4.png"
                  alt="Global Perspective"
                />
              </div>
              <h2>Global Perspective</h2>
            </div>
            <p>
              We bring global expertise with local understanding, creating
              solutions that work across diverse markets and cultures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
