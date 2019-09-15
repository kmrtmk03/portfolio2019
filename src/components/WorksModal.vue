<template>
    <div class="container-worksmodal">
        <div class="wrapper">
            <div class="title">
                <h3 class="title-title">{{propsTitle}}</h3>
                <p class="title-date">{{propsDate}}</p>
            </div>
            <img class="image-top" :src="imgtopUrl">
            <div class="explanation">
                <p class="explanation-text" v-for='text in propsTexts' v-bind:key='text.id' v-html='text.content'></p>
                <p class="explanation-soft"><span class="explanation-soft-static">開発環境：</span>{{propsSoft}}</p>
                <p v-if='isLink' class="explanation-link">
                    <span class="explanation-link-static">リンク：</span>
                    <a class="explanation-link-dynamic" v-bind:href="propsLink" target="_blank">{{propsLinkText}}</a>
                </p>
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
            isLink: true
        }
    },
    props: {
        'propsImgtopUrl': String,
        'propsTitle': String,
        'propsDate': String,
        'propsTexts': Array,
        'propsSoft': String,
        'propsLink': String,
        'propsLinkText': String
    },
    computed: {
        imgtopUrl: function() {
            return require("../assets/img/" + this.propsImgtopUrl + ".jpg")
        }
    },
    created() {
        const modal = document.querySelector('.container-worksmodal')
        disableBodyScroll(modal)

        if(this.propsLink == '' || this.propsLinkText == '') {
            this.isLink = false
        }
    },
    beforeDestroy() {
        clearAllBodyScrollLocks()
    },
    methods: {
        OnCloseModal: function () {
            this.$emit('ModalClose')
        }
    }
}
</script>

<style scoped lang="scss">
.container-worksmodal {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    position: fixed;
    z-index: 200;
    background-color: #000;
}

.wrapper {
    width: 800px;
    margin: 0 auto;
}
@media screen and (max-width: $breakpointMiddle) {
    .wrapper {
        width: 90vw;
    }
} 

.image-top {
    display: block;
    width: 800px;
    height: calc(800px * (9/16));
    margin-bottom: 60px;
}
@media screen and (max-width: $breakpointMiddle) {
    .image-top {
        width: 90vw;
        height: calc(90vw * (9/16));
        margin-bottom: 60px;
    }
} 


.title {
    padding-top: 100px;
    margin-bottom: 60px;
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
        padding-top: 50px;
        margin-bottom: 60px;
        &-title {
            font-weight: bold;
            font-size: 24px;
        }
        &-date {
            font-size: 16px;
        }
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
        margin: 40px 0 20px;
        &-static {
            display: inline-block;
            font-weight: bold;
            margin-right: 13px;
        }
    }
    &-link {
        &-static {
            font-weight: bold;
            margin-right: 30px;
        }
        &-dynamic {
            display: inline-block;
            border-bottom: solid 1px $keyColor;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .explanation {
        width: 100%;
        margin-bottom: 100px;
        &-text {
            font-size: 14px;
            line-height: 28px;
        }
        &-soft {
            margin-top: 40px;
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

    }
}
@media screen and (max-width: $breakpointMiddle) {
    .close {
        padding-bottom: 50px;
        &-button {
            font-size: 20px;
            height: 50px;
            line-height: 50px;
            margin: 0 auto;
            width: 100%;

        }
    }
} 

</style>