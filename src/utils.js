import moment from 'moment'

export const fakeEvent = value =>({ target: { value }})

export const replaceEntry = arr => index => val => {
  const newArr = [...arr]
  newArr[index] = val
  return newArr.filter(x => !!x)
}

export const addEntry = arr => [...arr, { name: "", price: "" }]
export const removeEntry = arr => arr.slice(0, arr.length - 1)
export const formatDate = d => moment(d).format("DD MMMM YYYY")