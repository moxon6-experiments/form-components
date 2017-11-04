import React from "react"
import TextField from "material-ui/TextField"

const style = {
  marginTop: 0,
  marginLeft: 20,
  marginBottom: -8,
  marginRight: -10
}

const floatingLabelShrinkStyle = {
  fontSize: 20
}

export default props => (
  <TextField
    {...props}
    value={props.value || ''}
    style={style}
    fullWidth={true}
    floatingLabelShrinkStyle={floatingLabelShrinkStyle}
    underlineShow={false}
    autoComplete="off"
    hintText={props.title}
  />
)
