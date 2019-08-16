<template>
    <div class="bid-submit">
        <div class="bid-submit-info">
            <p class="bid-submit-info-text">投标<br>金额</p>
            <input type="number" class="bid-submit-info-inp" v-model.number="amount" placeholder="¥最小投标100.00元">
        </div>
        <button class="bid-submit-action" @click.prevent="bidSubmit">投标</button>
    </div>
</template>

<script>
    export default {
        name: "bid-submit",
        data(){
            return {
                amount:''
            }
        },
        methods:{
            bidSubmit(){
                this.$router.push({ path: `/money/bid/1/success/${this.amount}`})
            }
        }
    }
</script>

<style scoped lang="scss">
    .bid-submit{
        width: 100%;
        height: 1.307rem;
        background-color: #FFFFFF;
        position: fixed;
        bottom: 0;
        display: flex;
        &-info{
            flex: 1;
            height: 100%;
            padding: 0 0.533rem;
            border-top: 1px solid #DCDCDC;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-text{
                font-size: 0.453rem;
                line-height: 0.48rem;
            }
            &-inp{
                width: 3.52rem;
                height: 0.88rem;
                border: 1px solid #DCDCDC;
                background-color: #F8F8F8;
                font-size: 0.32rem;
                color: #999;
                text-indent: 0.107rem;
            }
        }
        &-action{
            width: 4.08rem;
            height: 100%;
            display: block;
            background-color: #2A89FA;
            text-align: center;
            font-size: 0.64rem;
            line-height: 1.307rem;
            color: #FFFFFF;
        }
    }
</style>