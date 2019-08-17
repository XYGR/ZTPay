<template>
    <div class="bill-filter">
        <div class="bill-filter-select"><span>本月</span></div>
        <div class="bill-filter-money">
            <p class="bill-filter-money-sum">支出 ￥1000.00</p>
            <p class="bill-filter-money-sum">收入 ￥1000.00</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bill-filter",
        data(){
          return {
              date:0,
              dateOps:[
                  { text: '本月', value: 0 },
                  { text: '近三月', value: 1 },
                  { text: '近半年', value: 2 },
                  { text: '全年', value: 3 },
              ]
          }
        },
        components:{

        }
    }
</script>

<style lang="scss">
    .bill-filter{
        height: 0.987rem;
        padding: 0 0.533rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #FFFFFF;
        &-select{
            display: flex;
            align-items: center;
            span{
                position: relative;
                font-size: 0.373rem;
                padding-right: 0.053rem;
                &::after {
                    position: absolute;
                    top: 50%;
                    right: -0.16rem;
                    margin-top: -0.053rem;
                    border: 0.053rem solid;
                    border-color: transparent transparent currentColor currentColor;
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    opacity: .8;
                    content: '';
                }
            }
        }
        &-money{
            height: 100%;
            padding: 0.133rem 0;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: space-between;
            &-sum{
                font-size: 0.32rem;
                line-height: 0.32rem;
            }
        }

    }
</style>