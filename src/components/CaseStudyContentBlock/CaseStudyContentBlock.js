import * as React from "react"
import "./CaseStudyContentBlock.css"
import "../layout.css"

export default function CaseStudyContentBlock(props) {

  return (
    <div className="block">
      <div className="block_content">
        <h3>{props.supertitle}</h3>
        <h1 className="content_title">{props.title}</h1>
        <p className="content_text">{props?.text}</p>
        <div className="content_image">
          {props?.image}
        </div>
      </div>
     
    </div>
  )
};