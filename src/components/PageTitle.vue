<template>
    <div class="pageTitle-container" v-bind:class="[{small: headSmall}]">
        <h1 class="pageTitle" v-bind:class="[{small: headSmall}]">{{ pageTitle }}</h1>
        <p class="pageTitle-sub" v-bind:class="[{small: headSmall}]">{{ pageSubTitle }}</p>
    </div>
</template>

<script>
import store from '../store'

export default {
  name: 'PageTitle',
  computed: {
      headSmall() {
          return store.state.headSmall
      }
  },
  props: {
    'pageTitle': String,
    'pageSubTitle': String
  },
  mounted() {
    window.addEventListener('scroll', this.titleSmall)
  },
  destroyed() {
    window.removeEventListener('scroll', this.titleSmall)
  },
  methods: {
    titleSmall: function() {
        let y = window.pageYOffset;
        if(y > 40) {
            store.state.headSmall = true
        } else {
            store.state.headSmall = false
        }
    }
  }
}
</script>

<style scoped lang="scss">
.pageTitle-container {
    background-color: #000;
    position: fixed;
    width: 100vw;
    padding-bottom: 42px;
    z-index: 5;
    top: 0;
    &::before, &::after {
        transition: all 400ms 0ms ease;
        content: '';
        display: block;
        position: absolute;
        height: 70px;
    }
    &::before {
        transition: all 400ms 0ms ease;
        width: calc(((100vw - 800px) / 2) + 820px);
        background-color: $gray;
        z-index: 2;
        top: 50px;
    }
    &::after {
        transition: all 400ms 500ms ease;
        width: calc(((100vw - 800px) / 2) + 800px);
        background-color: $keyColor;
        z-index: 1;
        top: 80px;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle-container {
        width: 100vw;
        padding-bottom: 42px;
        &::before, &::after {
            transition: all 400ms 0ms ease;
            height: 30px;
        }
        &::before {
            width: 70vw;
            top: 20px;
        }
        &::after {
            width: 68vw;
            top: 30px;
        }
    }
} 


.pageTitle-container.small {
    transition: all 0ms 0ms ease;
    padding-bottom: 4px;
    &::before, &::after {
        height: 40px;
    }
    &::before {
        transition: all 400ms 300ms ease;
        top: 0;
        height: 72px;
        background-color: #000;
    }
    &::after {
        transition: all 300ms 0ms ease;
        width: 0;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle-container.small {
        &::before, &::after {
            height: 40px;
        }
        &::before {
            transition: all 400ms 300ms ease;
            top: 0;
            height: 42px;
        }
        &::after {
            transition: all 300ms 0ms ease;
            width: 0;
        }
    }
} 

.pageTitle, .pageTitle-sub {
    text-align: left;
    width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 3;
}
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle, .pageTitle-sub {
        width: 100vw;
    }
} 

.pageTitle {
    transition: all 400ms 0ms ease;
    font-size: 80px;
    font-weight: bold;
    height: 80px;
    padding: 0;
    text-align: left;
    margin: 0 auto 10px;
    position: relative;
    z-index: 2;
}
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle {
        font-size: 32px;
        height: 32px;
        margin: 0 auto 10px;
    }
} 
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle-sub {
        width: 100vw;
        font-size: 12px;
        top: -8px;
    }
}

.pageTitle.small {
    font-weight: normal;
    transition: all 400ms 300ms ease;
    font-size: 40px;
    height: 40px;
}
@media screen and (max-width: $breakpointMiddle) {
    .pageTitle.small {
        font-weight: bold;
        font-size: 24px;
        height: 24px;
    }
} 


</style>