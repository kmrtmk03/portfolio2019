<template>
    <div class="container">
        <TransitionMask />
        <Menu />
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
        <ul class="content-wrap">
            <li class="section-wrap section-wrap-first">
                <SectionTitle v-bind:sectionTitle='sectionName1st.title' v-bind:className='sectionName1st.class'></sectionTitle>
                <ul class="sections">
                    <WorkThumbnail
                        v-for='instalationWeb in instalationWebs'
                        :key="instalationWeb.id"
                        :workTitle='instalationWeb.title'
                        :imgsrc='instalationWeb.imgsrc'>
                    </WorkThumbnail>
                </ul>
            </li>
            <li class="section-wrap section-wrap-first">
                <SectionTitle v-bind:sectionTitle='sectionName2nd.title' v-bind:className='sectionName2nd.class'></sectionTitle>
                <ul class="sections">
                    <WorkThumbnail
                        v-for='cg in cgs'
                        :key="cg.id"
                        :workTitle='cg.title'
                        :imgsrc='cg.imgsrc'>
                    </WorkThumbnail>
                </ul>
            </li>
            <li class="section-wrap section-wrap-first">
                <SectionTitle v-bind:sectionTitle='sectionName3rd.title' v-bind:className='sectionName3rd.class'></sectionTitle>
                <ul class="sections">
                    <WorkThumbnail
                        v-for='etc in etcs'
                        :key="etc.id"
                        :workTitle='etc.title'
                        :imgsrc='etc.imgsrc'>
                    </WorkThumbnail>
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
import WorkThumbnail from '../components/WorkThumbnail'

export default {
    name: 'work',
    components: {
        Menu,
        TransitionMask,
        PageTitle,
        SectionTitle,
        WorkThumbnail
    },
    data: function() {
        return {
            title: 'Work',
            subTitle: 'Instaration / web / etc.',
            sectionName1st: {
                title: 'Instaration / Web',
                class: 'instaration-web'
            },
            sectionName2nd: {
                title: '3DCG',
                class: 'cg'
            },
            sectionName3rd: {
                title: 'Etc.',
                class: 'etc'
            },
            test: 'Portfolio',
            instalationWebs: [
                {id: 1, title: 'Portfolio 2019', imgsrc: '_thumbnail-portfolio2019'},
                {id: 2, title: 'Effects Simulation', imgsrc: '_thumbnail-effect_simulation'},
                {id: 3, title: 'Invisibleball', imgsrc: '_thumbnail-invisibleball'},
            ],
            cgs: [
                {id: 1, title: 'Houdini Smoke', imgsrc: '_thumbnail-houdini_effects-smoke1'},
                {id: 2, title: 'Houdini Line', imgsrc: '_thumbnail-houdini_effects-line1'},
                {id: 3, title: 'Modeling', imgsrc: 'Modeling-1'},
                {id: 4, title: 'Modeling', imgsrc: 'Modeling-2'},
                {id: 5, title: 'Modeling', imgsrc: 'Modeling-3'},
                {id: 6, title: 'Modeling', imgsrc: 'Modeling-4'}
            ],
            etcs: [
                {id: 1, title: 'Photobash', imgsrc: 'Photobash-3'},
                {id: 2, title: 'Photobash', imgsrc: 'Photobash-2'},
                {id: 3, title: 'Photobash', imgsrc: 'Photobash-1'}
            ]
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
    margin: 60px auto 0;
    display: flex;
    flex-wrap: wrap;
}
@media screen and (max-width: $breakpointMiddle) {
    .sections {
        margin: 20px auto 0;
        width: $mobile-widthinner;
    }
} 
</style>