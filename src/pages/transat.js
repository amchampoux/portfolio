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

export default function TransatPage () {


  return (
    <Layout>
      <CaseStudyHeader
        style={{ backgroundColor: `#E3E8EF` }}
        title="Transat x Mirego"
        image={
          <StaticImage
            src="../images/Transat/main.png"
            loading="eager"
            width={204}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Transat application"
          />
        }
      />
      <CaseStudyIntro
        description={'With the desire to pursue its mission of offering its customers the best support, Transat mandates the Mirego team to rethink the mobile application experience.\n\nWith the objectives to better inform, ease access to content and facilitate contact with an agent, we planned several design workshops and testing sessions to deliver a stellar experience.'}
        role= {'User Experience'}
        flexTitle="client"
        flexDescription="Transat"
        date="2019 - 2020"
        buttonLabel="Get the application"
        link="https://www.airtransat.com/en-CA/corporate-information/air-transat-apps"
      />
      <CaseStudyProcess 
        style= {{ backgroundColor: `#E3E8EF` }}
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
        title="Market research"
        text={"The first step was to ensure that the team understand the current mobile application usage and was aware of the user's feedback. An analysis of the available metrics and store reviews has been completed and the results shared with all project stakeholders.\n\nAdditional research was done as well to develop a common understanding of the typical traveler habits and the competition offer."}
      />
      <CaseStudyContentBlock
        supertitle="empathize"
        title="Mobile trends"
        text="It is a proven practice to increase research to other industries to stand out from the competition. We looked into some mobile application trends to find new patterns well-known by mobile application users to bring the Transat mobile application to another level."
        image={
          <StaticImage
            src="../images/Transat/trends.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Benchmark"
          />
        }
      />
      <CaseStudyContent5050
        b1Style= {{ backgroundColor: `#E3E8EF` }}
        b1Supertitle= "define"
        b1Title= "The problem"
        b1ListItem1= "Despite the presence of a diary, several essential travel information are not indicated."
        b1ListItem2= "Only a few direct links to purchase complementary products to enhance the travel experience."
        b1ListItem3= "We cannot link a travel to a specific traveler in order to personalize the experience."

        b2Style= {{ backgroundColor: `#E3E8EF` }}
        b2Supertitle= "ideate"
        b2Title= "The solution"
        b2ListItem1= "Better inform and anticipate customer questions by facilitating access to information, before, during, and after his trip."
        b2ListItem2= "Simplify access to complementary products."
        b2ListItem3= "Increase the knowledge of the users to better meet their needs."
      />
      <CaseStudyContentBlock
        supertitle="ideate"
        title="Crazy 8"
        text={"All project stakeholders were involved in the creative process. After establishing the problem and defining a solution perimeter, some brainstorming activities were organized. A Crazy 8 workshop was planned in two parts: A maximum solution for a specific question needed to be drawn in eight minutes. Then, after a round of presentations, we voted for our favorite ones.\n\nThe second workshop that took place was a whiteboard session where we visually explored some concepts voted on previously. After those sessions, the UX team was ready to craft the first wireframes."}
        image={
          <StaticImage
            src="../images/Transat/crazy8.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="business and user goals"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="Navigation revamp"
        text="With the application redesign objectives in mind, the Tab bar navigation and Menu Plus were revised based on the application usage data gathered."
        image={
          <StaticImage
            src="../images/Transat/nav.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="business and user goals"
          />
        }
      />
      <CaseStudyContentVisual
        style={{ backgroundColor: `#EFEFEF` }}
        supertitle="prototype"
        title="Wireframing"
        image={
          <StaticImage
            src="../images/Transat/wireframes.png"
            loading="eager"
            width={1218}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Wireframes of gift configuration"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="Usability testing"
        text={
            <div>
                <p>User tests were organized and executed by the experience agency Atecna. We wanted to get users feedback on our current solution by validating those hypothesis:</p>
                <ul>
                    <li>Seat and baggage information is quickly accessible to the user.</li>
                    <li>The distinction between a trip and an itinerary is clear.</li>
                    <li>Users are interested in the information offered by the application during their vacation.</li>
                    <li>The possibility of checking in online without adding a trip is not considered by users.</li>
                </ul>
            </div>
        }/>
      <CaseStudyContent5050
        b1Style= {{ backgroundColor: `#E3E8EF` }}
        b1Supertitle= "test"
        b1Title= "Positive feedback"
        b1ListItem1= "The new design of the travel page has been very well received."
        b1ListItem2= "Support 24 hours before the flight was much appreciated, as was the organization of the page."
        b1ListItem3= "The days before the flight countdown is stimulating."
        b1ListItem4={<li>The flight information provided is complete.</li>}

        b2Style= {{ backgroundColor: `#E3E8EF` }}
        b2Supertitle= "test"
        b2Title= "Areas for improvement"
        b2ListItem1= "Inactive statuses of check-in and boarding pass must be more explicit."
        b2ListItem2= "All-inclusive package info should be regrouped. Users do not plan to open the app much during holidays."
        b2ListItem3= "Luggage and seats info are located at a too deep level."
        b2ListItem4={<li>Online registration must be mentioned on the home.</li>}
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="Card sorting"
        text={"Finally, we wanted to validate the content categorization proposed for the ‘My itinerary’ section. A card sorting exercise has been completed with 21 participants, of which 75% plan three plane trips or more per year.\n\nParticipants were given a list of content blocks and they needed to organize them in logical categories. The results obtained guide us in enhancing the content structure."}
        image={
          <StaticImage
            src="../images/Transat/cardsorting.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="business and user goals"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="... A few years later"
        text="In March 2020,  the Covid pandemic affected the globe without saving the travel industry. My work as a UX designer has to stop on this project. Fortunately, it was reconducted years later, and the revamped experience saw the light in the spring of 2023."
      />
      <CaseStudyImage
        image={
          <StaticImage
            src="../images/Transat/final.png"
            loading="eager"
            width={1350}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Final design"
          />
        }
      />
    </Layout>
  )  
}