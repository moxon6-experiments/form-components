import React from "react"
import { compose } from "recompose"

import Header from "./Header"
import Divider from "./Divider"
import Text from "./TextInput"
import { Add, Del } from "./Button"
import {addEntry, removeEntry, replaceEntry, fakeEvent} from './utils'

const handleNameChange = value => e => ({ ...value, name: e.target.value })
const handlePriceChange = value => e => ({ ...value, price: e.target.value })

const DynamicListEntry = ({ value, index, onChange, name }) =>
  <span>
    <Header> Drinks Choice {index + 1} </Header>
    <Text name={name + 'name'} value={value ? value.name : ""} onChange={compose(onChange, handleNameChange(value))} title="Name" />
    <Divider line />
    <Text name={name + 'price'} value={value ? value.price : ""} onChange={compose(onChange, handlePriceChange(value))} title="Price" />
    <Divider line />
  </span>

const DynamicList = ({ name, value, key, onChange, title, ...restProps, error }) => {
  const handleChange = compose(onChange, fakeEvent)
  const update = replaceEntry(value)
  const dynamicListEntries = value.map((entry, i) =>
    <DynamicListEntry
      index={i}
      name={name + 'i'}
      value={entry}
      onChange={compose(handleChange, update(i))}
      key={"dynamicEntry_" + i}
    />
  )
  return (
    <div>
      <Add key="remove-choice" onClick={e => handleChange(addEntry(value))} />
      <Del key="add-choice" onClick={e => handleChange(removeEntry(value))} />
      {dynamicListEntries}
      <pre>
        {JSON.stringify(error)}
      </pre>
    </div>
  )
}

export default DynamicList
