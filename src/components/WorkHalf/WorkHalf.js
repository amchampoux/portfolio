import * as React from "react"
import "./WorkHalf.css"
import "../layout.css"

export default function WorkHalf(props) {

  return (
    <div className="container">
      <div className="image">
        {props.image}
      </div>
      <div className="content" style={props.style}>
        <h1>{props.title}</h1>
        <p className="roles">{props.role}</p>
        <p className="description">{props.description}</p>
        <br/>
        <button className="primary_button griffin" onClick={props.link}>{props.buttonTitle}</button>
      </div>  
    </div>
  )
};