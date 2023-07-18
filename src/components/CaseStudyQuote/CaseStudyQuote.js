import * as React from "react"
import "./CaseStudyQuote.css"
import "../layout.css"

export default function CaseStudyQuote(props) {

  return (
    <div className="quote">
        <div className="quote_container">
            <div className="quote_color" style={props.style}></div>
            <p className="quote_text">{props.text}</p>
        </div>
    </div>
  )
};