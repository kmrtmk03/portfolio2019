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
            <li class="button button-up" :class="{hidden: isFirstSection}" v-on:click='OnClickUp'>
                <font-awesome-icon icon="angle-up" />
            </li>
            <li class="button button-down" :class="{hidden: isLastSection}" v-on:click='OnClickDown'>
                <font-awesome-icon icon="angle-down" />
            </li>
        </ul>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

export default {
    name: 'profile',
    components: {
        PageTitle,
        FontAwesomeIcon
    },
    data: function() {
        return {
            title: 'Profile',
            subTitle: 'Kimura Tomoki',
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
        },
        isFirstSection: function() {
            let _return = false;
            if(this.sectionNum == 0)
                _return = true;
            return _return;
        },
        isLastSection: function () {
            let _return = false;
            if(this.sectionNum == 3)
                _return = true;
            return _return;
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
        height: 50vh;
        margin: 240px auto 0;
        display: flex;
    }
    @media screen and (max-width: $breakpointMiddle) {
        .section-wrap {
            width: 100vw;
            height: calc(100vh - 100px);
            margin: 100px auto 0;
            display: block;
        }
    } 
    .section-left {
        width: 40%;
        height: 100%;
        position: relative;
    }
    @media screen and (max-width: $breakpointMiddle) {
        .section-left {
            width: 100%;
            height: 25vh;
            position: relative;
        }
    } 

    .section-left-inner {
        width: 300px;
        margin: 0 auto;
    }
    @media screen and (max-width: $breakpointMiddle) {
        .section-left-inner {
            width: 100%;
            margin: 0;
        }
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
    @media screen and (max-width: $breakpointMiddle) {
        .left-image {
            width: 120px;
            height: 120px;
            margin: 0 auto 10px;
            border-radius: 50%;
        }
        .left-detail {
            display: flex;
            margin: 0 auto;
            width: 70vw;
            justify-content: space-between;
            &>li {
                font-size: 12px;
                margin-bottom: 6px;
                width: calc(70vw / 3);
            }
        }
    } 


    .section-right {
        width: 60%;
        height: 100%;
        overflow: hidden;
    }
    @media screen and (max-width: $breakpointMiddle) {
        .section-right {
            width: 90%;
            height: calc(100vh - 25vh - 100px);
            margin: 0 auto;
        }
    } 

    .section-right-inner {
        position: relative;
        &.section-0 { top: 0vh; }
        &.section-1 { top: -50vh; }
        &.section-2 { top: -100vh; }
        &.section-3 { top: -150vh; }

    }
    @media screen and (max-width: $breakpointMiddle) {
        .section-right-inner {
            position: relative;
            &.section-0 { top: 0vh; }
            &.section-1 { top: calc((100vh - 25vh - 100px) * -1); }
            &.section-2 { top: calc((100vh - 25vh - 100px) * -2); }
            &.section-3 { top: calc((100vh - 25vh - 100px) * -3); }

        }
    } 
    .section-0,
    .section-1,
    .section-2,
    .section-3 {
        transition: 1s;
    }
    .section {
        height: 50vh;
        margin: 0;
        overflow: scroll;
        &>h3 {
            text-align: left;
            font-size: 32px;
            position: relative;
            z-index: 2;
            &::after {
                display: block;
                content: '';
                width: 150px;
                height: 10px;
                position: absolute;
                background-color: $keyColor;
                bottom: 0;
                left: 0;
                z-index: -1;
            }
        }
        &>p {
            font-size: 16px;
            line-height: 32px;
            text-align: left;
            margin-top: 16px;
        }
    }
    @media screen and (max-width: $breakpointMiddle) {
        .section {
            height: calc(100vh - 25vh - 100px);
            &>h3 {
                font-size: 28px;
                &::after {
                    width: 150px;
                    height: 10px;
                    bottom: 0;
                    left: 0;
                }
            }
            &>p {
                font-size: 12px;
                line-height: 24px;
                margin-top: 16px;
            }
        }
    } 

    .buttons {
        margin: 50px auto 0;
        width: 120px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        bottom: 60px;
        left: calc((100% - 120px) / 2);
        z-index: 3;
    }
    .button {
        width: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0;
        border-radius: 50%;
        font-size: 32px;
        background-color: #000;
        &:hover:not(.hidden) {
            cursor: pointer;
            background-color: $keyColor;
            transition: 0.4s;
        }
        &.hidden {
            color: #333;
        }
    }
    @media screen and (max-width: $breakpointMiddle) {
        .buttons {
            bottom: 30px;
        }
    } 
</style>