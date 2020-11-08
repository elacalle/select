import {} from './../../resources/styles/main.scss'
import template from './index.pug';

const Dropdown = {
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
    value: {
      required: false,
    },
    placeholder: {
      type: String,
      default: 'Seleccionar..',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    selectClass: {
      type: String,
      default: 'select-options',
    },
  },
  data: () => {
    return {
      isOpen: false,
      selectOptions: [
        {name: 'Seleccionar..', value: null}
      ]
    };
  },
  computed: {
    selectedOption() {
      if (this.options) {
        return this.options.find((option) => {
          return option.value === this.value;
        }) || {};
      }

      return {};
    }
  },
  methods: {
    select(option) {
      this.toggle()
      this.$emit('input', option.value)
    },
    toggle() {
      if(!this.disabled) {
        this.isOpen = !this.isOpen;
      }
    },
    toggleOut() {
      if (this.isOpen) {
        this.toggle();
      }
    },
  },
  mounted() {
    this.selectOptions = this.options;
    this.selectOptions.unshift({name: this.placeholder, value: null})
  },
  template
};

export default Dropdown;