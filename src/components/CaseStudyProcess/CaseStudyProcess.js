import * as React from "react"
import "./CaseStudyProcess.css"
import "../layout.css"

export default function CaseStudyProcess(props) {

  return (
    <div className="process" style={props.style}>
      <h1 className="process_title">Design process</h1>
      {props.image}
    </div>
  )
};