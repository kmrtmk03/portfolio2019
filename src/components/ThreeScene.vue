<template>
  <div class="threeScene-container">
    <canvas id="canvas" class="canvas" :width='this.screenwidth' :height='this.screenheight'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'

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
        screenwidth: 0,
        screenheight: 0
    }
  },
  created() {
        //canvasのサイズを決める
        this.screenwidth = window.innerWidth
        this.screenheight = window.innerHeight
    },
  mounted() {
        //scene setting
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, this.screenwidth / this.screenheight, 1, 1000)
        this.light = new THREE.DirectionalLight(0xffffff)
        this.geometry = new THREE.BoxGeometry(2, 2, 2)
        this.material = new THREE.MeshPhongMaterial({color: '#ffffff'})
        this.cube = new THREE.Mesh(this.geometry, this.material)

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

        //cube
        this.cube.rotation.x = 90

        //add object
        this.scene.add(this.cube)
        this.scene.add(this.light)

        //render scene
        this.renderer.render(this.scene, this.camera)
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
