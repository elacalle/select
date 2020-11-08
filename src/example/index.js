import template from './index.pug';
import Dropdown from '../lib/dropdown'

export default {
  template,
  data: () => {
    return {
      options: [
        {name: 'Volskwagennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', value: 0},
        {name: 'Volvo', value: 1},
        {name: 'Seat', value: 2}
      ],
      selectedOption: null,
      errors: {
        selectedOption: null
      }
    }
  },
  watch: {
    selectedOption(value) {
      this.errors.selectedOption = value === null ? 'Error' : null; 
    }
  },
  components: {
    Dropdown
  }
};