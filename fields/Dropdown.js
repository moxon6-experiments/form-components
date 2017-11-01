import React from "react"
import { fakeEvent } from "./utils"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

export default ({ key, value, options, onChange, title }) => (
  <div style={{ paddingLeft: 20 }}>
    <SelectField
      floatingLabelText={title}
      value={value}
      fullWidth={true}
      onChange={(e, index, response) => onChange(fakeEvent(response))}
    >
      {options.map((entry, index) => 
        <MenuItem 
          key={`${key}/${index}`}
          value={entry}
          primaryText={entry}
        />
      )}
    </SelectField>
  </div>
)
