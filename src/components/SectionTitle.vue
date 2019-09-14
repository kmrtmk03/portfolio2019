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
            if(40 < this.posY && this.posY < 700) {
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
        background-color: $gray;
        width: 0;
        top: 60px;
        right: 0;
        z-index: 1;
        transition: all 400ms 200ms ease;
    }
    &::after {
        background-color: $keyColor;
        width: 0;
        top: 70px;
        right: 0;
        z-index: 0;
        transition: all 200ms 0ms ease;
    }
}
@media screen and (max-width: 768px) {
    .sectionTitle-container {
        &::before, &::after {
            height: 20px;
        }
        &::before {
            top: 20px;
        }
        &::after {
            top: 30px;
        }
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
@media screen and (max-width: 768px) {
    .sectionTitle-container.active {
        &::before {
            width: 98vw;
        }
        &::after {
            width: 94vw;
        }
    }
} 

.sectionTitle {
    font-size: $fontsize-lerge;
    text-align: left;
    margin: 0 auto;
    width: $width-inner;
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
@media screen and (max-width: 768px) {
    .sectionTitle {
        font-weight: bold;
        font-size: 32px;
        width: 90vw;
        height: 50px;
        &.active {
            font-size: 32px;
        }
    }
} 

</style>