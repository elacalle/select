import Dropdown from '../lib/dropdown'

export default {title: 'Components/Dropdown'}

export const SimpleDropdown = () => ({
  components: { Dropdown },
  template: '<Dropdown />'
})

export const SimpleDropdownWithPlaceholder = () => ({
  components: { Dropdown },
  template: '<Dropdown placeholder="Select.."/>'
})
