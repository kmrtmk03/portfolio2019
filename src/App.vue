<template>
  <div id="app">
    <Loading></Loading>
    <MenuButton @MenuOpen='MenuOpen'></MenuButton>
    <transition name="menu">
      <MenuModal v-if='isMenuOpen' @MenuClose='MenuClose' @OnOver="OnPageOver"></MenuModal>
    </transition>
    <transition name="overPage">
      <OnPageOver v-if="isOnOver"></OnPageOver>
    </transition>
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import 'normalize.css'
import store from './store'
import MenuButton from './components/MenuButton'
import MenuModal from './components/MenuModal'
import OnPageOver from './components/OnPageOver'
import Loading from './components/Loading'

export default {
  name: 'App',
  components: {
    MenuButton,
    MenuModal,
    OnPageOver,
    Loading
  },
  data: function() {
    return {
      isMenuOpen: false,
      isOnOver: false
    }
  },
  mounted() {
    const w = window.innerWidth
    const h = window.innerHeight
    if(w - h < 0) {
      store.state.isMobile = true
    }
  },
  methods: {
    MenuOpen: function () {
      this.isMenuOpen = true
    },
    MenuClose: function() {
      this.isMenuOpen = false
    },
    OnPageOver: function() {
      this.isOnOver = true
      setTimeout(() => {
        this.isMenuOpen = false
      }, 1000)
      setTimeout(() => {
      this.isOnOver = false
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');


//Menu Transition
.menu-enter-active, .menu-leave-active {
  transition: all 0.5s ease;
}
.menu-enter, .menu-leave-to {
  transform: translateY(-100vh);
}

.container {
  background-color: #000;
  position: relative;
  top: 0;
  left: 0;
}

@keyframes transitionLeave {
    0% {
      opacity: 1;
      z-index:11;
    }
    100% {
      opacity: 1;
      z-index:11;
    }
}
.page-leave-active {
    animation: transitionLeave 0.0s;
}

#app {
  font-family: 'Helvetica', 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
}
</style>
