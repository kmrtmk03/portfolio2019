<template>
    <div class="LoadingWrap" :class='{hidden: isLoad}'>
        <ul class="anim">
            <li class="anim-child"></li>
            <li class="anim-child"></li>
            <li class="anim-child"></li>
        </ul>
    </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Loading',
  computed: {
      isLoad: function() {
          return store.state.isLoad
      }
  },
  methods: {
      MenuOpen: function (){
          this.$emit('MenuOpen')
      }
  }
}
</script>

<style scoped lang="scss">
.LoadingWrap {
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    &.hidden {
        left: 100vw;
        transition: 1s;
    }
}
.anim {
    width: 90px;
    height: 100px;
    position: absolute;
    top: calc((100vh - 100px) / 2);
    left: calc((100vw - 90px) / 2);
    display: flex;
    justify-content: space-between;
    &-child {
        height: 100%;
        width: 20px;
        background-color: $keyColor;
        &:nth-child(1) { animation: loading 800ms ease 0s infinite alternate none running; }
        &:nth-child(2) { animation: loading 1200ms ease 0s infinite alternate none running; }
        &:nth-child(3) { animation: loading 400ms ease 0s infinite alternate none running; }
    }
}
@keyframes loading {
    0% {
        transform: scaleY(0.2);
    }
    50% {
        transform: scaleY(1.5);
    }
    100% {
        transform: scaleY(0.2);
    }

}

</style>
