<template>
  <div class="home-container">
    <ThreeScene />
    <Playground v-if='isPc' />
    <h1 class="title"><span class="list-dec">T</span>omoki <span class="list-dec">K</span>imua</h1>
  </div>
</template>

<script>
import store from '../store'
import Playground from '../components/Playground'
import ThreeScene from '../components/ThreeScene'

export default {
  name: 'home',
  components: {
    Playground,
    ThreeScene
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
  },
  methods: {}
}
</script>

<style scoped lang='scss'>

* {
  user-select: none;
}

.home-container {
  height: 100vh;
  position: relative;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .home-container {
    height: 90vh;
  }
}

.title {
  color: #fff;
  font-size: 64px;
  font-weight: bold;
  position: absolute;
  right: 60px;;
  bottom: 5%;
  z-index: 1;
  height: 100px;
  width: 500px;
  text-align: right;
  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    width: 120%;
    height: 36px;
    right: -60px;
    z-index: -1;
  }
  &::before {
    background-color: #FFD800;
    top: 50px;
    width: 600px;
  }
  &::after {
    background-color: #666666;
    top: 40px;
    width: 630px;
  }
}
@media screen and (max-width: 768px) {
  .title {
    font-size: 32px;
    position: absolute;
    right: 0;
    bottom: 10%;
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
