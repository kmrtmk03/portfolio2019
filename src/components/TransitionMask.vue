<template>
    <div>
        <transition name="left">
            <span v-if="isShow" class="pageTransitionMask-left mask-1"></span>
        </transition>
        <transition name="right">
            <span v-if="isShow" class="pageTransitionMask-right mask-2"></span>
        </transition>
        <transition name="left">
            <span v-if="isShow" class="pageTransitionMask-left mask-3"></span>
        </transition>
        <transition name="right">
            <span v-if="isShow" class="pageTransitionMask-right mask-4"></span>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'TransitionMask',
  data: function() {
      return {
          isShow: true
      }
  },
  mounted() {
      setInterval ( () => {
          this.isShow = false
      }, 1000)
  }
}
</script>

<style scoped lang="scss">
.pageTransitionMask-left,
.pageTransitionMask-right {
    display: block;
    position: fixed;
    width: 100vw;
    background-color: #000;
    pointer-events: none;
    z-index: 1000;
}

.mask-1 {
    top: 0;
    height: 40vh;
    background-color: $keyColor;
}
.mask-2 {
    top: 40vh;
    height: 10vh;
    background-color: #fff;
}
.mask-3 {
    top: 50vh;
    height: 5vh;
    background-color: $keyColor;
}
.mask-4 {
    top: 55vh;
    height: 45vh;
    background-color: #666666;
}

.mask-1 {
  animation: slide 1s ease 1 1s;
}
.mask-2 {
  animation: slide 0.8s ease 1 1.2s;
}
.mask-3 {
  animation: slide 0.6s ease 1 1.4s;
}
.mask-4 {
  animation: slide 0.4s ease 1 1.6s;
}

@keyframes slide {
  0% {
      left: 0vw;
  }
  100% {
      left: 100vw;
  }
}
</style>