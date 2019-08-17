<template>
    <div>
        <div class="page sub-page">
            <app-header title=''></app-header>
        </div>
        
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