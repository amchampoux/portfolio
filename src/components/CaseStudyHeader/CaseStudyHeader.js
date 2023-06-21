import * as React from "react"
import "./CaseStudyHeader.css"
import "../layout.css"

export default function CaseStudyHeader(props) {

  return (
    <div className="header" style={props.style}>
      <h3>case study</h3>
      <h1 className="header_title">{props.title}</h1>
      <div className="header_image">
        {props.image}
      </div>
    </div>
  )
};