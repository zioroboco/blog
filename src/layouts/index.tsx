import * as React from "react"
import Helmet from "react-helmet"
import { Textfit } from "react-textfit"

export default ({ children }) => (
  <div className="content">
    <Helmet
      title="ziorobo.co"
      style={[
        require("prism-themes/themes/prism-darcula.css"),
        require("../styles/base.css")
      ]}
    />
    <div id="header">
      <Textfit mode="single">{`ziorobo.co`}</Textfit>
    </div>
    {children()}
    <div id="footer">
      <a href="https://github.com/zioroboco">
        <img src={require("../static/images/GitHub-Mark-64px.png")} />
      </a>
    </div>
  </div>
)
