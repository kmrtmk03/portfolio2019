<template>
  <div class="threeScene-container">
    <canvas id="canvas" class="canvas" :width='this.screenwidth' :height='this.screenheight'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import store from '../store'

export default {
  name: 'ThreeScene',
  date() {
    return {
        scene: null,
        renderer: null,
        camera: null,
        light: null,
        geometry: null,
        material: null,
        cube: null,
        cubeSpeed: 0,
        screenwidth: 0,
        screenheight: 0
    }
  },
  computed: {
  },
  created() {
        //canvasのサイズを決める
        this.screenwidth = window.innerWidth
        this.screenheight = window.innerHeight

        this.cubeSpeed = 0.02
    },
  mounted() {

        window.addEventListener('mousedown', this.speedUp)

        this.$store.watch(
          (state, getters) => getters.getCanvasData,
          () => {
            console.log('change')
            this.textureChange()
          }
        )
        
        //scene setting
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, this.screenwidth / this.screenheight, 1, 1000)
        this.light = new THREE.DirectionalLight(0xffffff)

        //canvas setting
        const $canvas = document.getElementById('canvas')
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: $canvas
        })
        this.renderer.setSize(this.screenwidth, this.screenheight)

        //camera
        this.camera.position.set(0, 0, 10)

        //light
        this.light.position.set(0, 0, 10)
        this.scene.add(this.light)

        // //cube
        this.geometry = new THREE.BoxGeometry(2, 2, 2)
        // this.material = new THREE.MeshStandardMaterial({
        //   color: 0xffffff,
        //   roughness: 0.8,
        //   metalness: 1
        // })
        this.material = new THREE.MeshLambertMaterial({color: 0xffffff})

        this.cube = new THREE.Mesh(this.geometry, this.material)
        this.cube.rotation.x = 90
        this.scene.add(this.cube)

        this.cubeAnim()
    },
    methods: {
      cubeAnim() {
        requestAnimationFrame(this.cubeAnim)
        this.cube.rotation.z += this.cubeSpeed
        this.renderer.render(this.scene, this.camera)
      },
      speedUp() {
        this.cubeSpeed += 0.005
        setTimeout(() => {
          this.cubeSpeed -= 0.005
        }, 2000)
      },
      textureChange() {
        const image = new Image()
        const texture = new THREE.Texture(image)
        image.onload = () => {texture.needsUpdate = true}
        image.src = store.state.canvasData

        this.material.map = texture
        this.material.needsUpdate = true
      }
    }
}
</script>

<style scoped lang="scss">
.threeScene-container {
    background-color: #000;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}
</style>
