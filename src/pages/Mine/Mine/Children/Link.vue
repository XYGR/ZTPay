<template>
    <ul class="mime-link">
        <li >
            <router-link to="/mine" class="mime-link-item">
                <img src="../../../../assets/mine/icon1.png" alt="" class="mime-link-item-img" >
                <span class="mime-link-item-name">投标</span>
            </router-link>
        </li>
        <li >
            <router-link to="/mine" class="mime-link-item">
                <img src="../../../../assets/mine/icon1.png" alt="" class="mime-link-item-img" >
                <span class="mime-link-item-name">投标</span>
            </router-link>
        </li>
        <li >
            <router-link to="/mine" class="mime-link-item">
                <img src="../../../../assets/mine/icon1.png" alt="" class="mime-link-item-img" >
                <span class="mime-link-item-name">投标</span>
            </router-link>
        </li>
        <li >
            <router-link to="/mine" class="mime-link-item">
                <img src="../../../../assets/mine/icon1.png" alt="" class="mime-link-item-img" >
                <span class="mime-link-item-name">投标</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "mime-link"
    }
</script>

<style lang="scss">
    .mime-link{
        margin-top: 0.667rem;
        &-item{
            height: 1.6rem;
            border-bottom: 1px solid #E4E4E4;
            display: flex;
            align-items: center;
            &-name{
                font-size: 0.4rem;
                color: #505968;
                text-indent: 0.4rem;
            }
        }
    }
</style>