import * as React from "react"
import CaseStudyHeader from "../components/CaseStudyHeader/CaseStudyHeader"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro"
import CaseStudyProcess from "../components/CaseStudyProcess/CaseStudyProcess"
import CaseStudyContentBlock from "../components/CaseStudyContentBlock/CaseStudyContentBlock"
import CaseStudyContent5050 from "../components/CaseStudyContent5050/CaseStudyContent5050"
// import NewLineText from "../components/NewLineText"

export default function GarderieGriffinPage () {


  return (
    <Layout>
      <CaseStudyHeader
        style={{ backgroundColor: `#FFF3E7` }}
        title="Garderie Griffin"
        image={
          <StaticImage
            src="../images/Griffin/main.png"
            loading="eager"
            width={620}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Garderie griffin website"
          />
        }
      />
      <CaseStudyIntro
        description={'Garderie Griffin is a private kindergarten, well established  in Montreal, Griffintown since 10 years.\n\nWord of mouth was mainly how they acquire new clients. With the rise of newcomers in the neighborhood, a responsive website easily maintenable was a must have.'}
        buttonLabel="Visit website"
        role= {'User Experience\nVisual Design\nWordpress Integration'}
        client="Garderie Griffin"
        date="2021 - today"
      />
      <CaseStudyProcess 
        style= {{ backgroundColor: `#FFF3E7` }}
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
        title="User interviews"
        text={'Being a mother of two, I know how it feels trying to find the perfect kindergarten for your kid, visit a lot of places, subscribe to too many waiting lists, and start to stress out a few weeks before going back to work.\n\nAlthough I had my journey, I wanted to hear about the experience of other parents to have a clear understanding of the various challenges when searching for a kindergarten. I conducted interviews with four parents of Griffin Kindergarten and two parents who choose another place in the neighborhood.\n\nI asked them to explain their search process, their motivations, frustrations, and how they made their choice.'}
      />
      <CaseStudyContentBlock
        supertitle="define"
        title="User personas"
        text="A lot of good insights came from the user interviews. Depending on the family situation, their location, the age of their kids, the needs where different. Those findings allowed me to define the main user personas to refer to along this project."
        image={
          <StaticImage
            src="../images/Griffin/personas.png"
            loading="eager"
            width={915}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="User personas"
          />
        }
      />
      <CaseStudyContent5050
      b1Style= {{ backgroundColor: `#FFF3E7` }}
      b1Supertitle= "define"
      b1Title= "The problem"
      b1ListItem1= "People needs to have a good impression from the first click on the website."
      b1ListItem2= "People needs to understand he culture, the values and learn about the team."
      b1ListItem3= "People needs to access quickly to practical information."

      b2Style= {{ backgroundColor: `#FFF3E7` }}
      b2Supertitle= "ideate"
      b2Title= "The solution"
      b2ListItem1= "The use of vibrant colors and soft imagery can communicate comfort and childhood."
      b2ListItem2= "In-depth and well structured explanatory content pages."
      b2ListItem3= "Access to key sections from the first level of navigation."
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="User flow"
        text="The new mom and the professional constitute the major part of Garderie Griffin customer base. In order to make sure that the  solution will align with their navigation behaviour, I built a user flow."
        image={
          <StaticImage
            src="../images/Griffin/userflow.png"
            loading="eager"
            width={641}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="User flow"
          />
        }
      />
    </Layout>

  )

  
}