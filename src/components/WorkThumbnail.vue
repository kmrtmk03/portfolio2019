<template>
    <li class="section-content">
        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)" v-on:click='OnOpenModal'>
            <v-lazy-image class="section-img" :src="imgsrcUrl" />
            <div class="section-img-over" :class="{active: isReloaded}">
                <span class="section-img-over-child"></span>
                <span class="section-img-over-child"></span>
                <span class="section-img-over-child"></span>
            </div>
            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">{{workTitle}}</p>
        </div>
    </li>
</template>

<script>
import store from '../store'
import VLazyImage from 'v-lazy-image'
export default {
    name: 'WorkThumbnail',
    components: {
        VLazyImage
    },
    data: function() {
        return {
            isOnThumbnail: false,
            isReloaded: false,
            testImgName: 'dev',
            testImgsrc: require("../assets/img/dev.jpg")
        }
    },
    props: {
        'workTitle': String,
        'imgsrc': String,
        'number': Number
    },
    computed: {
        imgsrcUrl: function() {
            return require("../assets/img/" + this.imgsrc + ".jpg")
        }
    },
    mounted() {
        this.$nextTick(function () {
            setTimeout(() => {
                this.displayAnim()
            }, 4000)
        })
    },
    methods: {
        onThumbnail: function(isBool) {
            this.isOnThumbnail = isBool
        },
        displayAnim: function() {
            this.isReloaded = true;
        },
        OnOpenModal: function () {
            store.state.worksModalNumber = this.number
            this.$emit('ModalOpen')
        }
    }
}
</script>

<style scoped lang="scss">
//variable
$contentwidth: 380px;
$contentSpace: 40px;
$border-time: 200ms;
$border-width: 2px;
$mobile-widthinner: 90vw;
$mobile-borderwidth: 2px;

.section-content {
    width: $contentwidth;
    margin-bottom: $contentSpace;
    &:nth-child(odd) {
        margin-right: $contentSpace;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-content {
        width: $mobile-widthinner;
        margin: 0 auto 20px;
    }
} 

.section-image {
    background-size: contain;
    width: $contentwidth;
    height: $contentwidth * (9 / 16);
    background-color: $white;
    margin-top: 0px;
    position: relative;
    &:hover {
        cursor: pointer;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-image {
        width: $mobile-widthinner;
        height: $mobile-widthinner * (9 / 16);
        margin-top: 0px;
    }
} 

//image
.section-img {
    display: block;
    width: $contentwidth;
    height: $contentwidth * (9/16);
    position: relative;
    border: solid $border-width $white;
    box-sizing: border-box;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: $white;
        top: 0;
        left: 0;
        z-index: 1;
        &.active {
            transition: all 400ms 0ms ease;
            width: 0%;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-img {
        width: $mobile-widthinner;
        height: $mobile-widthinner * (9 / 16);
        border: solid $mobile-borderwidth $white;
    }
} 

.section-img-over {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: $white;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    &-child {
        display: block;
        position: absolute;
        top: calc((380px * 9 / 16) / 2 - 25px);
        background-color: $gray;
        z-index: 50;
        width: 10px;
        height: 50px;        
        &:nth-child(1) {
            left: calc(190px - 5px);
            animation: loading 800ms ease 0s infinite alternate none running;
        }
        &:nth-child(2) {
            left: calc(190px - 25px);
            animation: loading 800ms ease 0.1s infinite alternate none running;
        }
        &:nth-child(3) {
            left: calc(190px + 15px);
            animation: loading 800ms ease 0.2s infinite alternate none running;
        }
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-img-over {
        width: 90vw;
        &-child {
            top: calc((90vw * 9 / 16) / 2 - 20px);
            width: 10px;
            height: 40px;        
            &:nth-child(1) {
                left: calc(45vw - 5px);
            }
            &:nth-child(2) {
                left: calc(45vw - 25px);
            }
            &:nth-child(3) {
                left: calc(45vw + 15px);
            }
        }
    }
} 

@keyframes loading {
    0% {
        transform: scaleY(0.2);
    }
    50% {
        transform: scaleY(1.5);
    }
    100% {
        transform: scaleY(0.2);
    }

}

.v-lazy-image-loaded + .section-img-over {
    &.active {
        transition: all 400ms 0ms ease;
        width: 0%;
    }
}

//border
.section-border-side, .section-border-topbottom {
    display: block;
    width: $contentwidth;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-border-side, .section-border-topbottom {
        width: $mobile-widthinner;
    }
} 

.section-border-side {
    &::before, &::after {
        width: $border-width;
        height: 0%;
        background-color: $keyColor;
    }
    &::before {
        right: 0;
        top: 0;
    }
    &::after {
        left: 0;
        bottom: 0;
    }
    &.active::before, &.active::after {
        height: 100%;
    }
    &.active::before {
        transition: all $border-time $border-time*1 ease;
    }
    &.active::after {
        transition: all $border-time $border-time*3 ease;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-border-side {
        &::before, &::after {
            width: $mobile-borderwidth;
        }
    }
} 

.section-border-topbottom {
    &::before, &::after {
        width: 0%;
        height: $border-width;
        background-color: $keyColor;
    }
    &::before {
        left: 0;
        top: 0;
    }
    &::after {
        right: 0;
        bottom: 0;
    }
    &.active::before, &.active::after {
        width: 100%;
    }
    &.active::before {
        transition: all $border-time 0ms ease;
    }
    &.active::after {
        transition: all $border-time $border-time*2 ease;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-border-topbottom {
        &::before, &::after {
            height: $mobile-borderwidth;
        }
    }
} 

//Label
.section-label {
    width: 200px;
    height: 32px;
    line-height: 32px;
    position: absolute;
    bottom: 16px;
    left: -16px;
    z-index: 2;
    font-size: 14px;
    color: $white;
    &::before, &::after {
        position: absolute;
        content: '';
        display: block;
        height: 100%;
        left: 0;
        width: 0;
        z-index: -1;
    }
    &::before {
        top: 6px;
        background-color: $keyColor;
    }
    &.onThumbnail::before {
        transition: all 400ms $border-time*4 ease;
        width: calc(100% + 10px);
    }
    &::after {
        top: 0;
        background-color: $gray;
    }
    &.active::after {
        transition: all 400ms 400ms ease;
        width: 100%;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-label {
        text-align: left;
        padding-left: 10px;
        width: 150px;
        height: 32px;
        line-height: 32px;
        bottom: 4vw;
        left: -2vw;
        font-size: 12px;
        &::before {
            top: 1vw;
        }
        &.onThumbnail::before {
            width: calc(100% + 3vw);
        }
    }
} 

</style>