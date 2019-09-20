<template>
  <div class="playground-container">
    <canvas id="canvas-playground" class="canvas" width='512' height='512'></canvas>
    <div class="draw-title">Draw Here!!</div>
    <div v-on:click='save' class="button-save">Send Drawing</div>
    <div v-on:click='clear' class="button-clear">Clear</div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Playground',
  date: function () {
      return {
          screenwidth: 0,
          screenheight: 0,
          isDrawing: false,
          beforeX: 0,
          beforeY: 0,
          canvas: null,
          ctx: null
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
        this.beforeY = e.clientY - 150
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
            const y = e.clientY - 150
            this.draw(x, y)
        }
    })
  },
  methods: {
    init() {
        this.isDrawing = false

        this.canvas = document.getElementById('canvas-playground')
        this.ctx = this.canvas.getContext('2d')

        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, 512, 512)

        this.clear()
    },
    draw(x, y) {
        this.ctx.lineCap = 'round';
        this.ctx.fillStyle = '#FFD800'
        this.ctx.strokeStyle = '#FFD800';
        this.ctx.lineWidth = '20';
        this.ctx.beginPath();
        this.ctx.moveTo(this.beforeX, this.beforeY);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.beforeX = x;
        this.beforeY = y;
    },
    save() {
      let canvasData = this.canvas.toDataURL('image/jpeg', 1)
      store.state.canvasData = canvasData
    },
    clear() {
        this.ctx.fillStyle = '#ffffff'
        this.ctx.fillRect(0, 0, 512, 512)
    }
  }
}
</script>

<style scoped lang="scss">
.playground-container {
    background-color: $gray;
    width: 552px;
    height: 682px;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 0;
}
.draw-title {
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  width: 552px;
  height: 150px;
  line-height: 150px;
}
.canvas {
  position: absolute;
  top: 150px;
  left: 20px;
}
.button {
  &-save, &-clear {
    background-color: $gray;
    width: 552px;
    height: 80px;
    position: absolute;
    left: 0;
    bottom: -100px;
    line-height: 80px;
    font-size: 32px;
    font-weight: bold;
    &:hover {
      transition: all 400ms 0ms ease;
      background-color: $keyColor;
      cursor: pointer;
    }
  }
  &-save {
    bottom: -100px;
  }
  &-clear {
    bottom: -190px
  }
}
</style>
