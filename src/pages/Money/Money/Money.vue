<template>
    <div id="money" class="page">
        <money-header></money-header>
        <app-scroll>
            <money-hot></money-hot>
        </app-scroll>
    </div>
</template>

<script>
    import AppScroll from "../../../components/AppScroll";
    import Header from "./Children/Header";
    import Hot from "./Children/Hot";
    export default {
        name: "Money",
        components: {
            [AppScroll.name]:AppScroll,
            [Header.name]:Header,
            [Hot.name]:Hot
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
        .money-com-tag{
            width: 1.36rem;
            height: 0.347rem;
            line-height: 0.347rem;
            text-align: center;
            font-size: 0.267rem;
            margin-left: 0.133rem;
            border-radius: 0.08rem;
            &.once{
                border: 0.013rem solid #d46e6c;
                background-color: #FC5250;
                color: #ffffff;
            }
            &.immediate{
                border: 0.013rem solid #CBA04B;
                background-color: transparent;
                color: #CBA04B;
            }
        }
    }
</style>