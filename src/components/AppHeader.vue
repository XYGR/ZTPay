<template>
<!--    公共头部模块-->
    <div id="app-header" class="border-bottom">
<!--        返回按钮-->
        <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
<!--        标题 需要通过props传入title-->
        <h2 class="app-header-title">{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        props:{
            title:String
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    #app-header{
        width: 100%;
        height: 1.173rem;
        position: relative;
        color: #333333;
        background-color: #fff;
        &::before{
            border-bottom: 4px solid #F4F4F4;
        }
        .icon-arrow-left{
            position: absolute;
            font-size: 0.6rem;
            left: 0.533rem;
            top: 50%;
            transform: translateY(-50%);
        }
        .app-header-title{
            font-size: 0.453rem;
            text-align: center;
            line-height: 1.173rem;
        }
    }

</style>