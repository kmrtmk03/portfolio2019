<template>
    <div class="container">
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
        <span class="over" :class="{isOver: isOver}"></span>
        <WorksModal
            v-if='isModal'
            @ModalClose='CloseModal'
            v-bind:propsTitle='modalContent[this.modalNumber].title'
            v-bind:propsDate='modalContent[this.modalNumber].date'
            v-bind:propsImgtopUrl='modalContent[this.modalNumber].imgtopUrl'
            v-bind:propsTexts='modalContent[this.modalNumber].texts'
            v-bind:propsSoft='modalContent[this.modalNumber].soft'
            v-bind:propsLink="modalContent[this.modalNumber].link"
            v-bind:propsLinkText="modalContent[this.modalNumber].linkText">
        </WorksModal>
        <div class="wrapper">
            <ul v-if='isMobile' class="choise">
                <li class="choise-list" :class="{active: isInsta}" v-on:click="IsInsta">{{sectionName1st.title}}</li>
                <li class="choise-list" :class="{active: is3dcg}" v-on:click="Is3dcg">{{sectionName2nd.title}}</li>
                <li class="choise-list choise-list-last" :class="{active: isEtc}" v-on:click="IsEtc">{{sectionName3rd.title}}</li>
            </ul>
            <ul class="content-wrap">
                <li class="section-wrap section-wrap-first" v-show="this.isInsta">
                    <SectionTitle v-bind:sectionTitle='sectionName1st.title' v-bind:className='sectionName1st.class'></sectionTitle>
                    <ul class="sections">
                        <WorkThumbnail
                            v-for='instalationWeb in instalationWebs'
                            :key="instalationWeb.id"
                            :workTitle='instalationWeb.title'
                            :imgsrc='instalationWeb.imgsrc'
                            :number='instalationWeb.number'
                            @ModalOpen='OpenModal'>
                        </WorkThumbnail>
                    </ul>
                </li>
                <li class="section-wrap section-wrap-first" v-show="this.is3dcg">
                    <SectionTitle v-bind:sectionTitle='sectionName2nd.title' v-bind:className='sectionName2nd.class'></sectionTitle>
                    <ul class="sections">
                        <WorkThumbnail
                            v-for='cg in cgs'
                            :key="cg.id"
                            :workTitle='cg.title'
                            :imgsrc='cg.imgsrc'
                            :number='cg.number'
                            @ModalOpen='OpenModal'>
                        </WorkThumbnail>
                    </ul>
                </li>
                <li class="section-wrap section-wrap-first" v-show="this.isEtc">
                    <SectionTitle v-bind:sectionTitle='sectionName3rd.title' v-bind:className='sectionName3rd.class'></sectionTitle>
                    <ul class="sections">
                        <WorkThumbnail
                            v-for='etc in etcs'
                            :key="etc.id"
                            :workTitle='etc.title'
                            :imgsrc='etc.imgsrc'
                            :number='etc.number'
                            @ModalOpen='OpenModal'>
                        </WorkThumbnail>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import store from '../store'
// import Menu from '../components/Menu'
// import TransitionMask from '../components/TransitionMask'
import PageTitle from '../components/PageTitle.vue'
import SectionTitle from '../components/SectionTitle'
import WorkThumbnail from '../components/WorkThumbnail'
import WorksModal from '../components/WorksModal'

