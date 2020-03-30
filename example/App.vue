<template>
  <div id="app">
    <header>
      <img src="./assets/burger.svg" />
      <h1 :class="{ 'bold': isActive }">Vue Burger</h1>
    </header>
    <main class="container">
      <template v-for="burger in burgers">
        <v-burger
          :active="isActive"
          @updated="isActive = $event"
          :type="burger"
          :key="burger"
          :burgerStyle="burgerStyle"
        >
          <template v-slot:label>
            <span class="hamburger-label">{{ burger }}</span>
          </template>
        </v-burger>
      </template>
    </main>
    <footer>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
const burgers = [
  "3dx",
  "3dx-r",
  "3dy",
  "3dy-r",
  "3dxy",
  "3dxy-r",
  "arrow",
  "arrow-r",
  "arrowalt",
  "arrowalt-r",
  "arrowturn",
  "arrowturn-r",
  "boring",
  "collapse",
  "collapse-r",
  "elastic",
  "elastic-r",
  "emphatic",
  "emphatic-r",
  "minus",
  "slider",
  "slider-r",
  "spring",
  "spring-r",
  "stand",
  "stand-r",
  "spin",
  "spin-r",
  "squeeze",
  "vortex",
  "vortex-r"
];

export default {
  name: "app",
  data: function() {
    return {
      isActive: false,
      burgers,
      burgerStyle: {
        "--padding": "30px"
      }
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto;
  padding: 20px;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
header img {
  max-height: 100px;
}

.bold {
  font-weight: 900;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 3px;
  width: 150px;
  height: 140px;
  justify-content: center;
}
.hamburger-label {
  margin-top: 10px;
}

footer {
  margin-top: 50px;
}
</style>
