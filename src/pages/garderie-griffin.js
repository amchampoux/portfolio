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
        link="https://garderiegriffin.com/en/home/"
        role= {'User Experience\nVisual Design\nWordpress Integration'}
        flexTitle="Client"
        flexDescription="Garderie Griffin"
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
        text="The new mom and the professional constitute the major part of Garderie Griffin customer base. To make sure that the solution will align with their navigation behaviour, I built a user flow."
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
      <CaseStudyContentBlock
        supertitle="prototype"
        title="Information architecture"
        text="Based on the user needs, their navigation pattern and the information available about the kindergarten, an information architecture was created and helped to structure the new website."
        image={
          <StaticImage
            src="../images/Griffin/arbo.png"
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
            src="../images/Griffin/wireframes.png"
            loading="eager"
            width={1220}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="Website wireframes"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="UI style guide"
        image={
          <StaticImage
            src="../images/Griffin/styleguide.png"
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
            src="../images/Griffin/ui.png"
            loading="eager"
            width={1220}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="website ui mockups"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="prototype"
        title="Reusable components"
        text="One of the objectives of the new website was to be easy to maintain. To make sure that the team members without prior programming knowledge can update the website, several reusable components have been created."
        image={
          <StaticImage
            src="../images/Griffin/components.png"
            loading="eager"
            width={950}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="User flow"
          />
        }
      />
      <CaseStudyContentBlock
        supertitle="test"
        title="Usability testing"
        text="Many iterations were done on the information architecture and mockups until most of the key users feed back were addressed. Today, the website is still evolving and it is really helpful to organize user testing session before implementing new features."
      />
      <CaseStudyImage
       image={
        <StaticImage
          src="../images/Griffin/final.png"
          loading="eager"
          width={1353}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="User flow"
        />
       }
      />

    </Layout>

  )

  
}