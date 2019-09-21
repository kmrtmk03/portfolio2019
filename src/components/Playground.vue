<template>
  <div class="playground-container" :class="{open: isOpenPanal }">
    <div class="button-open" v-on:click="this.toggleDrawing" :class="{close: isOpenPanal }">{{ this.openClose }}</div>
    <canvas id="canvas-playground" class="canvas" width='512' height='512'></canvas>
    <p class="draw-title">下の白い四角の中でマウスをクリックしながらドラッグしてください。<br>「送信」をクリックすると、3Dモデルにイラストが反映されます。</p>
    <div class="setting">
      <div class="setting-weight">
        <p class="setting-title">太さ</p>
        <input class="setting-weight-slider" type="range" max="20" min="2" step="1" v-model="linewidth">
      </div>
      <div class="setting-color">
        <p class="setting-title">カラー</p>
        <ul class="setting-color-wrap">
          <li
            class="setting-color-child"
            v-for='color in this.colors'
            v-bind:key='color.id'
            v-bind:style="{ 'background-color': color.c }"
            v-on:click="changeColor(color.c)">
          </li>
        </ul>
      </div>
    </div>
    <div v-on:click='save' class="button-save">送信</div>
    <div v-on:click='clear' class="button-clear">リセット</div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Playground',
  data: function () {
    return {
      screenwidth: 0,
      screenheight: 0,
      isDrawing: false,
      beforeX: 0,
      beforeY: 0,
      canvas: null,
      ctx: null,
      openClose: 'Start Drawing',
      isOpenPanal: false,
      linewidth: 10,
      currentColor: '',
      colors: [
        {id: 0, c: '#FFD800'},
        {id: 1, c: '#333333'},
        {id: 2, c: 'black'},
        {id: 3, c: 'red'},
        {id: 4, c: 'blue'},
        {id: 5, c: 'green'},
        {id: 6, c: 'white'}
      ]
    }
  },
  created() {
    this.screenwidth = window.innerWidth
    this.screenheight = window.innerHeight
  },
  mounted() {
    //初期化
    this.init()

    //マウスダウン
    window.addEventListener('mousedown', (e) => {
        this.beforeX = e.clientX - 20
        this.beforeY = e.clientY + 20
        this.isDrawing = true
    })

    //マウスアップ
    window.addEventListener('mouseup', () => {
        this.isDrawing = false
    })

    //マウスムーブ
    window.addEventListener('mousemove', (e) => {
        if(this.isDrawing == true) {
            const x = e.clientX - 20
            const y = e.clientY + 20
            this.draw(x, y)
        }
    })
  },
  methods: {
    toggleDrawing() {
      this.isOpenPanal = !this.isOpenPanal
      if(this.isOpenPanal) {
        this.openClose = 'Break Drawing'
        store.state.isDrawingPanel = true
      } else {
        this.openClose = 'Start Drawing'
        store.state.isDrawingPanel = false
      }
      this.init();
    },
    init() {
      this.isDrawing = false

      this.currentColor = '#FFD800'

      this.canvas = document.getElementById('canvas-playground')
      this.ctx = this.canvas.getContext('2d')

      this.clear()
    },
    draw(x, y) {
      this.ctx.lineCap = 'round';
      this.ctx.fillStyle = this.currentColor
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = this.linewidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.beforeX, this.beforeY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      this.beforeX = x;
      this.beforeY = y;

      //UV用の塗りつぶし箇所
      this.ctx.fillStyle = '#666666'
      this.ctx.fillRect(0, 0, 512, 112)
      this.ctx.fillRect(0, 400, 512, 112)      
    },
    changeColor(_color) {
      this.currentColor = _color
    },
    save() {
      let canvasData = this.canvas.toDataURL('image/jpeg', 1)
      store.state.canvasData = canvasData
    },
    clear() {
      this.ctx.fillStyle = '#ffffff'
      this.ctx.fillRect(0, 0, 512, 512)

      this.ctx.fillStyle = '#666666'
      this.ctx.fillRect(0, 0, 512, 112)
      this.ctx.fillRect(0, 400, 512, 112)
    }
  }
}
</script>

<style scoped lang="scss">

.setting {
  position: absolute;
  width: 552px;
  top: 420px;
  left: 0;
  &-title {
    height: 26px;
    line-height: 26px;
    width: 70px;
    text-align: left;
  }
  &-weight {
    width: 400px;
    margin: 0 auto 20px;
    display: flex;
    flex-wrap: wrap;
    &-slider {
      display: block;
      width: calc(100% - 70px - 10px);
      margin-left: 10px;
    }
  }
  &-color {
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% - 70px - 10px);
      margin-left: 10px;
    }
    &-child {
      font-size: 8px;
      width: 26px;
      height: 26px;
      background-color: red;
      border-radius: 50%;
      &:not(:first-child) {
        margin-left: 10px;
      }
      &:hover {
        cursor: pointer;
        box-sizing: border-box;
        border: solid 2px #ffffff;
      }
    }
  }
}

.button-open {
  width: 170px;
  height: 60px;
  line-height: 60px;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  top: 60px;
  left: 612px;
  text-align: left;
  &:not(.close) {
    animation: buttonopen 1000ms 0ms infinite;
  }
  &:hover {
    cursor: pointer;
    color: $keyColor;
    transition: all 400ms 0ms ease;
  }
}
@keyframes buttonopen {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0.8);
  }
}

.playground-container {
    background-color: $gray;
    width: 552px;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: -552px;
    z-index: 0;
    transition: all 300ms 0ms ease;
    &.open {
      transition: all 600ms 0ms ease;
      left: 0;
    }
}
.draw-title {
  font-size: 16px;
  width: 530px;
  margin: 20px auto;
  padding: 8px;
}
.canvas {
  position: absolute;
  top: -20px;
  left: 20px;
  z-index: -1;
}
.button {
  &-save, &-clear {
    background-color: $gray;
    width: 552px;
    height: 50px;
    position: absolute;
    left: 0;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      transition: all 400ms 0ms ease;
      background-color: $keyColor;
      cursor: pointer;
    }
  }
  &-save {
    bottom: 320px;
  }
  &-clear {
    bottom: 270px
  }
}
</style>
