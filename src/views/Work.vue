<template>
    <div class="container">
        <TransitionMask />
        <Menu />
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
        <ul class="content-wrap">
            <li class="section-wrap section-wrap-first">
                <SectionTitle v-bind:sectionTitle='sectionName1st.title' v-bind:className='sectionName1st.class'></sectionTitle>
                <div class="section-content">
                    <div
                        class="section-image"
                        :class="{active: isReloaded}"
                        :style="{backgroundImage: this.imgsrc}"
                        @mouseover="onThumbnail(true)"
                        @mouseleave="onThumbnail(false)">
                        <span class="section-border-side" :class="{active: isOnThumbnail}"></span>
                        <span class="section-border-topbottom" :class="{active: isOnThumbnail}"></span>
                        <p class="section-label" :class="{active: isReloaded}">2019.9</p>
                    </div>
                </div>
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
    computed: {
        imgsrc() {
            // let text1 = "¥'url(¥'"
            return 'url(' + require("../assets/img/dev.jpg") + ')'
        }
    },
    data: function() {
        return {
            title: 'Work',
            subTitle: 'Private',
            isOnThumbnail: false,
            isReloaded: false,
            sectionName1st: {
                title: 'Portfolio site 2019',
                class: 'portfolioSite2019'
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
.content-wrap {
    padding: 300px 0;
}
.section-content {
    width: $width-inner;
    margin: 0 auto;
}

$border-width: 6px;
$border-time: 200ms;

.section-image {
    background-size: contain;
    box-sizing: border-box;
    width: $width-inner;
    height: $width-inner * (9 / 16);
    background-color: $white;
    margin-top: 60px;
    position: relative;
    border: solid $border-width $white;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: $keyColor;
        top: 0;
        left: 0;
    }
    &.active::before {
        transition: all 400ms 0ms ease;
        width: 0;
    }
}
.section-border-side, .section-border-topbottom {
    display: block;
    width: $width-inner;
    height: calc(100% + 12px);
    position: absolute;
    top: -$border-width;
    left: -$border-width;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
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

.section-label {
    overflow: hidden;
    width: 200px;
    height: 72px;
    line-height: 72px;
    color: $white;
    position: absolute;
    bottom: 20px;
    left: -20px;
    z-index: 2;
    font-size: 24px;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        display: block;
        width: 0%;
        height: 100%;
        background-color: $keyColor;
        z-index: -1;
    }
    &.active::after {
        transition: all 400ms 400ms ease;
        width: 100%;
    }
}

</style>