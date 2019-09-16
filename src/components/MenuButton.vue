<template>
  <div class="menubutton-container" :class='{small: headSmall}'>
      <p class="menubutton-open" v-on:click="MenuOpen">Menu</p>
    </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Menubutton',
  computed: {
      headSmall: function () {
          return store.state.headSmall
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
.menubutton {
    &-container {
        width: 100px;
        color: $white;
        height: 24px;
        position: fixed;
        top: 60px;
        right: 60px;
        z-index: 50;
        background-color: #000;
        transition: all 400ms 0ms ease;
        &.small {
            transition: all 400ms 400ms ease;
            top: 25px;
        }
    }
    &-open {
        font-weight: bold;
        font-size: 24px;
        height: 24px;
        line-height: 24px;
        text-align: right;
        &:hover {
            cursor: pointer;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .menubutton {
        &-container {
            width: 50px;
            height: 18px;
            top: 20px;
            right: 20px;
            z-index: 50;
            background-color: #000;
            &.small {
                top: 15px;
            }
        }
        &-open {
            font-size: 18px;
            height: 18px;
            line-height: 18px;
        }
    }
} 

</style>
