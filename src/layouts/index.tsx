import * as React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <div className="content">
    <Helmet
      title="ziorobo.co"
      style={[
        require("prism-themes/themes/prism-darcula.css"),
        require("../styles/base.css")
      ]}
    />
    <div id="header">ziorobo.co</div>
    {children()}
  </div>
)
