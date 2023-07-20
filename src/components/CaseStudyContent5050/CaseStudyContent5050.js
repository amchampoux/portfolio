import * as React from "react"
import "./CaseStudyContent5050.css"
import "../layout.css"

export default function CaseStudyContent5050(props) {

  return (
    <div className="content_5050">
        <div className="block_half" style={props.b1Style}>
          <h3>{props.b1Supertitle}</h3>
          <h1 className="half_title">{props.b1Title}</h1>
          <ol className="half_list">
            <li>{props.b1ListItem1}</li>
            <li>{props.b1ListItem2}</li>
            <li>{props.b1ListItem3}</li>
            {props?.b1ListItem4}
          </ol>
        </div>

        <div className="block_half" style={props.b2Style}>
          <h3>{props.b2Supertitle}</h3>
          <h1 className="half_title">{props.b2Title}</h1>
          <ol className="half_list">
            <li>{props.b2ListItem1}</li>
            <li>{props.b2ListItem2}</li>
            <li>{props.b2ListItem3}</li>
            {props?.b2ListItem4}
          </ol>
        </div>

    </div>

  )
};