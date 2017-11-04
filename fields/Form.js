import Paper from "material-ui/Paper"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { red700, red900 } from "material-ui/styles/colors"
import React from "react"

const style = {
  margin: 10,
  paddingBottom: 25
}

const muiTheme = getMuiTheme({
  fontFamily: "Lato",
  palette: {
    primary1Color: red900,
    primary2Color: red700,
    pickerHeaderColor: red900
  }
})

export default props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Paper zDepth={2} style={style}>
      {props.children}
    </Paper>
  </MuiThemeProvider>
)
