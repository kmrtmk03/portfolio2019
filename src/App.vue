<template>
  <div id="app">
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>


<script>
import 'normalize.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

.container {
  background-color: #000;
  position: relative;
  top: 0;
  left: 0;
}

@keyframes transitionLeave {
    0% {
      opacity: 1;
      z-index:1001;
    }
    100% {
      opacity: 0;
      z-index:1001;
    }
}
.page-leave-active {
    animation: transitionLeave 0.6s;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

#app {
  font-family: 'Helvetica', 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
}

h1, h2 {
  margin: 0;
  font-weight: normal;
}

ul { 
    padding: 0px;
}

li {
    color: #fff;
    font-weight: normal;
    list-style: none;
    margin-bottom: 20px;
    font-size: 48px;
}

a:visited {
  color: #ffffff;
}

.list-dec {
    color: yellow;
    text-transform: uppercase;
}
</style>
