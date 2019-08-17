<template>
    <div class="record page sub-page">
        <app-header title="投标记录"></app-header>
        <app-scroll class="content">
            <record-chart></record-chart>
            <record-content></record-content>
        </app-scroll>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import AppScroll from "../../../components/AppScroll";
    import Chart from "./Children/Chart";
    import Content from "./Children/Content";
    export default {
        name: "Record",
        components:{
            [AppHeader.name]:AppHeader,
            [AppScroll.name]:AppScroll,
            [Chart.name]:Chart,
            [Content.name]:Content
        },

    }
</script>

<style scoped lang="scss">
    #app-header{
        background-color: #2A89FA;
        &:before{
            border: none;
        }
    }

</style>