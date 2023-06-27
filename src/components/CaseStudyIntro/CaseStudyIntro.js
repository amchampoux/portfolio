import * as React from "react"
import "./CaseStudyIntro.css"
import "../layout.css"
import NewLineText from "../NewLineText"

export default function CaseStudyIntro(props) {

  return (
    <div className="intro">
      <h1 className="intro_title">Project overview</h1>
      <div className="intro_content">
        <div className="intro_left">
          <p className="description">{props.description}</p>
          <button className="primary_button">{props.buttonLabel}</button>
        </div>
        <div className="intro_right">
          <h3>role</h3>
          {/* <NewLineText
            text= {props.role}
          /> */}
          <p className="role">{props.role}</p>
          <h3>client</h3>
          <p>{props.client}</p>
          <h3>date</h3>
          <p>{props.date}</p>
        </div>
      </div>
  </div>
  )
};