<template>
  <div class="menu-wrap" v-bind:class="{active : isActive}">
    <nav class="nav">
      <span class="white-out" v-bind:class="{active: isActive}"></span>
      <ul class="list-wrap">
        <li
          class="list-child"
          v-for="list in lists"
          v-bind:key="list.id"
          v-bind:class="'list-child-' + list.name">
          <router-link
            :to="list.to"
            class="list-link"
            @click.native="onOver()"
            @mouseover.native="sliceCurrent(list.displayName)">{{ list.name }}</router-link>
        </li>
      </ul>
      <ul class="menu-link">
        <li class="menu-link-list">
          <a class="menu-link-a" href="https://twitter.com/kmrtmk2nd" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="menu-link-icon" /></a>
        </li>
        <li class="menu-link-list">
          <a class="menu-link-a" href="https://www.facebook.com/kmrtmk03" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" class="menu-link-icon" /></a>
        </li>
        <li class="menu-link-list">
          <a class="menu-link-a" href="https://www.instagram.com/kmrtmk_photo/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="menu-link-icon" /></a>
        </li>
      </ul>
      <div class="button-close" v-on:click="closeMenu">c<span class="list-dec">l</span>ose</div>
      <span class="menu-currentPage" v-html="this.currentChoise"></span>
    </nav>
  </div>
</template>

<script>
import store from '../store'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // 通常のフリーアイコン
import { faTwitter, faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"; // ブランドアイコンを使うにはこれを読み込む必要がある
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faTwitter, faFacebookF, faInstagram)

export default {
  name: 'MenuModal',
  components: {
    FontAwesomeIcon
  },
  data: function() {
    return {
      isActive: false,
      lists: [
        { id: 1, name: 'Home', to: '/', displayName: 'home' },
        { id: 2, name: 'Profile', to: '/profile', displayName: 'profile'  },
        { id: 3, name: 'Works', to: '/work', displayName: 'works'  },
        // { id: 4, name: 'TestPage', to: '/testpage', displayName: 'testpage'  }
      ],
      currentChoise: ''
    }
  },
  computed: {
    headSmall() {
      return store.state.headSmall
    },
    currentPage() {
      return store.state.currentPage
    }
  },
  created() {
      const modal = document.querySelector('.menu-wrap')
      disableBodyScroll(modal)
  },
  mounted()  {
      this.isActive = true
  },
  beforeDestroy() {
      clearAllBodyScrollLocks()
  },
  methods: {
    openWrapper: function () {
      this.sliceCurrent('');
    },
    closeMenu: function() {
      this.$emit('MenuClose')
    },
    onOver: function () {
        this.$emit('OnOver')
    },
    sliceCurrent: function (_name) {
      let beforeText = _name //引数をローカル変数に
      let beforeTextArry = beforeText.split('') //一文字ずつ分割して配列に入れる
      let afterText = '' //後にcurrentChoiseになるローカル変数

      let ran = Math.floor(Math.random() * beforeTextArry.length) //乱数を取得

      for(let i = 0; i < beforeTextArry.length; i++) {
        let tex = '' //ローカル変数
        if(i == ran) { //乱数の値の時
          tex = '<span style="color:yellow; text-transform: uppercase">' + beforeTextArry[i] + "</span>" //その文字だけspanタグで囲む
        } else { //それ以外
          tex = beforeTextArry[i] //普通に文字を入れる
        }
        afterText += tex //文字を連結させていく
      }

      this.currentChoise = afterText
    }
  }
}
</script>

<style scoped lang="scss">

.menu-link {
  width: 148px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 20px;
  right: 80px;
  &-list {
    width: 36px;
    height: 36px;
    position: relative;
    &:not(:first-child) {
      margin-left: 20px;
    }
    &::before {
      content: '';
      display: block;
      width: 0%;
      height: 42px;
      position: absolute;
      background-color: $keyColor;
      top: 0;
      left: 0;
      mix-blend-mode: multiply;
      pointer-events: none;
      transition: all 200ms 0ms ease;
    }
    &:hover::before {
      width: 100%;
      transition: all 400ms 0ms ease;
    }
  }
  &-a {
    font-size: 36px;
    display: block;
  }
}
@media screen and (max-width: $breakpointMiddle) {
  .menu-link {
    width: 160px;
    bottom: 120px;
    right: calc((100vw - 160px) / 2);
    &-list {
      width: 36px;
      height: 36px;
      &:not(:first-child) {
        margin-left: 26px;
      }
      &::before {
        content: none;
      }
    }
  }
} 

.menu-wrap {
  background-color: #000;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  z-index: 102;
  top: 100vh;
  &.active {
    top: 0vh;
  }
}

.nav {
  position: relative;
  height: 100vh;
  z-index: 10;
  background-color: #000;
}

.white-out {
  width: 100vw;
  height: 100vh;
  display: block;
  background-color: $gray;
  position: absolute;
  top: 0;
  right: 0vw;
  z-index: 10;
  &.active {
    right: 100vw;
  }
}

.list-wrap {
  height: 370px;
  padding-top: calc((100vh - 370px) / 2);
}
@media screen and (max-width: $breakpointMiddle) {
  .list-wrap {
    height: 210px;
    padding-top: calc((100vh - 300px) / 2);
  }
} 


.button-close {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  height: 24px;
  top: 60px;
  right: 60px;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: $breakpointMiddle) {
  .button-close {
    font-size: 18px;
    height: 18px;
    top: 20px;
    right: 20px;
  }
} 

.button-close {
  position: absolute;
}

.list-child {
  margin-bottom: 0px;
  height: 80px;
  position: relative;
  z-index: 3;
}
@media screen and (max-width: $breakpointMiddle) {
  .list-child {
    margin-bottom: 40px;
    height: 40px;
  }
}

.list-link {
  display: inline-block;
  font-size: 32px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
  transition: all 100ms 0ms ease;
  position: relative;
  &:not(.router-link-exact-active) {
    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      height: 30px;
      background-color: $keyColor;
      bottom: 6px;
      z-index: -1;
      width: 0px;
      transition: all 200ms 0ms ease;
      left: -20px;
    }
    &:hover {
      font-size: 64px;
      &::before {
        width: calc(100% + 40px);
        transition: all 400ms 0ms ease-out;
      }
    }
  }
  &.router-link-exact-active {
    color: rgba(255, 255, 255, 0.1);
  }
}
@media screen and (max-width: $breakpointMiddle) {
  .list-link {
    font-size: 32px;
    height: 40px;
    line-height: 40px;
    display: block;
    &:not(.router-link-exact-active) {
      &::before {
        height: 30px;
        bottom: 6px;
        width: 0px;
        left: -20px;
      }
      &:hover {
        font-size: 24px;
        &::before {
          width: 0;
        }
      }
    }
  }
}

.menu-currentPage {
  font-size: 240px;
  display: inline-block;
  height: 240px;
  position: absolute;
  left: -30px;
  bottom: -30px;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
}
@media screen and (max-width: $breakpointMiddle) {
  .menu-currentPage {
    display: none;
  }
}

</style>
