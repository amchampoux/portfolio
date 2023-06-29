import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import WorkHalf from "../components/WorkHalf/WorkHalf"
import { StaticImage } from "gatsby-plugin-image"
import WorkFull from "../components/WorkFull/WorkFull"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

export default function IndexPage() {
  return (
  <Layout>
    <div className={styles.hero}>
      <h1 className={styles.title}>I am Anne-Marie, a Product Designer and Front-end Developer living in Montreal.</h1>
    </div>
    <WorkHalf
      title="Garderie Griffin"
      role="ux — ui — dev"
      description="Designing and integrating a new website for a kindergarten."
      buttonTitle="Read case study"
      link={()=>{navigate("/garderie-griffin")}}
      style={{ backgroundColor: `#FFF3E7` }}
      image = {
        <StaticImage
          src="../images/Griffin/main.png"
          loading="eager"
          width={610}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      }
    />
    <WorkFull
      title="Bottie"
      role="ux — ui — dev"
      description="Design and develop an AI Powered web app allowing a customer to buy a plant as a gift."
      buttonTitle="Read case study"
      style={{ backgroundColor: `#ECF4F3` }}
      image = {
        <StaticImage
          src="../images/Bottie/main.png"
          loading="eager"
          width={957}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      }
    />
    <WorkHalf
      title="Transat x Mirego"
      role="ux"
      description="Rethink the mobile application experience."
      buttonTitle="Read case study"
      style={{ backgroundColor: `#E3E8EF` }}
      image = {
        <StaticImage
          src="../images/Transat/main.png"
          loading="eager"
          height={475}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      }
    />
    <WorkFull
      title="Hogbnk"
      role="ux — ui — dev"
      description="Design and develop a budget management application."
      buttonTitle="Read case study"
      style={{ backgroundColor: `#F0E8E4` }}
      image = {
        <StaticImage
          src="../images/Hogbnk/main.png"
          loading="eager"
          width={844}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      }
    />
    <WorkHalf
      title="Videotron x Sidlee"
      role="ux"
      description="Enhance the roaming on mobile experience for travelers."
      buttonTitle="Read case study"
      style={{ backgroundColor: `#EFECEB` }}
      image = {
        <StaticImage
          src="../images/Videotron/main.png"
          loading="eager"
          width={591}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      }
    />


      
    {/* <div className={styles.textCenter}>  */}


       {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul> 
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

// export default IndexPage


// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]