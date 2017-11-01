import MaterialDivider from "material-ui/Divider"
import React from "react"

const Spacer = props => <div className="test" style={{ height: "40px" }} />

const Divider = props => [
  props.line ? <MaterialDivider key={props.key + "line"} /> : null,
  props.spacer ? <Spacer key={props.key + "spacer"} /> : null
]

export const DividerHOC = Component => ({ line, spacer, ...restProps }) =>
  <span>
    <Component {...restProps} />
    <Divider line={line} spacer={spacer} />
  </span>

export default Divider 


