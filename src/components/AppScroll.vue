<template>
    <div class="app-scroll" ref="scroll">
        <div class="app-scroll-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "app-scroll",
        mounted() {
            this.scroll = new BScroll(this.$refs.scroll,{
                tap:true,
                click:true,
                mouseWheel:true
            })
            this.scroll.on('beforeScrollStart',()=>{
                this.scroll.refresh();
            })
        }
    }
</script>

<style lang="scss">
    .app-scroll{
        width: 100%;
        overflow: hidden;
    }
</style>