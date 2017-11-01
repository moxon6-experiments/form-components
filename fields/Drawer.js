import React from "react"
import MDrawer from "material-ui/Drawer"
import { withState } from "recompose"

const Drawer = ({ key, open, setOpen, children }) => [
  <button key={key + "button"} onClick={() => setOpen(x => !x)}>
    Debugging Panel
  </button>,
  <MDrawer key={key + "drawer"} open={open} docked={false} onRequestChange={() => setOpen(x => false)} width={300}>
    {children}
  </MDrawer>
]

export default withState("open", "setOpen", false)(Drawer)
