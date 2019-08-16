import api from "../../net/api";
import {post} from "../../net/require";
export default {
    namespaced: true,
    state: {
        bidListData: [
            {
                title: ' 新手专享',
                bidData: [{
                        title: '新手专享30天授权方案',
                        tags: [{class: 'solid', value: '限购一次'}, {class: 'hollow', value: '转让即到'}],
                        rate: {
                            text: ['6', '%+6%'],
                            desc: '历史参考扣费后利率'
                        },
                        days: {
                            text: ['30', '天'],
                            desc: '锁定期'
                        },
                    },
                    {
                        title: '新手专享90天授权方案',
                        tags: [{class: 'solid', value: '限购一次'}, {class: 'hollow', value: '会员增利'}],
                        rate: {
                            text: ['7', '%+3.5%'],
                            desc: '历史参考扣费后利率'
                        },
                        days: {
                            text: ['90', '天'],
                            desc: '锁定期'
                        },
                    },
                    {
                        title: '新手专享180天授权方案',
                        tags: [{class: 'solid', value: '限购一次'}, {class: 'hollow', value: '会员增利'}],
                        rate: {
                            text: ['7.8', '%+3.5%'],
                            desc: '历史参考扣费后利率'
                        },
                        days: {
                            text: ['180', '天'],
                            desc: '锁定期'
                        },
                    }
                ]
            },
            {
                title: '转让即到',
                bidData: [{
                    title: '向日葵365天max方案',
                    tags: [{class: 'hollow', value: '会员增利'}, {class: 'hollow', value: '转让即到'}],
                    rate: {
                        text: ['9.8', '%+1%'],
                        desc: '历史参考扣费后利率'
                    },
                    days: {
                        text: ['365', '天'],
                        desc: '锁定期'
                    },
                },
                    {
                        title: '向日葵540天max方案',
                        tags: [{class: 'hollow', value: '限购一次'}, {class: 'hollow', value: '会员增利'}],
                        rate: {
                            text: ['10.2', '%+1.5%'],
                            desc: '历史参考扣费后利率'
                        },
                        days: {
                            text: ['540', '天'],
                            desc: '锁定期'
                        },
                    },
                    {
                        title: '向日葵730天max方案',
                        tags: [{class: 'hollow', value: '限购一次'}, {class: 'hollow', value: '会员增利'}],
                        rate: {
                            text: ['10.4', '%+1.5%'],
                            desc: '历史参考扣费后利率'
                        },
                        days: {
                            text: ['180', '天'],
                            desc: '锁定期'
                        },
                    }
                ]
            }

        ]
    },
    mutations: {},
    actions: {
        requireBidListData(){
            post(api.INVESTMENT_MESSAGE_LIST).then(res=>{
                console.log(res)
            })
        }
    }

}