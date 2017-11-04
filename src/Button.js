import React from "react"
import FloatingActionButton from "material-ui/FloatingActionButton"
import ContentAdd from "material-ui/svg-icons/content/add"
import ContentRemove from "material-ui/svg-icons/content/remove"
import RaisedButton from "material-ui/RaisedButton"

const style = { marginLeft: 20 }

export const Del = props => (
  <FloatingActionButton mini onClick={props.onClick} style={style}>
    <ContentRemove {...props} />
  </FloatingActionButton>
)

export const Add = props => (
  <FloatingActionButton mini onClick={props.onClick} style={style}>
    <ContentAdd {...props} />
  </FloatingActionButton>
)

export default ({children, ...props}) =>
  <RaisedButton
    {...props}
    label={children}
    style = {{ width: "50%" }}
  />