<template>
    <div class="money-header">
        <router-link class="money-header-target" to="/money/record">
            <img src="../../../../assets/money/money_header_1.png" alt="" class="money-header-target-img">
            <p class="money-header-target-name">投标记录</p>
        </router-link>
        <router-link class="money-header-target" to="/money">
            <img src="../../../../assets/money/money_header_2.png" alt="" class="money-header-target-img">
            <p class="money-header-target-name">项目说明</p>
        </router-link>
        <router-link class="money-header-target" to="/money">
            <img src="../../../../assets/money/money_header_3.png" alt="" class="money-header-target-img">
            <p class="money-header-target-name">相关协议</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "money-header"
    }
</script>

<style scoped lang="scss">
    .money-header{
        width: 100%;
        padding: 0.133rem 0.827rem ;
        box-sizing: border-box;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        &-target{
            width: 1.067rem;
            display: block;
            &-img{
                width: 0.987rem;
                height: 0.8rem;
                margin: 0 auto;
            }
            &-name{
                font-size: 20px;
                margin-top: 0.2rem;
                text-align: center;
            }
        }
    }
</style>