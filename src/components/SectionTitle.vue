<template>
    <div class="sectionTitle-container" v-bind:class="[{active: isActive}, className]">
        <h2 class="sectionTitle" v-bind:class="{active: isActive}">{{ sectionTitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
      'sectionTitle': String,
      'className': String
    },
    data: function() {
        return {
            isActive: false,
            posY: 0
        }
    },
    mounted() {
        window.addEventListener('scroll', this.titleAnim)
        this.$nextTick(function () {
            setTimeout(() => {
                this.titleAnim()
            }, 2000)
        })
    },
    created() {
    },
    destroyed() {
        window.removeEventListener('scroll', this.titleAnim)
    },
    methods: {
        titleAnim: function() {
            const title = document.querySelector('.' + this.className)
            this.posY = title.getBoundingClientRect().top
            if(140 < this.posY && this.posY < 700) {
                this.isActive = true
            } else {
                this.isActive = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
.sectionTitle-container {
    position: relative;
    width: 100vw;
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        height: 40px;
    }
    &::before {
        background-color: #666666;
        width: 0;
        top: 60px;
        right: 0;
        z-index: 1;
        transition: all 400ms 200ms ease;
    }
    &::after {
        background-color: #FFD800;
        width: 0;
        top: 70px;
        right: 0;
        z-index: 0;
        transition: all 200ms 0ms ease;
    }
}
.sectionTitle-container.active {
    &::before {
        width: calc(((100vw - 800px) / 2) + 820px);
        transition: all 200ms 200ms ease;
    }
    &::after {
        width: calc(((100vw - 800px) / 2) + 800px);
        transition: all 400ms 400ms ease;
    }
}

.sectionTitle {
    font-size: 32px;
    text-align: left;
    margin: 0 auto;
    width: 800px;
    position: relative;
    z-index: 2;
    height: 80px;
    transition: all 200ms 400ms ease;
    &.active {
        font-size: 80px;
        font-weight: bold;
    transition: all 400ms 0ms ease;
    }
}
</style>