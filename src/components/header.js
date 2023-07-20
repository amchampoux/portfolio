import * as React from "react"
import { Link } from "gatsby"
import "./header.css"
import { withPrefix } from "gatsby"
import PDF from '../static/amc-resume2.pdf'

export default function Header() {

  return (
    <header>
      <div className="nav-container">
        <div className="nav-left">
          <Link className="primary-link" to="/">Anne-Marie Champoux</Link>
        </div>
        <ul className="nav-right">
          <li><Link className="secondary-link" to="/">Work</Link></li>
          <li><Link className="secondary-link" to="/about">About</Link></li>
          <li><a className="secondary-link" rel="noopener noreferrer" href={PDF} target="_blank"> Resume</a></li>
        </ul>
      </div>
    </header>

  )};




