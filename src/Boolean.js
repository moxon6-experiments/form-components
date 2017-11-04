import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import { fakeEvent } from "./utils"

export default props => [
  <RaisedButton
    key={props.key + "-positive"}
    onClick={() => props.onChange(fakeEvent(true))}
    primary={props.value === true}
    label={props.positive}
    style={{ width: "50%" }}
  />,
  <RaisedButton
    key={props.key + "-negative"}
    onClick={() => props.onChange(fakeEvent(false))}
    primary={props.value === false}
    label={props.negative}
    style={{ width: "50%" }}
  />
]
