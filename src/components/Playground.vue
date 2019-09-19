<template>
  <div class="playground-container">
    <canvas id="canvas" class="canvas" :width='this.screenwidth' :height='this.screenheight'></canvas>
    <ul>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Playground',
  date: function () {
      return {
          screenwidth: 0,
          screenheight: 0,
          isDrawing: false,
          beforeX: 0,
          beforeY: 0,
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
        this.beforeX = e.clientX
        this.beforeY = e.clientY
        this.isDrawing = true
    })

    //マウスアップ
    window.addEventListener('mouseup', () => {
        this.isDrawing = false
    })

    //マウスムーブ
    window.addEventListener('mousemove', (e) => {
        if(this.isDrawing == true) {
            const x = e.clientX
            const y = e.clientY
            this.draw(x, y)
        }
    })
  },
  methods: {
    init() {
        this.isDrawing = false
    },
    draw(x, y) {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')

        ctx.lineCap = 'round';
        ctx.strokeStyle = '#aaaaaa';
        ctx.lineWidth = '20';
        ctx.beginPath();
        ctx.moveTo(this.beforeX, this.beforeY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
        this.beforeX = x;
        this.beforeY = y;
    }
  }
}
</script>

<style scoped lang="scss">
.playground-container {
    background-color: #000;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>
