import React from 'react'
import { Select } from 'semantic-ui-react'

const animalOptions = [
  { key: 'animal1', value: 'gou', text: 'Dog' },
  { key: 'animal2', value: 'xiang', text: 'Elephant' },
  { key: 'animal3', value: 'hou', text: 'Monkey' },
  { key: 'animal4', value: 'hu', text: 'Ox' },
  { key: 'animal5', value: 'xiongmao', text: 'Panda' },
  { key: 'animal6', value: 'zhu', text: 'Pig' },
  
]

const SelectAnimal = () => (
  <Select 
  options={animalOptions}
   />
)

export default SelectAnimal