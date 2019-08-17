<template>
    <div class="assets-chart" ref="container">

    </div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: "assets-chart",
        mounted() {
            this.echart = echarts.init(this.$refs.container);
            this.echart.setOption({
                color:['#1F7DFD', '#CE63F5'],
                graphic:{
                    type:"text",
                    left: 'center',
                    top: '40%',
                    style:{
                        text:"1000.00",
                        textAlign:"center",
                        fill:"#333",
                        fontSize:48,
                    }
                },
                title: {
                    text: '当前总资产(元)',
                    left: 'center',
                    top: '52%',
                    textStyle: {
                        color: '#999',
                        fontSize: 30 ,
                        align: 'center'
                    }
                },
                series: [
                    {
                        name:'当前资产(元)',
                        type:'pie',
                        radius: ['50%', '70%'],
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
                            {value:735, name:'账号余额'},
                            {value:265, name:'冻结金额'},
                        ]
                    }
                ]
            });
            this.echart.resize
        }
    }
</script>

<style scoped lang="scss">
    .assets-chart{
        width: 100%;
        height: 7.2rem;
    }
</style>