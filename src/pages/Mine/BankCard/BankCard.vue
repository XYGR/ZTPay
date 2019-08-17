<template>
<div class="page sub-page">
    <div >
        <app-header title='银行卡' class = "header"></app-header>
        <div class = "Cards1">
            <img src="/images/bankcard/bank.png" alt="" class = "pic">
            <div class = "myCard">
                <p>中国邮政银行</p>
                <p>尾号5678存储卡</p>
            </div>
            <input type="checkbox"/>
        </div>
        <div class = "Cards2">
            <img src="/images/bankcard/bank.png" alt="" class = "pic">
            <div class = "myCard">
                <p>中国邮政银行</p>
                <p>尾号1234存储卡</p>
            </div>
            <input type="checkbox"/>
        </div> 
        <router-link to="/mine/bankcard/add">
            <div class = "Cards3">
            <img src="/images/bankcard/add.png" alt="" class = "add">
            <p class = "newCard">绑定新卡</p>
            </div> 
        </router-link>
    </div>
    <transition name="van-slide-right">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
    import AppHeader from '../../../components/AppHeader'
        export default {
            name: "BankCard",
            components:{
                [AppHeader.name]: AppHeader,
            },
            props:{
                title:`银行卡`
            }
        }
</script>

<style lang= "scss" scoped>
    .page{
        background-color: #FFFFFF;
        .header{
            border-bottom: solid 1px #E4E4E4;
        }
        .Cards1{
            margin-left: 39px;
            margin-top: 37px;
            border: solid 1px #A9A9A9 20%;
            display: flex; 
            height: 121px;
            width: 671px;
            font-size: 24px;
            box-shadow: 0px 0px 20px 0px rgba(169, 169, 169, 0.2);
        
        
            .pic{
                padding-left: 15px;
                padding-top: 30px;
                width: 79px;
                height: 61px;
                
            }
            .myCard{
                padding-left: 31px;
                padding-top: 34px;
                font-size: 24px;
            }
            input{
                width: 20px;
                height: 20px;
                position: absolute;
                right: 71px;
                top: 197px;
            }
        }
        .Cards2{
            margin-left: 39px;
            margin-top: 26px;
            border: solid 1px #A9A9A9 20%;
            display: flex; 
            height: 121px;
            width: 671px;
            font-size: 24px;
            box-shadow: 0px 0px 20px 0px rgba(169, 169, 169, 0.2);
            .pic{
                padding-left: 15px;
                padding-top: 30px;
                width: 79px;
                height: 61px;
                
            }
            .myCard{
                padding-left: 31px;
                padding-top: 34px;
                font-size: 24px;
            }
            input{
                width: 20px;
                height: 20px;
                position: absolute;
                right: 71px;
                top: 336px;
            }
        }
        .Cards3{
            margin-left: 39px;
            margin-top: 26px;
            border: solid 1px #A9A9A9 20%;
            display: flex; 
            height: 121px;
            width: 671px;
            font-size: 24px;
            box-shadow: 0px 0px 20px 0px rgba(169, 169, 169, 0.2);
            .add{
                padding-left: 48px;
                padding-top: 48px;
                width: 26px;
                height: 26px;
            }
            .newCard{
                padding-left: 61px;
                padding-top: 48px;
            }
        }
    }
    

</style>