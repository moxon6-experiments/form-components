import Boolean from "./Boolean"
import Button from "./Button"
import DateTime from "./DateTime"
import DynamicList from "./DynamicList"
import Dropdown from "./Dropdown"
import Text from "./TextInput"
import Header from "./Header"
import FormTitle from "./FormTitle"
import Form from "./Form"
import Divider, {DividerHOC} from "./Divider"
import Tab from "./Tabs"
import DrawerButton from "./Drawer"
import { onlyUpdateForKeys, compose, setDisplayName } from 'recompose'

const Fields = {
  Boolean,
  Button,
  DateTime,
  DynamicList,
  Dropdown,
  Text,
  Header,
  FormTitle,
  Form,
  Divider,
  Tab,
  DrawerButton
}

const enhance = key => compose(
  setDisplayName(`Fields.${key}`),
  onlyUpdateForKeys(['value', 'children', 'error']),
  DividerHOC 
)

for (let key in Fields) {
  Fields[key] = enhance(key)(Fields[key])
}

export default Fields
