<template>
  <div class="threeScene-container">
    <canvas id="canvas" class="canvas" :width='this.screenwidth' :height='this.screenheight'></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import store from '../store'
import FBXloader from 'three-fbx-loader'
import OrbitControls from 'three-orbitcontrols'

export default {
  name: 'ThreeScene',
  data() {
    return {
        scene: null,
        renderer: null,
        directionalLight: null,
        cameraControl: null,
        light: null,
        ambientLight: null,
        geometry: null,
        material: null,
        cube: null,
        cubeSpeed: 0.02,
        screenwidth: 0,
        screenheight: 0,
        totalFrame: 0,
        myObject: null
    }
  },
  computed: {
  },
  created() {
    //canvasのサイズを決める
    this.screenwidth = window.innerWidth
    this.screenheight = window.innerHeight
  },
  mounted() {
    //Base64の保存をwatch
    this.$store.watch(
      (state, getters) => getters.getCanvasData,
      () => {
        //textureを変更する処理
        this.textureChange()
      }
    )
    
    //scene setting
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(45, this.screenwidth / this.screenheight, 1, 1000)

    //canvas setting
    const $canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: $canvas
    })
    this.renderer.setSize(this.screenwidth, this.screenheight)

    //camera
    this.camera.position.set(0, 0, 8)
    this.cameraControl = new OrbitControls(this.camera)
    this.cameraControl.enableDamping = true
    this.cameraControl.dampingFactor = 0.25
    this.cameraControl.enableZoom = false
    this.cameraControl.maxDistance = 20
    this.cameraControl.minDistance = 5

    //lightss
    this.directionalLight = new THREE.DirectionalLight(0xffffff)
    this.directionalLight.position.set(0, 0, 10)
    this.scene.add(this.directionalLight)

    this.ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.1);
    this.scene.add(this.ambientLight)

    // //cube
    this.geometry = new THREE.BoxGeometry(2, 2, 2)
    this.material = new THREE.MeshLambertMaterial({color: 0xff0000})
    this.cube = new THREE.Mesh(this.geometry, this.material)
    this.cube.rotation.x = 90
    // this.scene.add(this.cube)

    // const oj = new THREE.OBJ
    const loader = new FBXloader()
    loader.load('../models/canvas-test.fbx', function(object) {
      //読み込んだfbxをvueの変数に入れる
      this.myObject = object

      //materialの設定
      this.myObject.traverse(function (child) {
        if(child.isMesh) {
          // child.material = new THREE.MeshLambertMaterial({color: 0xffffff})
          child.material = new THREE.MeshPhysicalMaterial( {
            color: '#ffffff',
            metalness: 0,
            roughness: 0.9
          })
        }
      }) 

      //scaleをthree.jsに合わせる
      this.myObject.scale.x = 0.01
      this.myObject.scale.y = 0.01
      this.myObject.scale.z = 0.01
      
      //sceneにfbxを追加
      this.scene.add(this.myObject)
    }.bind(this), null, function(error) {
      console.log(error)
    })

    //回転アニメーション
    this.cubeAnim()
  },
  methods: {
    //回転アニメーション
    cubeAnim() {
      requestAnimationFrame(this.cubeAnim)

      this.cameraControl.enabled = !store.state.isDrawingPanel

      //処理が重いので30fpsに落とす
      this.totalFrame++;
      if(this.totalFrame % 2 == 0) {
        this.cube.rotation.z += this.cubeSpeed
        // this.myObject.rotation.y -= this.cubeSpeed
        this.renderer.render(this.scene, this.camera)
      }
    },
    speedUp() {
      this.cubeSpeed += 0.005
      setTimeout(() => {
        this.cubeSpeed -= 0.005
      }, 2000)
    },
    textureChange() {
      //保存されたbase64の画像を読み込む
      const image = new Image()
      const texture = new THREE.Texture(image)
      image.onload = () => {texture.needsUpdate = true}
      image.src = store.state.canvasData

      //materialにbase64を反映させる
      this.material.map = texture
      this.material.needsUpdate = true

      //FBXにbase64を反映させる
      this.myObject.traverse(function (child) {
        if(child.isMesh) {
          let newMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0.9,
            map: texture
          })
          child.material = newMat
        }
      }.bind(this))

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
