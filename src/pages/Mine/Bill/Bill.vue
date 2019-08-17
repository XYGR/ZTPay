<template>
    <div class="page sub-page">
        <app-header title="账单"></app-header>
            <bill-filter></bill-filter>
        <app-scroll class="content">
            <bill-content></bill-content>
        </app-scroll>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import AppScroll from "../../../components/AppScroll";
    import Filter from "./Children/Filter";
    import Content from "./Children/Content";
    export default {
        name: "Bill",
        components:{
            [AppHeader.name]:AppHeader,
            [AppScroll.name]:AppScroll,
            [Filter.name]:Filter,
            [Content.name]:Content
        }
    }
</script>

<style scoped>
    .content{
        top: 2.187rem;
    }
</style>