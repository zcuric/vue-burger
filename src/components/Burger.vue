<template>
  <button
    :class="[`hamburger--${type}`, { 'is-active': active } ]"
    :style="burgerStyle"
    :aria-label="ariaLabel"
    :aria-controls="ariaControls"
    :aria-expanded="active"
    :tabindex="tabIndex"
    @click="$emit('updated', !active)"
    class="hamburger"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <slot name="label"></slot>
  </button>
</template>

<script>
export default {
  name: "v-burger",
  props: {
    active: { type: Boolean, default: false },
    type: { type: String, default: "boring" },
    burgerStyle: { type: Object, default: () => ({}) },
    ariaLabel: { type: String, default: "Menu" },
    ariaControls: { type: String, default: "navigation" },
    tabIndex: { type: Number, default: 0 }
  }
};
</script>

<style>
.hamburger {
  padding: var(--padding, 15px);
  background-color: var(--bg-color, transparent);
}

.hamburger-box {
  width: var(--box-width, 40px);
  height: var(--box-height, 24px);
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  background-color: var(--layer-bg-color, #000000);
  width: var(--layer-width, 40px);
  height: var(--layer-height, 4px);
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after,
.hamburger.is-active .hamburger-inner:before {
  background-color: var(
    --active-layer-bg-color,
    var(--layer-bg-color, #000000)
  );
}
</style>