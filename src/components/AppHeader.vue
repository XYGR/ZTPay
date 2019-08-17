<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-16 16:11:34
 * @LastEditors: Please set LastEditors
 -->

<template>
<!--    公共头部模块-->
    <div id="app-header">
<!--        返回按钮-->
        <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
<!--        标题 需要通过props传入title-->
        <h2 class="app-header-title">{{title}}</h2>
        <router-link v-if="link" :to="link.to" class="app-header-target">{{link.value}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        props:{
            title:String,
            link:Object
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
        border-bottom: 1px solid #ccc;
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
        .app-header-target{
            position: absolute;
            font-size: 0.48rem;
            right: 0.533rem;
            top: 50%;
            transform: translateY(-50%);
        }
    }

</style>