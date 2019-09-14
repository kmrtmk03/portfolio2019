<template>
    <div class="container">
        <TransitionMask />
        <Menu />
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
        <ul class="content-wrap">
            <li class="section-wrap section-wrap-first">
                <SectionTitle v-bind:sectionTitle='sectionName1st.title' v-bind:className='sectionName1st.class'></sectionTitle>
                <ul class="sections">
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Portfolio 2019</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Effects Simulation</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Houdini Effects</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Space Ligth Shuttle</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">YOGURT TOWN</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">STAR GROOVE</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Invisible Ball Charenge</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">キム's Blog</p>
                        </div>
                    </li>
                    <li class="section-content">
                        <div class="section-image" @mouseover="onThumbnail(true)" @mouseleave="onThumbnail(false)">
                            <img class="section-img" src="@/assets/img/dev.jpg">
                            <span class="section-img-over" :class="{active: isReloaded}"></span>
                            <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                            <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                            <p class="section-label" :class="{active: isReloaded, onThumbnail: isOnThumbnail}">Portfolio 2017</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import Menu from '../components/Menu'
import TransitionMask from '../components/TransitionMask'
import PageTitle from '../components/PageTitle.vue'
import SectionTitle from '../components/SectionTitle'

export default {
    name: 'work',
    date: {
        testImgName: 'dev'
    },
    components: {
        Menu,
        TransitionMask,
        PageTitle,
        SectionTitle
    },
    data: function() {
        return {
            title: 'Work',
            subTitle: 'Instaration / web / etc.',
            isOnThumbnail: false,
            isReloaded: false,
            sectionName1st: {
                title: 'Instaration / Web',
                class: 'instaration-web'
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            setTimeout(() => {
                this.displayAnim()
            }, 3000)
        })
    },
    methods: {
        onThumbnail: function(isBool) {
            this.isOnThumbnail = isBool
        },
        displayAnim: function() {
            this.isReloaded = true;
        }
    }
}
</script>

<style scoped lang="scss">
//variable
$contentwidth: 390px;
$border-time: 300ms;
$border-width: 2px;
$mobile-widthinner: 90vw;
$mobile-borderwidth: 2px;

.content-wrap {
    padding: 300px 0;
}
@media screen and (max-width: $breakpointMiddle) {
    .content-wrap {
        padding: 100px 0;
    }
}

.sections {
    width: $width-inner;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
@media screen and (max-width: $breakpointMiddle) {
    .sections {
        width: $mobile-widthinner;
    }
} 

.section-content {
    width: $contentwidth;
    &:nth-child(odd) {
        margin-right: 20px;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .section-content {
        width: $mobile-widthinner;
        margin: 0 auto;
    }
} 

.section-image {
    background-size: contain;
    width: $contentwidth;
    height: $contentwidth * (9 / 16);
    background-color: $white;
    margin-top: 60px;
    position: relative;
}
@media screen and (max-width: $breakpointMiddle) {
    .section-image {
        width: $mobile-widthinner;
        height: $mobile-widthinner * (9 / 16);
        margin-top: 30px;
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
    bottom: 20px;
    left: 20px;
    z-index: 2;
    font-size: $fontsize-small;
    font-weight: bold;
    color: $gray;
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
        background-color: $white;
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