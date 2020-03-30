import { shallowMount } from '@vue/test-utils';
import Burger from '../../src/components/Burger.vue';

describe('Burger.vue', () => {
  it('renders Burger', () => {
    const wrapper = shallowMount(Burger);
    expect(wrapper.html()).toContain('button');
  });

  it('renders Burger with type arrow', () => {
    const wrapper = shallowMount(Burger, {
      propsData: {
        type: 'arrow'
      }
    });
    expect(wrapper.html()).toContain('hamburger--arrow');
  });

  it('triggers event when Burger active state is changed', () => {
    const wrapper = shallowMount(Burger);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted('updated')).toHaveLength(1);
  });
});
