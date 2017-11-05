import React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import Paper from "material-ui/Paper"

const style = {
  margin: 10,
  paddingBottom: 25
}

export default props => {
  if (props.never) return null
  if (props.always) return props.children
  return (
    <Tabs initialSelectedIndex={1}>
      <Tab label={props.positive}>
        <Paper style={style}>
          {props.children}
          </Paper>
      </Tab>
      <Tab label={props.negative} />
    </Tabs>
  )
}
