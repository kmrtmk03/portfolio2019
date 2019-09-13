<template>
    <div class="container">
        <TransitionMask />
        <Menu />
        <PageTitle v-bind:pageTitle='title'></PageTitle>
        <div class="section-wrap section-wrap-first">
            <SectionTitle v-bind:sectionTitle='arry_1st.title' v-bind:className='arry_1st.className'></sectionTitle>
            <p class="section-detail">
                キムラトモキ、25歳。<br>
                2016年3月に近畿大学経済学部を卒業直後、デジタルハリウッド大阪校にて<br>
                DTP/Webデザイン/コーディングを学ぶ。<br>
                2017年8月より株式会社イメージソースでデザインエンジニアとして就職。<br>
                現在は同社にてUnityを使ったインスタレーション案件の開発を行う。<br>
                自称3DCGを使ったアプローチが得意。お腹が弱い。人見知り。深夜ラジオが友達。
            </p>
        </div>
        <div class="section-wrap">
            <SectionTitle v-bind:sectionTitle='arry_2nd.title' v-bind:className='arry_2nd.className'></sectionTitle>
            <ul class="list-parent section-detail">
                <li v-for="skill in skills" v-bind:key="skill.id" class="list-child">
                    <p class="list-left">{{ skill.title}}</p>
                    <p class="list-right" v-html="skill.detail"></p>
                </li>
            </ul>
        </div>
        <div class="section-wrap">
            <SectionTitle v-bind:sectionTitle='arry_3rd.title' v-bind:className='arry_3rd.className'></sectionTitle>
            <ul class="list-parent section-detail">
                <li v-for="history in historys" v-bind:key="history.id" class="list-child">
                    <p class="list-left">{{ history.title }}</p>
                    <p class="list-right" v-html="history.detail"></p>
                </li>
            </ul>
        </div>
        <div class="section-wrap">
            <SectionTitle v-bind:sectionTitle='arry_4th.title' v-bind:className='arry_4th.className'></sectionTitle>
            <ul class="list-parent section-detail">
                <li class="list-child" v-for="hobby in hobbys" v-bind:key="hobby.id">
                    <p class="list-left">{{ hobby.title }}</p>
                    <p class="list-right" v-html="hobby.detail"></p>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import store from '../store'
import Menu from '../components/Menu'
import PageTitle from '../components/PageTitle.vue'
import SectionTitle from '../components/SectionTitle.vue'
import TransitionMask from '../components/TransitionMask'

export default {
    name: 'profile',
    components: {
        Menu,
        PageTitle,
        SectionTitle,
        TransitionMask
    },
    data: function() {
        return {
            title: 'Tomoki Kimura',
            arry_1st: {
                title: 'Profile',
                className: 'profile'
            },
            arry_2nd: {
                title: 'Skill',
                className: 'skill'
            },
            arry_3rd: {
                title: 'History',
                className: 'histry'
            },
            arry_4th: {
                title: 'Hobby',
                className: 'hobby'
            },
            skills: [
                { id:1, title: 'Unity', detail: '2018年4月より本格的に使用。<br>10個ほどのインスタレーション案件の開発に用いる。'},
                { id:2, title: 'Web', detail: '学生時代、Webフロントエンジニアのときに使用。<br>当時の開発環境は「EJS / PostCSS / ES6(babel) / gulp+webpack」<br>現在はVue.jsを使用。'}
            ],
            historys: [
                { id: 1, title: '1993.11', detail: '和歌山県にて生まれる。' },
                { id: 2, title: '2012.4', detail: '近畿大学経済学部経済学科に入学する。' },
                { id: 3, title: '2016.3', detail: '上記大学を卒業する。' },
                { id: 4, title: '2016.4', detail: 'デジタルハリウッド大阪校に入学する。' },
                { id: 5, title: '2017.3', detail: '上記を卒業。<br>デジタルフロンティア2017 インスタレーション部門ベストプランニング賞を受賞。' },
                { id: 6, title: '2017.7', detail: '上京<br>株式会社イメージソースでWebフロントエンジニアとして働き始める。' },
                { id: 7, title: '2018.4', detail: 'インスタレーション案件の開発に携わるようになる。' },
                { id: 8, title: '2018.11', detail: '自社展示イベントProtoTypesにて「Effects Simulation」を出展。<br>会社の顔に泥を塗る。' }
            ],
            hobbys: [
                { id: 1, title: '写真', detail: 'Sony α7とRICOH GRを使用。<br>ストリートスナップが好き。ボーナスをレンズに変える。'},
                { id: 2, title: '読書', detail: '平日の朝夜、休日の過ごし方。<br>村上春樹と太宰治が好き。'},
                { id: 3, title: '深夜ラジオ', detail: '主にオールナイトニッポン。<br>オードリーとCreepy Nutsが毎週の楽しみ。'},
                { id: 4, title: 'アイドル', detail: 'ハロー!プロジェクトと日向坂46に夢中。<br>疲れた時は°C-ute、楽しい時はアンジュルムを嗜む。<br>推しは和田桜子（こぶしファクトリー）と齊藤京子（日向坂46）。'},
                { id: 5, title: '純喫茶', detail: 'クリームソーダを求めて。本を読みながらゆったりする時間が至福。<br>阿佐ヶ谷のgionと吉祥寺のゆりあぺむぺるが特にお気に入り。'}
            ]
        }
    },
    mounted() {
        store.state.currentPage = 'Profile'
    }
}
</script>

<style scoped lang="scss">

.list-parent {
    width: 800px;
    margin: 0 auto;
}
@media screen and (max-width: 768px) {
    .list-parent {
        width: 100vw;
        margin: 0 auto;
    }
} 

.list-child {
    display: flex;
    flex-direction: row;
}
@media screen and (max-width: 768px) {
    .list-child {
        display: block;
        margin-bottom: 40px;
    }
} 

.list-left, .list-right {
    margin: 0;
}

.list-left {
    font-weight: bold;
    width: 150px;
}
@media screen and (max-width: 768px) {
    .list-left {
        width: 90vw;
        font-size: 22px;
        margin: 0 auto;
    }
} 

.list-right {
    width: 650px;
}
@media screen and (max-width: 768px) {
    .list-right {
        width: 90vw;
        margin: 0 auto;
    }
} 
.container {
    padding: 0px 0 40px;
}

.section-detail {
    margin: 60px auto 0;
}

p {
    font-size: 16px;
    text-align: left;
    width: 800px;
    line-height: 48px;
}
@media screen and (max-width: 768px) {
    p {
        width: 90vw;
    }
} 

.section-wrap {
    margin-bottom: 200px;
}
@media screen and (max-width: 768px) {
    .section-wrap {
        margin-bottom: 100px;
    }
} 

.section-wrap-first {
    padding-top: 240px;
}
@media screen and (max-width: 768px) {
    .section-wrap-first {
        padding-top: 150px;
    }
} 

</style>