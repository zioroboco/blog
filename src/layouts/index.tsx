import * as React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <div className="content">
    <Helmet
      title="ziorobo.co"
      style={[
        "https://fonts.googleapis.com/css?family=Montserrat+Alternates",
        require("../styles/content.css"),
        require("../styles/base.css")
      ]}
    />
    <div id="header">ziorobo.co</div>
    {children()}
  </div>
)
