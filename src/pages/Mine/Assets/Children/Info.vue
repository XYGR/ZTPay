<template>
    <div class="assets-info">
        <div class="assets-info-item">
            <h4 class="assets-info-item-title"><i class="assets-info-item-icon"></i>账号余额</h4>
            <h5 class="assets-info-item-money">¥ 735.00</h5>
        </div>
        <div class="assets-info-item last">
            <h4 class="assets-info-item-title"><i class="assets-info-item-icon"></i>冻结余额</h4>
            <h5 class="assets-info-item-money">¥ 265.00</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "assets-info"
    }
</script>

<style scoped lang="scss">
    .assets-info{
        padding: 0.4rem 0.533rem;
        border-top: 0.013rem solid #E4E4E4;
        border-bottom: 0.013rem solid #E4E4E4;
        position: relative;
        display: flex;
        &::before{
            content: " ";
            width: 1px;
            height: 100%;
            background-color: #E4E4E4;
            position: absolute;
            left: 50%;
            top: 0;
        }
        &-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 0.48rem;
            &-title{
                display: flex;
                align-items: center;
                margin-bottom: 0.267rem;
            }
            &-icon{
                width: 0.213rem;
                height: 0.213rem;
                display: block;
                border-radius: 50%;
                background-color: #1F7DFD;
                margin-right: 0.24rem;
            }
            &.last{
                .assets-info-item-icon{
                    background-color: #CE63F5;
                }
            }
        }
    }
</style>