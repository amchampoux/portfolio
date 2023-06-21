import * as React from "react"
import CaseStudyHeader from "../components/CaseStudyHeader/CaseStudyHeader"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function GarderieGriffinPage () {

  return (
    <Layout>
      <CaseStudyHeader
        style={{ backgroundColor: `#FFF3E7` }}
        title="Garderie Griffin"
        image = {
          <StaticImage
            src="../images/Griffin/main.png"
            loading="eager"
            width={620}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        }
      />


    </Layout>

  )

  
}