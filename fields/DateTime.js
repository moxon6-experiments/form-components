import React from "react"
import DatePicker from "material-ui/DatePicker"
import TimePicker from "material-ui/TimePicker"
import { fakeEvent, formatDate } from "./utils"

const style = {
  marginTop: 0,
  marginLeft: 20,
  marginBottom: 10
}

export default ({ onChange, value, title, name }) => (
  <span>
    <DatePicker
      name={name}
      style={style}
      value={value}
      formatDate={formatDate}
      onChange={(e, date) => onChange(fakeEvent(date))}
    />
    <TimePicker
      name={name}
      style={style}
      value={value}
      onChange={(e, date) => onChange(fakeEvent(date))}
    />
  </span>
)
