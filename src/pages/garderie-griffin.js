import * as React from "react"
import CaseStudyHeader from "../components/CaseStudyHeader/CaseStudyHeader"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import CaseStudyIntro from "../components/CaseStudyIntro/CaseStudyIntro"
import CaseStudyProcess from "../components/CaseStudyProcess/CaseStudyProcess"
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
      />



    </Layout>

  )

  
}