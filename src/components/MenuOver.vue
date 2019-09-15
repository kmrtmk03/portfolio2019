<template>
  <div class="menubutton-container">
      <p class="menubutton-open" v-on:click="MenuOpen">Menu</p>
    </div>
</template>

<script>
// import store from '../store'
export default {
  name: 'Menubutton',
  methods: {
      MenuOpen: function (){
        //   store.state.isMenu = true
          this.$emit('MenuOpen')
      }
  }
}
</script>

<style scoped lang="scss">
.menubutton {
    &-container {
        width: 100px;
        color: $white;
        height: 100px;
        position: fixed;
        top: 40px;
        right: 40px;
        z-index: 50;
        background-color: $keyColor;
    }
    &-open {
        height: 100px;
        line-height: 100px;
    }
}
</style>
