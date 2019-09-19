<template>
  <div class="container">
    <Playground v-if='isPc' />
    <h1 class="title">to<span class="list-dec">m</span>oki Kimu<span class="list-dec">r</span>a</h1>
  </div>
</template>

<script>
import store from '../store'
import Playground from '../components/Playground'

export default {
  name: 'home',
  components: {
    Playground
  },
  data: function() {
    return {
      isPc: true
    }
  },
  mounted() {
    store.state.currentPage = 'Home'

    const w = window.innerWidth
    const h = window.innerHeight
    if(w - h < 0) {
      this.isPc = false
    } else {
      this.isPc = true
    }
  }
}
</script>

<style scoped lang='scss'>

* {
  user-select: none;
}

.container {
  height: 100vh;
  position: relative;
}

.title {
  color: #fff;
  font-size: 100px;
  font-weight: bold;
  position: absolute;
  right: 0;
  bottom: 45%;
  z-index: 1;
  height: 100px;
  width: 800px;
  text-align: left;
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 120%;
    height: 70px;
    right: 0;
    z-index: -1;
  }
  &::before {
    background-color: #FFD800;
    top: 100px;
    width: 800px;
  }
  &::after {
    background-color: #666666;
    top: 66px;
    width: 840px;
  }
}
@media screen and (max-width: 768px) {
  .title {
    font-size: 32px;
    position: absolute;
    right: 0;
    bottom: 45%;
    height: 32px;
    width: 80vw;
    &::before, &::after {
      position: absolute;
      height: 20px;
    }
    &::before {
      top: 30px;
      width: 75vw;
    }
    &::after {
      top: 20px;
      width: 85vw;
    }
  }
} 

.img {
  background-color: #aaaaaa;
  width: 1000px;
  height: 562px;
  left: 0px;
  bottom: 0px;
  position: absolute;
}
@media screen and (max-width: 768px) {
  .img {
    width: 100vw;
    height: calc(100vw * 0.5625);
  }
} 
</style>
