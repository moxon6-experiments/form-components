import React from "react"
import { fakeEvent } from "./utils"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

const onChange = (e, index, response) => onChange(fakeEvent(response))

export default ({ key, value, options, onChange, title }) => (
  <div style={{ paddingLeft: 20 }}>
    <SelectField
      floatingLabelText={title}
      value={value}
      fullWidth={true}
      onChange={options.length 
        ? (e, index, response) => onChange(fakeEvent(response))
        : () => null}
    >
      {options.map((entry, index) => 
        <MenuItem 
          key={`${key}/${index}`}
          value={entry.id}
          primaryText={entry.text}
        />
      )}
    </SelectField>
  </div>
)
