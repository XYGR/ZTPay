<template>
    <div>
        <app-header title=''></app-header>
    </div>
</template>

<script>
    import AppHeader from '../../../components/AppHeader'
    export default {
        name: "BankCardAdd",
        components:{
                [AppHeader.name]: AppHeader,
            },
    }
</script>

<style scoped>

</style>