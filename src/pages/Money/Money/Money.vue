<template>
    <div id="money" class="page">
        <money-header></money-header>
        <app-scroll>
            <money-hot></money-hot>
            <money-bid :data="bidList[0]"></money-bid>
        </app-scroll>
    </div>
</template>

<script>
    import AppScroll from "../../../components/AppScroll";
    import Header from "./Children/Header";
    import Hot from "./Children/Hot";
    import Bid from "./Children/Bid";
    export default {
        name: "Money",
        data(){
            return {
               bidList:[
                   {
                       title:' 新手专享',
                       bidData:[
                           {
                                title:'新手专享30天授权方案',
                                tags:[{class:'solid',value:'限购一次'},{class:'hollow',value:'转让即到'}]
                           }
                       ]
                   }
               ]
            }
        },
        components: {
            [AppScroll.name]:AppScroll,
            [Header.name]:Header,
            [Hot.name]:Hot,
            [Bid.name]:Bid
        },

    }
</script>

<style lang="scss">
    #money{
        background-color: #ffffff;
        .app-scroll{
            width: 100%;
            position: absolute;
            top: 2.027rem;
            bottom: 0;
        }
        .money-com-title{
            font-size: 0.32rem;
            padding-top: 0.347rem;
            height: 0.8rem;
            display: flex;
            align-items: center;
            &-text{
                text-indent: 0.427rem;
            }
            &-tag{
                width: 1.36rem;
                height: 0.347rem;
                line-height: 0.347rem;
                text-align: center;
                font-size: 0.267rem;
                margin-left: 0.133rem;
                border-radius: 0.08rem;
                &.solid{
                    border: 0.013rem solid #d46e6c;
                    background-color: #FC5250;
                    color: #ffffff;
                }
                &.hollow{
                    border: 0.013rem solid #CBA04B;
                    background-color: transparent;
                    color: #CBA04B;
                }
            }
        }
    }
</style>