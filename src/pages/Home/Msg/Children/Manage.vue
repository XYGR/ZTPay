<template>
   <div class="Manage">
       <div class="register">
           <h1>地方金融监管部门的备案登记信息</h1>
           <ul>
            <li><span>备案登记地方监管部门:</span><i>无</i></li>
            <li><span>备案登记时间:</span><i>无</i></li>
            <li><span>备案登记编号:</span><i>无</i></li>
        </ul>
       </div>
       <div class="manage">
           <h1>电信业务经营许可信息</h1>
           <img src="../../../../assets/msg/qukezheng.png" alt="">
       </div>
       <div class="records">
           <h1>公安机关核发的网站备案</h1>
           <p><span>图标及编号:</span><i>京公网安备:11010102001351</i></p>
           <p><span>"信息系统安全等级保护"三级备案编号:</span><i>11010199035-0001</i></p>
           <img src="../../../../assets/msg/dengji.png" alt="">
       </div>
       <div class="risk">
           <h1>风险管理信息</h1>
           <h2>一、风险管理组织架构</h2>
           <img src="../../../../assets/msg/zhigantu.png" alt="">
           <h2>二、风险评估流程</h2>
           <p>理财人通过智投金服资产端提交智投申请后，申请数据将及时传送至收益利息</p>
           <strong>法定代表人签名:</strong>
       </div>
   </div>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>
    .Manage{
        overflow: hidden;
        position: absolute;
        width: 8.96rem;
        top: 2.3733rem;
        bottom: 0;
        padding: 0 0.5333rem;
        background: #fff;
        .register{
            border-bottom: 0.2667rem solid #ccc;
            h1{
                font-size: 0.5333rem;
                line-height: 1.92rem;
                color: blue;
                font-weight: 600;
            };
            ul li{
                font-size: 0.3733rem;
                margin-bottom: 0.64rem;
                span{
                    display: inline-block;
                   width: 6.8267rem;
                }
                i{
                    float: right;
                    font-weight: 900;
                }
            }
        };
        .manage{
            border-bottom: 0.2667rem solid #ccc;
            h1{
                font-size: 0.5333rem;
                color: blue;
                font-weight: 600;
                margin-top: 0.6667rem;
                margin-bottom: 0.2933rem;
            };
            img{
                margin: 0 auto;
            }
        }
    }
</style>