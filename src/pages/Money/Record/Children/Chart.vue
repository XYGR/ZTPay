<template>
    <div class="record-chart">
        <div class="record-chart-main">
            <h3 class="record-chart-main-title">近一个月用户投标金额分布占比</h3>
            <div class="record-chart-main-container" ref="container"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: "record-chart",
        mounted() {
            this.echart = echarts.init(this.$refs.container);
            // TODO label 待添加百分比 数据待请求获取
            this.echart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                color:['#FE9707', '#A2E27C','#834EF8','#00FF99'],
                legend: {
                    orient: 'left',
                    x: '55%',
                    y:'20%',
                    itemGap:28,
                    data:['≥ 10万元','5万元-10万元','1万元-5万元','<1万元'],
                    textStyle:{
                        fontSize:24
                    }
                },
                grid:{
                    xAxis:0,
                    yAxis:0
                },
                graphic:{
                    type:"text",
                    left: '16%',
                    top: '45%',
                    style:{
                        text:"累积投标",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:28,
                    }
                },
                title: {
                    text: '22080人',
                    left: '16%',
                    top: '55%',
                    textStyle: {
                        color: '#333',
                        fontSize: 28 ,
                        align: 'center'
                    }
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        center:['25%','55%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'≥ 10万元'},
                            {value:310, name:'5万元-10万元'},
                            {value:234, name:'1万元-5万元'},
                            {value:548, name:'<1万元'}
                        ]
                    }
                ]
            });
            this.echart.resize
        }
    }
</script>

<style scoped lang="scss">
    .record{
        &-chart{
            height: 4.72rem;
            background-color: #2A89FA;
            padding: 0 0.533rem;
            &-main{
                width: 100%;
                height: 5.387rem;
                background-color: #FFFFFF;
                border-radius: 0.133rem;
                box-shadow:0 0.053rem 0.16rem 0 rgba(0,0,0,.2);
                transform: translateY(0.8rem);
                &-title{
                    text-align: center;
                    font-size: 0.32rem;
                    line-height: 0.32rem;
                    transform: translateY(0.4rem);
                }
                &-container{
                    width: 100%;
                    height: 4.987rem;
                    position: relative;
                    &::before{
                        content: ' ';
                        width: 1px;
                        height: 80%;
                        border: 1px solid #ccc;
                        position: absolute;
                        left: 50%;
                        top: 15%;
                        z-index: 999;
                    }
                }
            }
        }
    }
</style>