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
                        :class="{active: isOnThumbnail}"
                        @mouseover="onThumbnail(true)"
                        @mouseleave="onThumbnail(false)">
                        <p class="section-label" :class="{active: isOnThumbnail}">2019.9</p>
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
    components: {
        Menu,
        TransitionMask,
        PageTitle,
        SectionTitle
    },
    data: function() {
        return {
            title: 'Work',
            subTitle: 'Private',
            isOnThumbnail: false,
            sectionName1st: {
                title: 'Portfolio site 2019',
                class: 'portfolioSite2019'
            }
        }
    },
    methods: {
        onThumbnail: function(isBool) {
            this.isOnThumbnail = isBool
        }
    }
}
</script>

<style scoped lang="scss">
.content-wrap {
    padding: 300px 0;
}
.section-content {
    width: 800px;
    margin: 0 auto;
}
.section-image {
    box-sizing: border-box;
    width: 800px;
    height: calc(800px * (9 / 16));
    background-color: #ff0000;
    margin-top: 60px;
    position: relative;
    &::before {
        content: '';
        display: block;
        width: 100%;
        height: calc(800px * (9 / 16));
        position: absolute;
        background-color: #fff;
        top: 0;
        left: 0;
    }
    &.active::before {
        transition: all 400ms 0ms ease;
        width: 0;
    }
}
.section-label {
    overflow: hidden;
    width: 200px;
    height: 72px;
    line-height: 72px;
    color: #fff;
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
        background-color: #FFD800;
        z-index: -1;
    }
    &.active::after {
        transition: all 400ms 400ms ease;
        width: 100%;
    }
}
</style>