<template>
   <div class="Records">
       <div>
            <h1>平台数据（截止至2019-07-26 23:59:59）</h1>
            <img src="../../../../assets/msg/shuju.png" alt="">
       </div>
        <div>
            <h1>收费标准</h1>
            <div>
                <h2>基础业务收费标准</h2>
                <ul>
                    <li><span>业务类型:</span><i>资费标准</i></li>
                    <li><span>用户注册:</span><i>免费</i></li>
                    <li><span>开通存管账户:</span><i>免费</i></li>
                    <li><span>充值:</span><i>免费</i></li>
                    <li><span>提现:</span><i>1元/笔（目前免费）</i></li>
                </ul>
            </div>
            <div>
                <h2>授权投标业务收费标准</h2>
                <p>包含授权投标、工作定投、梦想计划、日进斗金、至尊宝</p>
                <p><span>加入费用:</span><i>除出借本金外，无其他额外费用</i></p>
                <p><span>授权结束费用:</span><i>无</i></p>
            </div>
            <div>
                <h2>管理费用:</h2>
                <p>当前实际利息-目标利息，服务费为0元；</p>
                <p>当前实际利息-目标利息，则服务费=实际；</p>
                <p>利息-目标利息</p>
            </div>
            <div>
                <h2>提前退出违约费:</h2>
                <p>不支持提前转让</p>
            </div>
            <div>
                <h2>目标利息:</h2>
                <span>定投和梦想计划的目标利息=[R*(X+M)*30/365]+[R*(X+2M)*30/365]......+[(N-1)*R*Y*30/365](R:每月加入本金，X:平均出借利息，N:锁定期，M:每次成功划扣利息，Y:最高封顶平均出借利息)</span>
            </div>
            <div>
                <h2>直投项目及债权转让业务收费标准</h2>
                <p><span>加入费用:</span><i>除出借本金外，无其他额外费用</i></p>
                <p><span>债权转让手续费:</span><i>根据债权持有天数不同手续费施行剃式扣费</i></p>
                <img src="../../../../assets/msg/jieguo.png" alt="">
                <p>*最低收取1元，无上限</p>
                <strong>法定代表人签名:</strong>
            </div>
        </div>
   </div>
</template>

<script>
    export default {
       name: "Records",
    }
</script>

<style lang="scss" scoped>
    .Records{
        padding: 0 0.5333rem;
        box-sizing: border-box;
        background: #fff;
        h1{
            font-size: 0.4267rem;
            line-height: 1.3333rem;
            color: blue;
            font-weight: 600;
        };
        h2{
            font-size: 0.3733rem;
            font-weight: 600;
            line-height: 1.7333rem;
        };
        ul li,p{
            font-size: 0.32rem;
            line-height: 1.3333rem;
            i{
                float: right;
                font-weight: 900;
            }
        };
        span{
            font-size: 0.32rem;
            line-height: 0.88rem;
        };
        strong{
                line-height: 1.52rem;
                margin-left: 4.6667rem;
                font-size: 0.4267rem;
            }
    }
</style>