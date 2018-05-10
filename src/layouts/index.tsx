import * as React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
  <div>
    <Helmet title="ziorobo.co" />
    {children()}
  </div>
)
