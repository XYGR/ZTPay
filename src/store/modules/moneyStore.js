import api from "../../net/api";
import {post} from "../../net/require";
export default {
    namespaced: true,
    state: {
        bidListData:[]
    },
    mutations: {
        setBidListData(state,value){
            state.bidListData = value
        }
    },
    actions: {
        requireBidListData(context){
            post(api.INVESTMENT_MESSAGE_LIST).then(res=>{
                if (res.data.state === "SUCCESS"){
                    return res.data.date
                }else{
                    throw new Error('requireError')
                }

            }).then(data => {
                let filterData = data.map(item=>{
                    return {
                        title:item.title,
                        list:item.list.map(ele =>{
                            return {
                                ...ele,
                                tags: [{class: 'hollow', value: '限购一次'}, {class: 'hollow', value: '会员增利'}],
                                rate:{
                                    text: [(ele.imInterest1*100).toFixed(1), `%+${(ele.imInterest2*100).toFixed(1)}%`],
                                    desc: '历史参考扣费后利率'
                                },
                                days: {
                                    text: [ele.imLocktime, '天'],
                                    desc: '锁定期'
                                },
                            }

                        })
                    }
                })
                context.commit('setBidListData',filterData)

            }).catch(error =>{
                console.error(error)
            })
        }
    }

}