export default {
    name: 'work',
    components: {
        // Menu,
        // TransitionMask,
        PageTitle,
        SectionTitle,
        WorkThumbnail,
        WorksModal
    },
    data: function() {
        return {
            title: 'Work',
            subTitle: 'Instaration / web / etc.',
            isModal: false,
            isOver: false,
            modalNumber: 0,
            isInsta: true,
            is3dcg: true,
            isEtc: true,
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
                {id: 1, number: 0, title: 'Portfolio 2019', imgsrc: '_thumbnail-portfolio2019'},
                {id: 2, number: 1, title: 'Effects Simulation', imgsrc: '_thumbnail-effect_simulation'},
                {id: 3, number: 2, title: 'Invisibleball', imgsrc: '_thumbnail-invisibleball'},
            ],
            cgs: [
                {id: 1, number: 3, title: 'Houdini Smoke', imgsrc: '_thumbnail-houdini_effects-smoke1'},
                {id: 2, number: 4, title: 'Houdini Line', imgsrc: '_thumbnail-houdini_effects-line1'},
                {id: 3, number: 5, title: 'Modeling', imgsrc: 'Modeling-1'},
                {id: 4, number: 6, title: 'Modeling', imgsrc: 'Modeling-2'},
                {id: 5, number: 7, title: 'Modeling', imgsrc: 'Modeling-3'},
                {id: 6, number: 8, title: 'Modeling', imgsrc: 'Modeling-4'}
            ],
            etcs: [
                {id: 1, number: 9, title: 'Photobash', imgsrc: 'Photobash-3'},
                {id: 2, number: 10, title: 'Photobash', imgsrc: 'Photobash-2'},
                {id: 3, number: 11, title: 'Photobash', imgsrc: 'Photobash-1'}
            ],
            modalContent: [
                { 
                    number: 0,
                    title: 'Portfolio 2019',
                    date: '2019.9',
                    imgtopUrl: '_thumbnail-portfolio2019',
                    texts: [
                        {id: 1, content: '自分のサイトを作るため、1年半ぶりにwebを制作。デザイン2日、実装2週間。'},
                        {id: 2, content: '読書が好きなので、栞を差し込むようなアニメーションを意識。アニメーションはJavascriptでのclassの付与での実装がメイン。'},
                        {id: 3, content: 'FTPソフトではなくターミナルからHerokuにデプロイをしたり、Webフロントエンジニアをしていたときと環境が大きく変化していたので、勉強に時間がかかりました。'},
                    ],
                    soft: 'Vue.js',
                    link: 'https://kmrtmk-portfolio2019.herokuapp.com/',
                    linkText: 'Portfolio2019（トップに戻るだけです…）'
                },
                { 
                    number: 1,
                    title: 'Effects Simulation',
                    date: '2018.11',
                    imgtopUrl: '_thumbnail-effect_simulation',
                    texts: [
                        {id: 1, content: 'イメージソースが開催する「ProtoTypes」で出展するために作成。'},
                        {id: 2, content: '構想などの時間がかかり、Houdiniでのエフェクト制作が1週間、Unreal Engine4(以下UE4)での開発が4日と悔いの残る作品。ポイントはHoudiniで作成した流体シミュレーションをVertext Animation Texture(以下VAT)に書き出し、UE4でリアルタイムに再生を試みた箇所。'}
                    ],
                    soft: 'Unreal Engine4, Houdini',
                    link: ''
                },
                { 
                    number: 2,
                    title: 'Invisibleball',
                    date: '2017.10',
                    imgtopUrl: '_thumbnail-invisibleball',
                    texts: [
                        {id: 1, content: '目が不自由な方が行うスポーツ「ゴールボール」をデジタルで再現した施策。2人のプレイヤーが攻守に別れ、オフェンス側のプレイヤーはコントローラーから球種とスピードを選択し、ディフェンス側のプレイヤーは15個のスピーカーから鳴る音を頼りにボールを止めます。'},
                        {id: 2, content: 'この施策は合計3回行われ、1回目はコントローラーのアプリを開発、2回目はメンテナンス・保守、3回目はUnlimited Handという筋電位センサーとの連携を追加開発しました。'}
                    ],
                    soft: 'Javascript(EJS / PostCss / ES6 / webpack), Unity',
                    link: ''
                },
                { 
                    number: 3,
                    title: 'Houdini Smoke',
                    date: '2017.10',
                    imgtopUrl: '_thumbnail-houdini_effects-smoke1',
                    texts: [
                        {id: 1, content: 'Houdiniの流体シミュレーションを使って制作した静止画です。実際の煙では見ない淡い色を使用してCG感を出しました。'}
                    ],
                    soft: 'Houdini',
                    link: ''
                },
                { 
                    number: 4,
                    title: 'Houdini Line',
                    date: '2017.10',
                    imgtopUrl: '_thumbnail-houdini_effects-line1',
                    texts: [
                        {id: 1, content: 'Houdiniの流体シミュレーションからVecter Fieldを作成し、それを元に細い円柱のポリゴンを動かし力の流れの視覚化をしました。'}
                    ],
                    soft: 'Houdini',
                    link: ''
                },
                { 
                    number: 5,
                    title: 'Modeling',
                    date: '2017.10',
                    imgtopUrl: 'Modeling-1',
                    texts: [
                        {id: 1, content: 'キャラクターのモデリングを行いました。'}
                    ],
                    soft: 'ZBrush / Modo / Substance Painter',
                    link: ''
                },
                { 
                    number: 6,
                    title: 'Modeling',
                    date: '2017.10',
                    imgtopUrl: 'Modeling-2',
                    texts: [
                        {id: 1, content: 'キャラクターのモデリングを行いました。'}
                    ],
                    soft: 'ZBrush / Modo / Substance Painter',
                    link: ''
                },
                { 
                    number: 7,
                    title: 'Modeling',
                    date: '2017.10',
                    imgtopUrl: 'Modeling-3',
                    texts: [
                        {id: 1, content: 'キャラクターのモデリングを行いました。'}
                    ],
                    soft: 'Houdini / Substance Painter / Modo',
                    link: ''
                },
                { 
                    number: 8,
                    title: 'Modeling',
                    date: '2017.10',
                    imgtopUrl: 'Modeling-4',
                    texts: [
                        {id: 1, content: 'キャラクターのモデリングを行いました。'}
                    ],
                    soft: 'ZBrush / Modo / Substance Painter',
                    link: ''
                },
                { 
                    number: 9,
                    title: 'Photobash',
                    date: '2019.1',
                    imgtopUrl: 'Photobash-3',
                    texts: [
                        {id: 1, content: '冬休みで暇だったので、試してみたPhotobashです。'}
                    ],
                    soft: 'Photoshop',
                    link: ''
                },
                { 
                    number: 10,
                    title: 'Photobash',
                    date: '2019.1',
                    imgtopUrl: 'Photobash-2',
                    texts: [
                        {id: 1, content: '冬休みで暇だったので、試してみたPhotobashです。'}
                    ],
                    soft: 'Photoshop',
                    link: ''
                },
                { 
                    number: 11,
                    title: 'Photobash',
                    date: '2018.12',
                    imgtopUrl: 'Photobash-1',
                    texts: [
                        {id: 1, content: '冬休みで暇だったので、試してみたPhotobashです。'}
                    ],
                    soft: 'Photoshop',
                    link: ''
                }
            ],
            testProps: 'Photobash-3'
        }
    },
    computed: {
        isMobile: function() {
            return store.state.isMobile
        }
    },
    mounted() {
        this.$nextTick(function () {
            setTimeout(() => {
                this.displayAnim()
            }, 3000)
        })

        this.modalNumber = store.state.worksModalNumber
    },
    methods: {
        displayAnim: function() {
            this.isReloaded = true;
        },
        IsInsta: function() {
            this.isInsta = !this.isInsta
        },
        Is3dcg: function () {
            this.is3dcg = !this.is3dcg
        },
        IsEtc: function() {
            this.isEtc = !this.isEtc
        },
        OpenModal: function() {
            this.modalNumber = store.state.worksModalNumber
            
            this.isOver = true

            setTimeout(() => {
                this.isModal = true
            }, 800)

            setTimeout(() => {
                this.isOver = false
            }, 1000)

        },
        CloseModal: function() {
            this.isOver = true

            setTimeout(() => {
                this.isModal = false
            }, 800)

            setTimeout(() => {
                this.isOver = false
            }, 1000)
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

.wrapper {
    padding-top: 200px;
}
@media screen and (max-width: $breakpointMiddle) {
    .wrapper {
        padding-top: 100px;
    }
}

.choise {
    width: 700px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
@media screen and (max-width: $breakpointMiddle) {
    .choise {
        width: 90vw;
        display: block;
    }
}

.choise-list {
    font-size: $fontsize-middle;
    width: 220px;
    margin-bottom: 0px;
    color: $white;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    &:not(.choise-list-last) {
        margin-right: 20px;
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: $gray;
        width: 0%;
        height: 14px;
        top: 33px;
        left: 0;
        z-index: -1;
        transition: all 300ms 0ms ease;
    }
    &:hover::after {
        width: 100%;
        transition: all 300ms 0ms ease;
    }
    &.active::after {
        width: 100%;
        background-color: $keyColor;
    }
}
@media screen and (max-width: $breakpointMiddle) {
    .choise-list {
        font-size: 14px;
        width: 100%;
        height: 60px;
        line-height: 60px;
        &:not(.choise-list-last) {
            margin-right: 0px;
        }
        &::after {
            width: 100%;
            height: calc(100% - 10px);
            top: 5px;
            transition: all 300ms 0ms ease;
        }
        &:hover::after {
            transition: all 300ms 0ms ease;
        }
        &.active::after {
            background-color: $keyColor;
        }
    }
}

.over {
    display: block;
    width: 0;
    height: 100vh;
    background-color: $gray;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    transition: all 600ms 0ms ease;
    &.isOver {
        transition: all 600ms 0ms ease;
        width: 100vw;
    }
}

.content-wrap {
    padding: 50px 0 200px;
}
@media screen and (max-width: $breakpointMiddle) {
    .content-wrap {
        padding: 30px 0;
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