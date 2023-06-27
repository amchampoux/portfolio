import * as React from "react"
import "./CaseStudyProcess.css"
import "../layout.css"
import { StaticImage } from "gatsby-plugin-image"

export default function CaseStudyProcess(props) {

  return (
    <div className="process" style={props.style}>
      <h1 className="process_title">Design process</h1>
      <StaticImage
        src="./design-process.png"
        loading="eager"
        width={830}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Design process"
      />
    </div>
  )
};