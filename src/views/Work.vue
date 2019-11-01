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
            v-bind:propsLinkText="modalContent[this.modalNumber].linkText"
            v-bind:propsImages="modalContent[this.modalNumber].imgs">
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
import PageTitle from '../components/PageTitle.vue'
import SectionTitle from '../components/SectionTitle'
import WorkThumbnail from '../components/WorkThumbnail'
import WorksModal from '../components/WorksModal'

export default {
    name: 'work',
    components: {
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
                {id: 1, number: 0, title: 'Portfolio 2019', imgsrc: 'portfolio2019-0'},
                {id: 8, number: 11, title: 'Aida mitsuo', imgsrc: 'nestle-1'},
                {id: 2, number: 8, title: 'meiji YOGURT TOWN', imgsrc: 'meiji-1'},
                {id: 3, number: 9, title: 'Space Light Shuttle', imgsrc: 'shuttle-1'},
                {id: 4, number: 1, title: 'Effects Simulation', imgsrc: '_thumbnail-effect_simulation'},
                {id: 5, number: 10, title: 'Heineken STAR GROOVE', imgsrc: 'heineken-1'},
                {id: 6, number: 2, title: 'Invisibleball', imgsrc: '_thumbnail-invisibleball'},
                {id: 7, number: 7, title: 'Blog site', imgsrc: 'blog-1'}
            ],
            cgs: [
                {id: 1, number: 3, title: 'Houdini Smoke', imgsrc: 'houdini_smoke-1'},
                {id: 2, number: 4, title: 'Houdini Line', imgsrc: 'houdini_line-1'},
                {id: 3, number: 5, title: 'Modeling', imgsrc: 'Modeling-1'}
            ],
            etcs: [
                {id: 1, number: 6, title: 'Photobash', imgsrc: 'Photobash-3'}
            ],
            modalContent: [
                { 
                    number: 0,
                    title: 'Portfolio 2019',
                    date: '2019.9',
                    imgtopUrl: 'portfolio2019-0',
                    texts: [
                        {id: 1, content: '自分のサイトを作るため、1年半ぶりにwebを制作。実装期間は約2週間ぐらいでした。'},
                        {id: 2, content: '栞を差し込むような横から流れてくるアニメーションを意識。アニメーションはJavascriptでのclassの付与での実装をメインに。'},
                        {id: 3, content: 'トップページにはお絵かき機能を持たせました。絵を描いてbase64で保存する処理をcanvasで、描いた絵を反映する処理はThree.jsで実装。またイーゼルとキャンバスのモデルデータはHoudniでモデリングし、Substance Painterでテクスチャリングを行いました。'}
                    ],
                    soft: 'Vue CLI / three.js / canvas / Houdini',
                    link: 'https://github.com/kmrtmk03/portfolio2019',
                    linkText: 'https://github.com/kmrtmk03/portfolio2019',
                    imgs:[
                        {id: 0, filename: 'portfolio2019-1'},
                        {id: 1, filename: 'portfolio2019-2'},
                        {id: 2, filename: 'portfolio2019-3'}
                    ]
                },
                { 
                    number: 1,
                    title: 'Effects Simulation',
                    date: '2018.11',
                    imgtopUrl: '_thumbnail-effect_simulation',
                    texts: [
                        {id: 1, content: 'イメージソースが開催する「ProtoTypes」で出展するために作成。'},
                        {id: 2, content: 'エフェクト作成が強みであるHoudinを使い、ゲームエンジンだけでは再現しづらい表現に挑戦した試作です。3DCGを用いたことで、奥行きや立体感を感じられ、従来のような2次元的な表現とは違った面白さを感じられるよう制作しました。'},
                        {id: 3, content: '今回の展示ではじゃんけんをテーマに、体験者の手の動きに合わせ、“崩れて岩になる、スパッと切れる、布になってクシャっと潰れる”といった反応を見せる、ゲーム寄りの提案となりましたが、他にも水や線の描画、布、煙などの映像作品に組み込める、多彩なエフェクトを可能とします。'}
                    ],
                    soft: 'Unreal Engine4 / Houdini',
                    link: 'http://www.imgsrc.co.jp/lab/effects-simulation/',
                    linkText: 'http://www.imgsrc.co.jp/lab/effects-simulation/',
                    imgs: []
                },
                { 
                    number: 2,
                    title: 'Invisibleball',
                    date: '2017.10',
                    imgtopUrl: '_thumbnail-invisibleball',
                    texts: [
                        {id: 1, content: '東京2020オリンピック・パラリンピック開催に向けて、見えないボールをキャッチする体験型インスタレーション「INVISIBLE BALL」を制作しました。（イメージソース）'},
                        {id: 2, content: 'ディフェンス側のプレーヤーが目隠しをしてステージに立ち、オフェンス側のプレーヤーが選択したシュート音を頼りにボールをキャッチするブラインドゲームです。視覚を遮断し、聴覚を頼りにボールの位置を把握する、普段とは違った感覚のデジタルコンテンツとなっています。'},
                        {id: 3, content: '本コンテンツは、東京2020パラリンピックの1000日前にあたる時期に行われた「東京湾大感謝祭2017」に続き、「Media Ambition Tokyo2018」 「NO LIMITS SPECIAL2018 東京丸の内」の合計3回出展しました。1回目はコントローラーのアプリを開発、2回目はメンテナンス・保守、3回目はUnlimited Handという筋電位センサーとの連携を追加開発しました。'}
                    ],
                    soft: 'Javascript(EJS,PostCss,ES6,webpack) / Unity',
                    link: 'http://www.imgsrc.co.jp/work/toppan-invisibleball/',
                    linkText: 'http://www.imgsrc.co.jp/work/toppan-invisibleball/',
                    imgs: [
                        {id: 1, filename: 'ball-2'},
                        {id: 2, filename: 'ball-3'}
                    ]
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
                    link: '',
                    imgs: [
                        {id: 1, filename: 'houdini_smoke-2'},
                        {id: 2, filename: 'houdini_smoke-3'},
                        {id: 3, filename: 'houdini_smoke-4'},
                        {id: 4, filename: 'houdini_smoke-5'}
                    ]
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
                    link: '',
                    imgs: [
                        {id:1, filename: 'houdini_line-2'}
                    ]
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
                    link: '',
                    imgs: [
                        {id:1, filename: 'Modeling-2'},
                        {id:2, filename: 'Modeling-3'},
                        {id:3, filename: 'Modeling-4'}
                    ]
                },
                { 
                    number: 6,
                    title: 'Photobash',
                    date: '2019.1',
                    imgtopUrl: 'Photobash-3',
                    texts: [
                        {id: 1, content: '冬休みで暇だったので、試してみたPhotobashです。'}
                    ],
                    soft: 'Photoshop',
                    link: '',
                    imgs: [
                        {id: 1, filename: 'Photobash-2'},
                        {id: 2, filename: 'Photobash-1'}
                    ]
                },
                { 
                    number: 7,
                    title: 'Blog Site',
                    date: '2017.6',
                    imgtopUrl: 'blog-1',
                    texts: [
                        {id: 1, content: '就活のネタ作りに作ったブログサイトです。'}
                    ],
                    soft: 'WordPress / HTML / CSS / Javascript',
                    link: '',
                    imgs: [
                        {id: 1, filename: 'blog-2'}
                    ]
                },
                { 
                    number: 8,
                    title: 'meiji YOGURT TOWN',
                    date: '2019.7',
                    imgtopUrl: 'meiji-1',
                    texts: [
                        {id: 1, content: 'ヨーグルトの日を記念し、2019年5月17日(金)〜19日(日)の３日間、東京ミッドタウンのアトリウム/コートヤードにて『明治ブルガリアヨーグルトPresents腸いいね！ヨーグルトタウン』にてデジタルコンテンツの制作を行いました。（イメージソース）'},
                        {id: 2, content: '10問の腸年齢診断に答えると腸年齢に応じた腸キャラが選択されます。その腸キャラにお好みのパーツや装飾をしてオリジナル腸キャラを作ることができ、ヨーグルトタウン内のモニターに映し出されたご自分のキャラクターを探したり、カスタマイズした腸キャラのシールや画像スタンプをダウンロードできます。'},
                        {id: 3, content: 'Unityを用いてiPadアプリのフロント部分（カメラロールに画像を保存するまで）と、5760px*2160pxの大型スクリーンに映し出されるアプリ全般の開発を行いました。'}
                    ],
                    soft: 'Unity',
                    link: 'http://www.imgsrc.co.jp/work/meiji-yogurttown/',
                    linkText: 'http://www.imgsrc.co.jp/work/meiji-yogurttown/',
                    imgs: [
                        {id: 1, filename: 'meiji-2'},
                        {id: 2, filename: 'meiji-3'}
                    ]
                },
                { 
                    number: 9,
                    title: 'Space Light Shuttle',
                    date: '2019.3',
                    imgtopUrl: 'shuttle-1',
                    texts: [
                        {id: 1, content: '既存のスポーツ、バドミントンをデジタルとの融合・拡張により新感覚で体験する「SPACE LIGHT SHUTTLE」。コートを都市に見立て、立体的に浮かび上がる光のシャトルを打ち合うインスタレーションコンテンツの制作を行いました。（イメージソース）'},
                        {id: 2, content: '吊るされた透過スクリーンに投影する映像を担当しました。Unityでリアルタイムでレンダリングしており、ラケットを振る速度・向きや位置をOSCで受け取りそれに応じてシャトルのスピードやパーティクルの位置を変化させています。'},
                        {id: 3, content: 'またシャトルの到達地点（対戦相手）付近には渋谷の3Dモデルデータを配置しており、それのポリゴン数の削減も行いました。'},
                    ],
                    soft: 'Unity / Houdini',
                    link: 'http://www.imgsrc.co.jp/work/spacelightshuttle/',
                    linkText: 'http://www.imgsrc.co.jp/work/spacelightshuttle/',
                    imgs: [
                        {id: 1, filename: 'shuttle-2'},
                        {id: 2, filename: 'shuttle-3'}
                    ]
                },
                { 
                    number: 10,
                    title: 'Heineken STAR GROOVE',
                    date: '2018.7',
                    imgtopUrl: 'heineken-1',
                    texts: [
                        {id: 1, content: 'ハイネケンが提供する体験型音楽アクティビティ「STAR GROOVE」を制作しました。（イメージソース）'},
                        {id: 2, content: 'Kinectを使用し、前にプレイヤーが立って踊るとそれがモニターの中のアバターに反映され、画面の中のアバターが自分と同じ動きで踊ります。またKinectで取得したプレイヤーの映像から顔を抽出し、テクスチャとしてモデルデータの顔にリアルタイムで反映させています。'},
                        {id: 3, content: 'Kinectでの処理、エフェクトの作成、モデルデータの顔をテクスチャを反映させやすいように編集、体験全体の開発を行いました。'},
                    ],
                    soft: 'Unity / Blender / Kinect V2',
                    link: 'http://www.imgsrc.co.jp/work/heineken-stargroove/',
                    linkText: 'http://www.imgsrc.co.jp/work/heineken-stargroove/',
                    imgs: [
                        {id: 1, filename: 'heineken-2'},
                        {id: 2, filename: 'heineken-3'}
                    ]
                },
                { 
                    number: 11,
                    title: 'Aida mitsuo',
                    date: '2019.7',
                    imgtopUrl: 'nestle-1',
                    texts: [
                        {id: 1, content: 'ネスレ日本株式会社が、感情分析AIで利用者の声からココロの状態を診断し、オリジナルの言葉を診断結果と共にお届けするサービス「アイスクレマコーヒーで、ちょっと一息！ 声でココロ診断」を展開。'},
                        {id: 2, content: '「にんげんだもの」の言葉で有名な書家・詩人の相田みつを氏の詩を学習した文章生成AIが、オリジナルの言葉をユーザーの診断結果と共にお届けするサービスを制作し、ネスレカフェ原宿にてPRイベント用アプリケーションの開発を行いました。'},
                        {id: 3, content: '壺に向かって声をかけると、声の特徴やトーンから「おつかれココロ度」「ふんわかココロ度」など今の気分をempath APIを通してレーダーチャートで表示。その後、相田みつを氏が創作した詩をディープラーニングしたキャラクター「AIだみつを」が、診断結果を元に、相田氏の詩のように前向きになれることばをお届けるするというコンテンツを制作しました。'},
                        {id: 4, content: '診断結果を店員に伝えると、AIだみつをオリジナルの言葉ラテアートをオーダーすることができ、１ヶ月の期間中多くの方に体験いただきました。'},
                    ],
                    soft: 'Unity / Empath（音声感情解析AI）',
                    link: 'https://www.imgsrc.co.jp/work/nestle-aidamitsuo/',
                    linkText: 'https://www.imgsrc.co.jp/work/nestle-aidamitsuo/',
                    imgs: [
                        {id: 1, filename: 'nestle-2'},
                        {id: 2, filename: 'nestle-3'}
                    ]
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
    margin: 80px auto 100px;
    display: flex;
    flex-wrap: wrap;
}
@media screen and (max-width: $breakpointMiddle) {
    .sections {
        margin: 20px auto 60px;
        width: $mobile-widthinner;
    }
} 
</style>