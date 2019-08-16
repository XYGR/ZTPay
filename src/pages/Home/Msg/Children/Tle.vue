<template>
<nav class="tle">
    <template v-for="tabItem in tabData">
        <router-link class="tab-item" :key="tabItem.id" 
            :to="tabItem.path">
            <span>{{tabItem.name}}</span>
        </router-link>
    </template>

</nav>

</template>

<script>
    export default {
       name: 'msg-tle',
        data(){
            return {
                tabData: [
                    {id: 1, name: '重大事项', path: '/home/msg/1/Issues'},
                    {id: 2, name: '备案信息', path: '/home/msg/2/Manage'},
                    {id: 3, name: '经营信息', path: '/home/msg/3/Records'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
   .tle{
       height: 1.2rem;
       font-size: 0.4rem;
       padding: 0 1.0667rem;
       background: #fff;
       .tab-item{
           display: inline-block;
            height: 1.2rem;
            padding: 0 0.4667rem;
            line-height: 1.2rem;
           &.router-link-active{
               font-weight: 900;
               border-bottom: 2px solid blue;
           }
       }
   }
</style>