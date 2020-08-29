import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = () => (
  <footer className="darkFooter">
    <div className="darkFooter_overlay">
      <div className="container">
        <h4>I'm also a...</h4>
        <Link to="/dad/">Dad</Link> <br />
        <Link to="/husband/">Husband</Link> <br />
        <Link to="/web-developer/">Web Developer</Link> <br />
        <Link to="/archer/">Archer</Link>
      </div>
    </div>

    <div className="builtWith">
      <small>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </small>
    </div>
  </footer>
)

export default Footer
