<p align="center">
  <a href="#">
    <img width="150"src="./example/assets/burger.svg">
  </a>
</p>
<h1 align="center">Vue Burger</h1>
<p align="center">Vue.js plugin for <a href="https://github.com/jonsuh/hamburgers">Tasty CSS-animated hamburgers</a></p>

## About

Vue Burger is a Vue component/plugin that is a wrapper around [Tasty CSS-animated hamburgers](https://github.com/jonsuh/hamburgers), well known css library for hamburger icons. 

## Installation

```
npm install vue-burger
# or
yarn add vue-burger
```

## Initialization

```js
import App from './App.vue';
import VBurger from 'vue-burger';
import Vue from 'vue';

Vue.use(VBurger);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

`VBurger` component can be used in without plugin initialization:
```vue
<template>
  <v-burger/>
</template>

<script>
import { VBurger } from 'vue-burger';

export default { 
  component: {
    VBurger
  }
}
</script>
```

## Usage

```vue
<template>
  <v-burger 
    :type="arrow" 
    :burgerStyle="style">
  </v-burger>
</template>
```

### Props

### type
  -  type: `String`, 
  -  default: 'boring'
### burgerStyle
  -  type: `Object`, 
  -  default: `{}`
### ariaLabel
  -  type: `String`, 
  -  default: 'Menu'
### ariaControls
  -  type: `String`, 
  -  default: 'navigation'
### tabIndex
  -  type: `Number`, 
  -  default: `0` 

### Types of burger
Available types are: 

- 3dx,
- 3dx-r,
- 3dy,
- 3dy-r,
- 3dxy,
- 3dxy-r,
- arrow,
- arrow-r,
- arrowalt,
- arrowalt-r,
- arrowturn,
- arrowturn-r,
- boring,
- collapse,
- collapse-r,
- elastic,
- elastic-r,
- emphatic,
- emphatic-r,
- minus,
- slider,
- slider-r,
- spring,
- spring-r,
- stand,
- stand-r,
- spin,
- spin-r,
- squeeze,
- vortex,
- vortex-r

You can see all the types in actions on official documentation for [Hamburgers](https://jonsuh.com/hamburgers/).

### Styling the burger

For styling regular CSS variables are used. Variables are defined 
in `burgerStyle` prop. Available variables:
- `--padding` - padding of the hamburger box, **default**: 15px
- `--bg-color` - hamburger background color, **default**: transparent
- `--box-width` - hamburger box width, **default**: 40px;
- `--box-height` - hamburger box height, **default**: 24px;
- `--layer-width` - width of each hamburger layer, **default**: 40px;
- `--layer-height` - width of each hamburger layer, **default**: 4px
- `--layer-bg-color` - layer background color, **default**: #000000
- `--active-layer-bg-color` - layer background color when in active state, **default**: `--layer-bg-color`

Example: 
```vue
<template>
  <v-burger 
    :type="arrow" 
    :burgerStyle="style">
  </v-burger>
</template>

<script>
  export default {
    data() {
      return {
        burgerStyle: {
          '--padding': '10px',
          '--layer-bg-color': 'yellow',
          '--active-layer-bg-color: '#ABABAB'
          '--layer-width: '20px'
        }
      }
    }
  }
</script>
```

Icon made by  [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon](https://www.flaticon.com/).
    