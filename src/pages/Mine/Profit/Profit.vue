<template>
    <div class="page sub-page">
        <app-header title="收益记录"></app-header>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    export default {
        name: "Profit",
        components:{
            [AppHeader.name]:AppHeader
        }
    }
</script>

<style scoped>

</style>