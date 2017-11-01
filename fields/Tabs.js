import React from "react"
import { Tabs, Tab } from "material-ui/Tabs"
import Paper from "material-ui/Paper"

const style = {
  margin: 10,
  paddingBottom: 25
}

export default props => {
  if (props.never){
    return null
  } else if (props.always){
    return props.children
  } else {
    return (
      <Tabs>
        <Tab label={props.negative} />
        <Tab label={props.positive}>
          <Paper style={style}>
            {props.children}
            </Paper>
        </Tab>
      </Tabs>
    )
  }
}
