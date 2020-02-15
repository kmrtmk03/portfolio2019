<template>
    <div class="container">
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
        <div class="section-wrap">
            <div class="section-left">
                <div class="section-left-inner">
                    <img class="left-image" :src="profileUrl" v-bind:class="currentSection">
                    <ul class="left-detail">
                        <li>キムラトモキ</li>
                        <li>1993/11/03</li>
                        <li>Enginer</li>
                    </ul>
                </div>
            </div>
            <div class="section-right">
                <ul class="section-right-inner" v-bind:class="currentSection">
                    <li class="section">
                        <h3>Profile</h3>
                        <p>
                            大学卒業直後、デジタルハリウッド大阪校にて<br>
                            デザイン/コーディングを学びながら、独学に近い形でプログラミングを勉強。<br>
                            2017年8月から2020年2月まで株式会社イメージソースでエンジニアとして働く。<br>
                            自称3DCGを使ったアプローチが得意。お腹が弱い。人見知り。深夜ラジオが友達。
                        </p>
                    </li>
                    <li class="section">
                        <h3>Skill</h3>
                        <p>
                            Unity - インスタレーション案件の開発に使用<br>
                            Vue.js - 当サイト制作に使用
                        </p>
                    </li>
                    <li class="section">
                        <h3>Histry</h3>
                        <p>
                            2016.03 - 近畿大学経済学部を卒業<br>
                            2017.03 - デジタルハリウッド大阪校を卒業<br>
                            2017.08 - 株式会社イメージソースに入社<br>
                            2020.02 - 株式会社イメージソースを退社
                        </p>
                    </li>
                    <li class="section">
                        <h3>Hobby</h3>
                        <p>
                            フィルムカメラ<br>
                            喫茶店巡り<br>
                            読書<br>
                            深夜ラジオ<br>
                            アイドル
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="buttons">
            <li class="button button-up" v-on:click='OnClickUp'>↑</li>
            <li class="button button-down" v-on:click='OnClickDown'>↓</li>
        </ul>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'profile',
    components: {
        PageTitle,
    },
    data: function() {
        return {
            title: 'Playground',
            subTitle: 'Test Scripts',
            sectionNum: 0
        }
    },
  computed: {
    currentSection() {
        let _return;
        switch(this.sectionNum) {
            case 0:
                _return = 'section-0';
                break;
            case 1:
                _return = 'section-1';
                break;
            case 2:
                _return = 'section-2';
                break;
            case 3:
                _return = 'section-3';
                break;
            default:
                break;
        }
        return _return;
    },
    profileUrl: function() {
        return require("../assets/img/" + 'my_profile' + ".jpg")
    }
  },
    methods: {
        OnClickUp: function() {
            if(this.sectionNum <= 0)
                return;

            this.sectionNum--;
        },

        OnClickDown: function() {
            if(3 <= this.sectionNum)
                return;

            this.sectionNum++;
        }
    }
}
</script>

<style scoped lang="scss">
    .section-wrap {
        width: 80vw;
        height: 60vh;
        margin: 240px auto 0;
        display: flex;
    }
    .section-left {
        width: 40%;
        height: 100%;
        position: relative;
    }
    .section-left-inner {
        width: 300px;
        margin: 0 auto;
    }
    .left-image {
        display: block;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: green;
        &.section-0 {
            transform: rotate(0deg);
        }
        &.section-1 {
            transform: rotate(-360deg);
        }
        &.section-2 {
            transform: rotate(-720deg);
        }
        &.section-3 {
            transform: rotate(-1080deg);
        }
    }
    .left-detail {
        margin-top: 30px;
        &>li {
            font-size: 18px;
            margin-bottom: 10px;
        }
    }
    .section-right {
        width: 60%;
        height: 100%;
        overflow: hidden;
    }
    .section-right-inner {
        position: relative;

        &.section-0 {
            top: 0vh;
        }
        &.section-1 {
            top: -60vh;
        }
        &.section-2 {
            top: -120vh;
        }
        &.section-3 {
            top: -180vh;
        }
    }
    .section-0,
    .section-1,
    .section-2,
    .section-3 {
        transition: 1s;
    }
    .section {
        height: 60vh;
        margin: 0;
        &>h3 {
            text-align: left;
        }
        &>p {
            font-size: 16px;
            line-height: 32px;
            text-align: left;
            margin-top: 32px;
        }
    }

    .buttons {
        margin: 50px auto 0;
        width: 100px;
        display: flex;
    }
    .button {
        width: 50px;
        margin: 0;
    }
    .button-up {
        background-color: #333;
    }
    .button-down {
        background-color: #ccc;
    }
</style>