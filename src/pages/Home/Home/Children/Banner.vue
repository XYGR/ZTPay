<template>
    <div class="home-banner">
        <van-swipe :autoplay="3000">
            <van-swipe-item >
                <img src="../../../../assets/home/home_banner.png" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        name: "home-banner",
        data(){
            return {
                images: [
                    '../../../../assets/home/home_banner.png',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
            }
        },
        components:{
            [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        }
    }
</script>

<style scoped lang="scss">
    .home-banner{
        height: 5.6rem;
        &-img{
            width: 100%;
            height: 5.6rem;
        }
    }
</style>