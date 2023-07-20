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

export default function AuntBottiePage () {


  return (
    <Layout>
      <CaseStudyHeader
        style={{ backgroundColor: `#ECF4F3` }}
        title="Aunt Bottie"
        image={
          <StaticImage
            src="../images/Bottie/main.png"
            loading="eager"
            width={957}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Aunt Bottie application"
          />
        }
      />
      <CaseStudyIntro
        description={'Aunt Bottie is an AI powered web app allowing a customer to buy a plant as a gift and getting a personal card to accompany the delivery.\n\nThis application MVP was done as part of the LightHouseLabs Full Stack Web development Bootcamp.'}
        buttonLabel="See on GitHub"
        link="https://github.com/amchampoux/bottie"
        role= {'User Experience\nVisual Design\nDevelopment'}
        flexTitle="stack"
        flexDescription="React, Typescript, Axios, Express, Node.js, PostgreSQL, ChatGPT"
        date="2023"
      />
      <CaseStudyProcess 
        style= {{ backgroundColor: `#ECF4F3` }}
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
        text={
         <div>
          <p>The Plant and Flower industry is at the heart of the application. Before talking about functionalities, some research was needed to make sure that we have an overview of the market and to align our product objectives with business and user needs. We also wanted to have a good understanding of artificial intelligence emergence and figure out how we can leverage its benefits.</p>
          <p>Here are some key findings that guide us in the product definition.</p>
          <h4>Customers trends</h4>
          <ul>
            <li>Millennials saw the biggest demographic growth in 2021 houseplant sales at 65%. (Garden Center Magazine)</li>
            <li>Most people in the US still prefer to buy their houseplants from home improvement stores (30%) and garden centers (29%). (Floral Marketing Fund)</li>
            <li>19% of plant purchasers plan to increase their spending at online plant stores. (Floral Marketing Fund)</li>
            <li>59% of plant buyers say that houseplants are important to their health and wellness. (Craftjack)</li>
          </ul>
          <h4>Artificial intelligence (AI) </h4>
          <ul>
            <li>The AI market is growing by more than 20% each year.</li>
            <li>35% of businesses are already using AI tools in their everyday operations.</li>
            <li>97% of people who use a computerized device interact with AI on a daily basis.</li>
            <li>ChatGPT is a text-generating AI and reached more than 100 million users in a shorter time than any other software in history (less than 2 months). (findweb3)</li>
          </ul>
        </div>
        }
      />
      <CaseStudyQuote
        style= {{ backgroundColor: `#ECF4F3` }}
          text={'60-70% of plant purchasers indicate a positive likelihood to gift a houseplant. “Get Well” being the most likely occasion at 75.1%, “Mother’s Day” at 72.9% and “Thank You” at 71.7%.\n\nFloral Marketing Fund' 
        }
      />
      <CaseStudyContentBlock
        supertitle="empathize"
        title="Competitive analysis"
        text="There is a keen interest in the market for plant gifting and the use of AI, in particular ChatGPT is rising. How can our application stand out from the competition? An analysis of some key industry players helped us identify how Aunt Bottie can offer a distinctive service to its customers."
        image={
          <StaticImage
            src="../images/Bottie/benchmark.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Benchmark"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="define"
        title="Objectives"
        text="With the support of the information gathered, we brainstormed around our product definition. The product strategy needs to meet both business and user goals."
        image={
          <StaticImage
            src="../images/Bottie/goals.png"
            loading="eager"
            width={871}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="business and user goals"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="ideate"
        title="Minimal viable product (MVP)"
        text={
          <div>
            <p>From the product objectives, the minimal viable product (MVP) was defined. Here are the user requirements included in the first iteration:</p>
            <ul>
              <li>Users can browse through a curated selection of plants</li>
              <li>Users can log in to the app and access their account and orders information </li>
              <li>Users can configure their gift by getting an AI-generated personalized card</li>
              <li>Users can add gifts to their cart and then proceed to checkout</li>
            </ul>
          </div>
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="User flow"
        text="To ensure that we cover all user requirements, a user journey on the application was drawn. This allowed us to identify quickly the main interfaces needed."
        image={
          <StaticImage
            src="../images/Bottie/flow.png"
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
        title="Gift configuration"
        image={
          <StaticImage
            src="../images/Bottie/wireframes.png"
            loading="eager"
            width={1218}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Wireframes of gift configuration"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="UI style guide"
        image={
          <StaticImage
            src="../images/Bottie/styleguide.png"
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
        title="Mockups"
        image={
          <StaticImage
            src="../images/Bottie/mockups.png"
            loading="eager"
            width={1218}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Mockups"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="Iterate, iterate and iterate"
        text={`Aunt Bottie was created as our final Bootcamp project and we didn’t had much time to test our MVP solution. Having so, we would have validate at least the users understanding of the gift configuration steps, which is the most complex and important part of the app.\n\nWe have a backlog of improvements we would like to tackle that include taking advantage of AI for product recommendation and adding an order management system for admins. Before moving forward, the right approach would be to leverage the existing features, iterate on the current behaviors, than to increase the scope.`}
      />
      <CaseStudyImage
        image={
          <StaticImage
            src="../images/Bottie/final.png"
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