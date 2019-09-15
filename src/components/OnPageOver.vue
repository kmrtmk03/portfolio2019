<template>
  <div class="over-container">
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
  </div>
</template>

<script>
export default {
  name: 'Menubutton'
}
</script>

<style scoped lang="scss">
.over-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    .over-block {
        content: '';
        display: block;
        position: fixed;
        width: 100vw;
        height: 25vh;
        left: 0;
        &:nth-child(1) {
            background-color: $gray;
            top: 0;
        }
        &:nth-child(2) {
            background-color: $keyColor;
            top: 25vh;
        }
        &:nth-child(3) {
            background-color: $white;
            top: 50vh;
        }
        &:nth-child(4) {
            background-color: $keyColor;
            top: 75vh;
        }
    }
}
.over-container.overPage-enter-active,
.over-container.overPage-leave-active {  
    transition: all 1300ms 0ms ease;
    .over-block {
        &:nth-child(1) {
            transition: all 600ms 0ms ease;
        }
        &:nth-child(2) {
            transition: all 400ms 250ms ease;
        }
        &:nth-child(3) {
            transition: all 300ms 600ms ease;
        }
        &:nth-child(4) {
            transition: all 800ms 400ms ease;
        }
    }
}
.over-container.overPage-enter,
.over-container.overPage-leave-to {  
    // transform: translateX(-100vw);
    .over-block {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            transform: translateX(-100vw);
        }
    }
}

</style>
