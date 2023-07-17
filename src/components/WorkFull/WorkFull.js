import * as React from "react"
import "./WorkFull.css"
import "../layout.css"

export default function WorkFull(props) {

  return (
    <div className="container_full" style={props.style}>
      <div className="content_full">
        <h1>{props.title}</h1>
        <p className="roles">{props.role}</p>
        <p className="description">{props.description}</p>
        <button className="primary_button griffin" onClick={props.link}>{props.buttonTitle}</button>
      </div>  
      <div className="image_full">
        {props.image}
      </div>
    </div>
  )
};