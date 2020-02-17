<template>
    <div class="container">
        <PageTitle v-bind:pageTitle='title' v-bind:pageSubTitle='subTitle'></PageTitle>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    name: 'TestPage',
    components: {
        PageTitle
    },
    data() {
        return {
            title: 'TestPage',
            subTitle: 'Canvas'
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
</style>