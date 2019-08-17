<template>
    <div class="mine-header">
        <div class="mine-header-user">
            <div class="mine-header-user-img">
                <img src="../../../../assets/mine/touxiang.png" alt="">
            </div>
            <div class="mine-header-user-info">
                <div class="mine-header-user-info-block">
                    <p class="mine-header-user-info-phone">158****2976</p>
                    <p class="mine-header-user-info-vip">
                    </p>
                </div>
                <router-link class="mine-header-user-info-attestation" to="/mine/authentication">未实名认证</router-link>
            </div>
        </div>
        <div class="mine-header-menu">
            <router-link class="mine-header-menu-target" to="/mine"></router-link>
            <router-link class="mine-header-menu-target" to="/mine"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine-header"
    }
</script>

<style lang="scss">
    .mine-header {
        width: 100%;
        height: 1.6rem;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;

        &-user {
            flex: 1;
            display: flex;
            padding-left: 0.267rem;

            &-img {
                width: 1.6rem;
                height: 1.6rem;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            &-info {
                margin-left: 0.213rem;
                &-block{
                    height: 0.667rem;
                    display: flex;
                    align-items: center;
                    margin-top: 0.16rem;
                }
                &-phone {
                    font-size: 0.453rem;
                    margin-right: 0.187rem;
                    line-height: 0.347rem;
                }
                &-vip{
                    width: 0.72rem;
                    height: 0.4rem;
                    background: url("../../../../assets/mine/vip.png") no-repeat;
                    background-size: 0.72rem,0.4rem;
                }
                &-attestation{
                    width: 1.627rem;
                    height: 0.533rem;
                    display: block;
                    line-height: 0.533rem;
                    text-align: center;
                    font-size: 0.267rem;
                    color: #999;
                    border-radius: 0.267rem;
                    border: 0.013rem solid #999999;
                }
            }
        }
        &-menu{
            display: flex;
            align-items: center;
            padding-right: 0.133rem;
            &-target{
                width: 0.533rem;
                height: 0.533rem;
                display: block;
                background: url("../../../../assets/mine/kefu.png") no-repeat;
                background-size: 0.533rem;
                margin-right: 0.4rem;
                &:last-child{
                    background: url("../../../../assets/mine/icon.png") no-repeat;
                    background-size: 0.533rem;
                }
            }
        }
    }
</style>