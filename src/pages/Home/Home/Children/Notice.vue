<template>
    <div class="home-notice">
        <h3 class="home-notice-title">
             平台合规稳定运营<span>1</span>年<span>206</span>天
        </h3>
        <div class="home-notice-info">
            <router-link to="/home">
                <img src="../../../../assets/home/home_yuan.png" alt="">
            </router-link>
            <router-link to="/home">
                <img src="../../../../assets/home/home_ren.png" alt="">
            </router-link>
            <router-link to="/home">
                <img src="../../../../assets/home/home_yuan1.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-notice"
    }
</script>

<style scoped lang="scss">
    .home-notice{
        padding: 0.4rem 0.533rem;
        background-color: #ffffff;
        &-title{
            height: 0.8rem;
            padding: 0.067rem 0;
            background-color: #deebff;
            border-radius: 0.933rem;
            line-height: 0.8rem;
            background-image: url("../../../../assets/home/home_anquan.png");
            background-position: 0.987rem center;
            background-repeat: no-repeat;
            text-indent: 1.893rem;
            font-size: 0.453rem;
            span{
                color: #1F7DFF;
            }
        }
        &-info{
            display: flex;
            justify-content: space-between;
            margin-top: 0.4rem;
            img{
                width: 2.8rem;
                height: 1.733rem;
            }
        }
    }
</style>