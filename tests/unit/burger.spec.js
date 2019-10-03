import { shallowMount } from '@vue/test-utils';
import { render } from '@vue/server-test-utils'
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

  it('changes Burger active state when clicked ', () => {
    const wrapper = shallowMount(Burger);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.$data.isActive).toBe(true);
    button.trigger('click');
    expect(wrapper.vm.$data.isActive).toBe(false);
  });

  it('triggers event when Burger active state is changed', () => {
    const wrapper = shallowMount(Burger);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted('update:active')).toHaveLength(1);
  });


  it('renders named slot', async () => {
    const wrapper = await render(Burger, {
      slots: {
        label: "My Menu"
      }
    });
    expect(wrapper.text()).toContain('My Menu');
  });
});
