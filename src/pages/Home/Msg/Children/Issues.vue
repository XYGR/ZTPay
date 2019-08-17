<template> 
       <div class="Issues">
        <h1>重大事项</h1>
        <ul>
            <li><span>公司减资、合并、分立、解散或申请破产:</span><i>无</i></li>
            <li><span>公司依法进入破产程序:</span><i>无</i></li>
            <li><span>公司被责令停业、整顿、关闭:</span><i>无</i></li>
            <li><span>公司设计重大诉讼、仲裁、或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚:</span><i>无</i></li>
            <li><span>公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施:</span><i>无</i></li>
            <li><span>公司主要或者全部业务陷入停顿:</span><i>无</i></li>
            <li><span>存在欺诈、损坏出理财利益等其他影响网络理财信息中介机构经营活动的重大事项:</span><i>无</i></li>
            <li><span>其他重大事项</span><i>无</i></li>
            <li><span>公司法定代表人、持股%5以上的股东、实际控制人、主要负责人、董事、监事、高级管理人员的变更:</span><i>无</i></li>
        </ul>
        <strong>法定代表人签名:</strong>
       </div>
</template>

<script>
    export default {
       name: "Issues",
        components:{
        }
    }
</script>

<style lang="scss" scoped>
    .Issues{
        padding: 0 0.5333rem;
        box-sizing: border-box;
        background: #fff;
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
        };
        strong{
            line-height: 1.52rem;
            margin-left: 4.6667rem;
            font-size: 0.4267rem;
        }
    }
</style>