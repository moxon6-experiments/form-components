import React from "react"
import { CardHeader } from "material-ui/Card"
import Avatar from "material-ui/Avatar"

const titleStyle = {
  fontSize: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  overflowX: "wrap"
}

const style = {
  paddingBottom: 0,
  marginBottom: 0 
}

export default props => (
  <CardHeader
    title={props.children}
    titleStyle={titleStyle}
    style={style}
    avatar={props.src ? <Avatar src={props.src} size={45} backgroundColor="transparent" /> : null}
  />
)
