import * as React from "react"
import CaseStudyHeader from "../components/CaseStudyHeader/CaseStudyHeader"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro"
import CaseStudyProcess from "../components/CaseStudyProcess/CaseStudyProcess"
import CaseStudyContentBlock from "../components/CaseStudyContentBlock/CaseStudyContentBlock"
import CaseStudyContent5050 from "../components/CaseStudyContent5050/CaseStudyContent5050"
import CaseStudyContentVisual from "../components/CaseStudyContentVisual/CaseStudyContentVisual"
import CaseStudyImage from "../components/CaseStudyImage/CaseStudyImage"
import CaseStudyQuote from "../components/CaseStudyQuote/CaseStudyQuote"
// import NewLineText from "../components/NewLineText"

export default function VideotronPage () {


  return (
    <Layout>
      <CaseStudyHeader
        style={{ backgroundColor: `#EFECEB` }}
        title="Videotron x Sid Lee"
        image={
          <StaticImage
            src="../images/Videotron/main.png"
            loading="eager"
            width={882}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Videotron case study"
          />
        }
      />
      <CaseStudyIntro
        description={"Videotron mandated the Sid Lee team to support them in the implementation of the mobile roaming pass, a new service available to their customers traveling to Canada, the USA, and Europe.\n\nAs the UX Designer on the project, my goal was to understand the service and its technical dependencies to recommend the best user experience from the exit of the country to the return."}
        role= {'User Experience'}
        flexTitle="client"
        flexDescription="Videotron"
        date="2016"
        buttonLabel="Visit website"
        link="https://videotron.com/en"
      />
      <CaseStudyProcess 
        style= {{ backgroundColor: `#EFECEB`}}
        image={
          <StaticImage
            src="../images/design-process.png"
            loading="eager"
            width={830}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Design process"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="empathize"
        title="Market, product and user research"
        text={
          <div>
            <p>In collaboration with the Videotron team, the first step was to understand the new mobile roaming pass technical requirements. The engineering team led a couple of working sessions to share their knowledge with the product and design team.</p>
            <p>Then, it was important to understand how travelers interact with their mobile service when outside of their service coverage zone. Time was running, but we did a few interviews with frequent and occasional travelers. Here are some of the key findings:</p>
            <ul>
              <li>Occasional travelers are stressed about getting charged for data usage.</li>
              <li>During a trip, people are often in a hurry and don’t have time to read.</li>
              <li>Most people don't know exactly where to find information about roaming and tend to call the customer center before their travel.</li>
            </ul>
          </div>

        }
      />
      <CaseStudyContentBlock
        supertitle="define and ideate"
        title="Objectives"
        text="A brainstorm was organized to set the project objectives. We needed to find some solutions taking into account both business and user goals to ensure a successful experience."
        image={
          <StaticImage
            src="../images/Videotron/goals.png"
            loading="eager"
            width={871}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="project objectives"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="User flow"
        text="To have a clear understanding of the product activation conditions, it was helpful to build the full roaming user flow, starting from the exit of the country. It was a good starting point as well to determine all interfaces needed."
        image={
          <StaticImage
            src="../images/Videotron/flux.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="User flow"
          />
        }
      />
      <CaseStudyContentVisual
        style={{ backgroundColor: `#EFEFEF` }}
        supertitle="prototype"
        title="Wireframing"
        image={
          <StaticImage
            src="../images/Videotron/wireframes.png"
            loading="eager"
            width={1218}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Wireframes"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="Usability testing"
        text="The solution has been developed by the Videotron team and tested internally before launching the new product on the market."
      />
    </Layout>
  )  
}