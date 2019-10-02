import VBurger from './components/Burger.vue';
import 'hamburgers/dist/hamburgers.min.css';

const VBurgerPlugin = {
  install(Vue, options = {}) {
    const name = options.name || VBurger.name;
    Vue.component(name, VBurger);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VBurgerPlugin);
}

export default VBurgerPlugin;
export { VBurger, VBurgerPlugin };