import * as React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import "./WorkHalf.css"

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
        <button>{props.buttonTitle}</button>
      </div>  
    </div>
  )
};