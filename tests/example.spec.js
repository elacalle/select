import { mount } from '@vue/test-utils';
import Dropdown from './../dist/main';

describe('when the select does not have options', () => {
  let wrapper;
  const placeholder = "Seleccionar.."

  beforeEach(() => {
    wrapper = mount(Dropdown);
  });

  it('appear default label', () => {
    const placeholder = wrapper.find('.select__option-selected').text();

    expect(placeholder).toBe(placeholder)
  });

  it('have placeholder as an option', async () => {
    await wrapper.find('.select__option-selected').trigger('click');
    
    expect(wrapper.find('.select-options__select').text()).toContain(placeholder)
  });
})