import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../components/about.module.css"



export default function AboutPage () {

  return (
    <Layout>
      <div className={styles.about}>
        <StaticImage
            className={styles.profile}
            src="../images/profile2.png"
            loading="eager"
            width={430}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="User flow"
          />
        <div className={styles.description}>
          <h1>Hi, I am Anne-Marie.</h1>
          <p>I am a Product Designer and Front-end Developer with a passion for creating user-centric products. I am committed to delivering engaging and meaningful user experiences.</p>
          <p>Every time I someone enjoy an application I worked on, it reminds me why I do what I do: To help people in their daily life, to improve productivity at work, to ease access to information, or just to entertain.</p>
          <p>As far as I remember, I have always had an attraction and talent for the arts. It took time before I find my way into digital design. With the rise of social media around 2010, I realize that I wanted to have an impact on people through the technology that was taking more and more place in our lives.</p>
          <p>I completed a Master's degree in Interaction design at Laval University where I learned about interface design, information architecture, and design fundamentals.</p>
          <p>From there, my career as a UX designer started. I had the chance to work in various fields:</p>
          <ul className={styles.fields}>
            <li>💰 Banking</li>
            <li>📺 Entertainment</li>
            <li>🍷 E-Commerce</li>
            <li>✈️ Traveling</li>
            <li> And more!</li>
          </ul>
          <p>With every new project, comes an industry with its trends, users, behaviors, and goals to achieve. It is fulfilling to immerse yourself in a new environment every time and to create a product that matters.</p>
          <p>Working in interactive agencies for more than 12 years now, I had the chance to were multiple hats, including the one of Product Owner. As well, during the last few years, I decided to leap into development. What was at first a hobby became a passion, so I undertook to perfect my learning with LightHouseLabs. </p>
          <p>Hard work pays off, and today, I am happy to be working on what I love ❤️ </p>
        </div>
      </div>
    </Layout>
  ) 
}