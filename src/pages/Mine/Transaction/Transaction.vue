<template>
    <div class="page sub-page">
        <app-header title="交易记录"></app-header>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    export default {
        name: "Transaction",
        components:{
            [AppHeader.name]:AppHeader
        }
    }
</script>

<style scoped>

</style>