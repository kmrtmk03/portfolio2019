<template>
    <div class="container">
        <Menu />
        <PageTitle v-bind:pageTitle='title'></PageTitle>
        <SectionTitle v-bind:sectionTitle='title'></SectionTitle>
    </div>
</template>


<script>

import Menu from '../components/Menu'
import PageTitle from '../components/PageTitle.vue'
import SectionTitle from '../components/SectionTitle.vue'

export default {
    name: 'profile',
    components: {
        Menu,
        PageTitle,
        SectionTitle
    },
    data: function() {
        return {
            title: 'Work -' 
        }
    }
}
</script>

<style scoped lang="scss">
</style>