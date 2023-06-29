import * as React from "react"
import "./CaseStudyContentVisual.css"
import "../layout.css"

export default function CaseStudyContentVisual(props) {

  return (
    <div className="content_visual" style={props.style}>
      <h3>{props.supertitle}</h3>
      <h1 className="visual_title">{props.title}</h1>
      <div className="visual_image">
        {props.image}
      </div>
    </div>
  )
};