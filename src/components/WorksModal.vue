<template>
    <div class="container-worksmodal" :class="{scroll: isScroll }">
        <div class="wrapper">
            <div class="title">
                <h3 class="title-title">{{propsTitle}}</h3>
                <p class="title-date">{{propsDate}}</p>
            </div>
            <img class="image-top" :src="imgtopUrl">
            <div class="explanation">
                <p class="explanation-text" v-for='text in propsTexts' v-bind:key='text.id' v-html='text.content'></p>
                <p class="explanation-soft"><span class="explanation-soft-static">開発環境・ソフト：</span>{{propsSoft}}</p>
                <p v-if='isLink' class="explanation-link">
                    <span class="explanation-link-static">リンク：</span>
                    <a class="explanation-link-dynamic" v-bind:href="propsLink" target="_blank">{{propsLinkText}}</a>
                </p>
                <ul v-if='isImgs' class="explanation-imgList">
                    <li class="explanation-imgList-child" v-for='img in propsImages' v-bind:key='img.id'>
                        <img class="explanation-imgList-image" :src='require("../assets/img/" + img.filename + ".jpg")'>
                    </li>
                </ul>
            </div>
            <div class="close">
                <div class="close-button" v-on:click='OnCloseModal'>Close</div>
            </div>
        </div>
    </div> 
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
    name: 'WorksModal',
    data: function() {
        return {
            isLink: true,
            isImgs: true,
            imgsCount: [],
            isScroll: false
        }
    },
    props: {
        'propsImgtopUrl': String,
        'propsTitle': String,
        'propsDate': String,
        'propsTexts': Array,
        'propsSoft': String,
        'propsLink': String,
        'propsLinkText': String,
        'propsImages': Array
    },
    computed: {
        imgtopUrl: function() {
            return require("../assets/img/" + this.propsImgtopUrl + ".jpg")
        }
    },
    mounted() {
        setTimeout(() => {
            this.isScroll = true
        }, 600)
    },
    created() {
        const modal = document.querySelector('.container-worksmodal')
        disableBodyScroll(modal)

        //リンク記述のHTMLを表示するか
        if(this.propsLink == '' || this.propsLinkText == '') {
            this.isLink = false
        }

        //画像リストのHTMLを表示するか
        this.imgsCount = this.propsImages
        if(this.imgsCount.length == 0) {
            this.isImgs = false
        }
    },
    beforeDestroy() {
        clearAllBodyScrollLocks()
    },
    methods: {
        OnCloseModal: function () {
            this.$emit('ModalClose')
            setTimeout(() => {
                this.isScroll = false
            }, 1000)
        }
    }
}
</script>

<style scoped lang="scss">
.container-worksmodal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 200;
    background-color: #000;
    &.scroll {
        overflow-y: scroll;
    }
}
.wrapper {
    width: 100vw;
}

.title {
    padding-top: 20px;
    margin-bottom: 60px;
    position: relative;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        width: 600px;
        height: 60px;
        left: 0;
    }
    &::before {
        background-color: $gray;
        bottom: -5px;
        z-index: -1;
        width: calc(800px + ((100vw - 800px) / 2));
    }
    &::after {
        background-color: $keyColor;
        bottom: -15px;
        z-index: -2;
        width: calc(800px + ((100vw - 800px) / 2) + 20px);
    }
    &-title, &-date {
        text-align: left;
        width: 800px;
        margin: 0 auto;
    }
    &-title {
        font-weight: bold;
        font-size: 80px;
    }
    &-date {
        font-size: 16px;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .title {
        padding-top: 20px;
        margin-bottom: 40px;
        &::before, &::after {
            height: 26px;
        }
        &::before {
            bottom: -2px;
            z-index: -1;
            width: 90vw;
        }
        &::after {
            bottom: -8px;
            z-index: -2;
            width: 95vw;
        }
        &-title, &-date {
            width: 90vw;
        }
        &-title {
            font-size: 24px;
        }
        &-date {
            font-size: 12px;
        }
    }
} 

.image-top {
    display: block;
    border: solid 2px $gray;
    box-sizing: border-box;
    height: calc(800px * (9/16));
    margin-bottom: 60px;
    width: 800px;
    margin: 0 auto;
}
@media screen and (max-width: $breakpointMiddle) {
    .image-top {
        width: 90vw;
        height: calc(90vw * (9/16));
        margin-bottom: 40px;
    }
} 



.explanation {
    width: 800px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 100px;
    &-text {
        font-size: 16px;
        line-height: 48px;
        &:not(:first-child) {
            margin-top: 36px;
        }
    }
    &-soft {
        font-size: 16px;
        margin: 40px 0 10px;
        &-static {
            display: inline-block;
            margin-right: 13px;
        }
    }
    &-link {
        font-size: 16px;
        &-static {
            margin-right: 30px;
        }
        &-dynamic {
            display: inline-block;
            border-bottom: solid 1px $keyColor;
        }
    }
    &-imgList {
        &-child {
            width: 100%;
            height: calc(800px * 9 / 16);
        }
        &-image {
            box-sizing: border-box;
            border: solid 2px $gray;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .explanation {
        width: 90vw;
        margin-bottom: 100px;
        &-text {
            font-size: 14px;
            line-height: 28px;
        }
        &-soft {
            font-size: 14px;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        &-link {
            font-size: 14px;
            &-static {
                margin-right: 20px;
            }
            &-dynamic {
                border-bottom: solid 1px $keyColor;
            }
        }
        &-imgList {
            &-child {
                height: calc(90vw * 9 / 16);
            }
            &-image {
                height: 100%;
            }
        }
    }
} 

.close {
    padding-bottom: 100px;
    &-button {
        background-color: $white;
        color: $gray;
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        width: 300px;
        &:hover {
            cursor: pointer;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .close {
        padding-bottom: 250px;
        &-button {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            width: 90vw;
        }
    }
} 

</style>