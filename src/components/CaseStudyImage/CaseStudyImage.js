import * as React from "react"
import "./CaseStudyImage.css"
import "../layout.css"

export default function CaseStudyImage(props) {

  return (
    <div className="block_image">
      {props.image}
    </div>
  )
};