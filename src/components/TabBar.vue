<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-15 19:20:33
 * @LastEditors: Please set LastEditors
 -->
//公共tabBar模块
<template>
    <div class="tab-bar">
        <router-link to="/home" class="tab-bar-item">
            <i class="iconfont icon-shouye"></i>
            <span class="tab-bar-item-text">首页</span>
        </router-link>
        <router-link to="/money" class="tab-bar-item">
            <i class="iconfont icon-licai"></i>
            <span class="tab-bar-item-text">理财</span>
        </router-link>
        <router-link to="/mine" class="tab-bar-item">
            <i class="iconfont icon-wode"></i>
            <span class="tab-bar-item-text">我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab-bar"
    }
</script>

<style lang="scss">
    .tab-bar{
        width: 100%;
        height: 1.307rem;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index:1;
        box-shadow:0px -0.027rem 0.133rem 0rem rgba(71,70,70,0.22);
        &-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            &-text{
                font-size: 0.267rem;
                color: #666;
            }
            .iconfont{
                font-size: 0.6rem;
                color: #ccffff;
            }
            &.router-link-active {
                .iconfont,.tab-bar-item-text{
                    color: #3399ff;
                }
            }
        }
    }
</style>