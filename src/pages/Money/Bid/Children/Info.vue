<template>
    <div class="bid-info">
        <ul class="bid-info-list">
            <li class="bid-info-item" v-for="item in infoList" :key="item.id">
                <div class="bid-info-item-block">
                    <p class="bid-info-item-title">{{item.title}}</p>
                    <p class="bid-info-item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
        <router-link to="/money" class="bid-info-toAgreement">相关协议</router-link>
    </div>
</template>

<script>
    export default {
        name: "bid-info",
        data(){
            return {
                infoList:[{id:1,title:'项目类型',desc:'信用贷'},{id:2,title:'项目类型',desc:'信用贷'},{id:3,title:'项目类型',desc:'信用贷'}]
            }
        },
    }
</script>

<style scoped lang="scss">
    .bid-info{
        padding-top: 0.267rem;
        background-color: #F8F8F8;
        &-item,&-toAgreement{
            font-size: 0.4rem;
            background-color: #FFFFFF;
            padding: 0 0.533rem;
            &-block{
                height: 1.547rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #F4F4F4;
            }
            &-desc{
                font-weight: bold;
            }
        }
        &-toAgreement{
            height: 1.547rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>