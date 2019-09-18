<template>
    <div class="container-worksmodal" :class="{scroll: isScroll }">
        <div class="wrapper">
            <div class="title">
                <h3 class="title-title">{{propsTitle}}</h3>
                <p class="title-date">{{propsDate}}</p>
            </div>
            <div class="image-top-wrap">
                <v-lazy-image class="image-top" :src="imgtopUrl" />
                <span class="image-over"></span>
            </div>
            <div class="explanation">
                <p class="explanation-text" v-for='text in propsTexts' v-bind:key='text.id' v-html='text.content'></p>
                <ul class="explanation-soft">
                    <li class="explanation-soft-static">開発環境、使用ソフト、デバイス</li>
                    <li class="explanation-soft-list">{{propsSoft}}</li>
                </ul>
                <ul v-if='isLink' class="explanation-link">
                    <li class="explanation-link-static">リンク：</li>
                    <li class="explanation-link-dynamic"><a v-bind:href="propsLink" target="_blank">{{propsLinkText}}</a></li>
                </ul>
                <ul v-if='isImgs' class="explanation-imgList">
                    <li class="explanation-imgList-child" v-for='img in propsImages' v-bind:key='img.id'>
                        <v-lazy-image class="explanation-imgList-image" :src='require("../assets/img/" + img.filename + ".jpg")' />
                        <span class="image-over"></span>
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
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import VLazyImage from 'v-lazy-image'

export default {
    name: 'WorksModal',
    components: {
        VLazyImage
    },
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
    created() {
        const modal = document.querySelector('.container-worksmodal')
        disableBodyScroll(modal)

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
    margin-bottom: 85px;
    position: relative;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        width: 600px;
        height: 70px;
        left: 0;
    }
    &::before {
        background-color: $gray;
        bottom: -16px;
        z-index: -1;
        width: calc(800px + ((100vw - 800px) / 2));
    }
    &::after {
        background-color: $keyColor;
        bottom: -30px;
        z-index: -2;
        width: calc(800px + ((100vw - 800px) / 2) + 40px);
    }
    &-title, &-date {
        text-align: left;
        width: 800px;
        margin: 0 auto;
    }
    &-title {
        font-weight: bold;
        font-size: 60px;
    }
    &-date {
        font-size: 16px;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .title {
        padding-top: 20px;
        margin-bottom: 50px;
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

.image-top-wrap {
    width: 800px;
    height: calc(800px * (9/16));
    margin: 0 auto 40px;
    position: relative;
}
@media screen and (max-width: $breakpointMiddle) {
    .image-top-wrap {
        width: 90vw;
        height: calc(90vw * (9/16));
        margin: 0 auto 50px;
    }
} 
.image-top {
    display: block;
    border: solid 2px $gray;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.explanation {
    width: 800px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 100px;
    &-text {
        font-size: 16px;
        line-height: 40px;
        &:not(:first-child) {
            margin-top: 16px;
        }
    }
    &-soft {
        font-size: 16px;
        margin: 40px 0 40px;
        &-static, &-list {
            font-size: 16px;
        }
        &-static {
            margin-bottom: 10px;
        }
    }
    &-link {
        &-static, &-dynamic {
            font-size: 16px;
        }
        &-static {
            margin-bottom: 10px;            
        }
        &-dynamic {
            height: 16px;
            display: inline-block;
            border-bottom: solid 1px $keyColor;
        }
    }
    &-imgList {
        &-child {
            width: 100%;
            height: calc(800px * 9 / 16);
            position: relative;
            &:first-child {
                margin-top: 40px;
            }
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
        margin-bottom: 50px;
        &-text {
            font-size: 14px;
            line-height: 28px;
        }
        &-soft {
            margin-top: 30px;
            margin-bottom: 20px;
            &-static, &-list {
                font-size: 14px;
            }
            &-static {
                margin-bottom: 6px;
            }
        }
        &-link {
            &-static, &-dynamic {
                font-size: 14px;
            }
            &-static {
                margin-bottom: 6px;            
            }
            &-dynamic {
                height: 14px;
                display: inline-block;
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
        color: $white;
        font-size: 28px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        width: 300px;
        position: relative;
        &::before {
            position: absolute;
            content: '';
            display: block;
            width: 0%;
            height: 20px;
            background-color: $keyColor;
            top: 25px;
            left: calc((100% - 150px) / 2);
            z-index: -1;
            transition: all 200ms 0ms ease;
        }
        &:hover {
            cursor: pointer;
            &::before {
                transition: all 400ms 0ms ease;
                width: 150px;
            }
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
            &::before {
                width: 150px;
                height: 20px;
                top: 25px;
                left: calc((100% - 150px) / 2);
            }
        }
    }
} 


.v-lazy-image {
    position: relative;
    &+.image-over {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $gray;
        top: 0;
        left: 0;
        z-index: 10;
    }
    &.v-lazy-image-loaded + .image-over {
        transition: all 400ms 100ms ease;
        width: 0%;
    }
}

</style>