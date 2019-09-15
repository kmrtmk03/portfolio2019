<template>
  <div class="over-container">
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
      <span class="over-block"></span>
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
        height: 10vh;
        left: 0;
        &:nth-child(1) {
            background-color: $gray;
            top: 0;
        }
        &:nth-child(2) {
            background-color: $keyColor;
            top: 10vh;
        }
        &:nth-child(3) {
            background-color: $white;
            top: 20vh;
        }
        &:nth-child(4) {
            background-color: $keyColor;
            top: 30vh;
        }
        &:nth-child(5) {
            background-color: $gray;
            top: 40vh;
        }
        &:nth-child(6) {
            background-color: $keyColor;
            top: 50vh;
        }
        &:nth-child(7) {
            background-color: $white;
            top: 60vh;
        }
        &:nth-child(8) {
            background-color: $keyColor;
            top: 70vh;
        }
        &:nth-child(9) {
            background-color: $white;
            top: 80vh;
        }
        &:nth-child(10) {
            background-color: $keyColor;
            top: 90vh;
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
        &:nth-child(5) {
            transition: all 600ms 300ms ease;
        }
        &:nth-child(6) {
            transition: all 400ms 650ms ease;
        }
        &:nth-child(7) {
            transition: all 600ms 100ms ease;
        }
        &:nth-child(8) {
            transition: all 400ms 550ms ease;
        }
        &:nth-child(9) {
            transition: all 350ms 400ms ease;
        }
        &:nth-child(10) {
            transition: all 900ms 200ms ease;
        }
    }
}
.over-container.overPage-enter,
.over-container.overPage-leave-to {  
    // transform: translateX(-100vw);
    .over-block {
        transform: translateX(-100vw);
    }
}

</style>
