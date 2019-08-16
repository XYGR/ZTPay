import axios from 'axios';

export default {
    get(url,config = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url,config)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (error) {
                    // handle error
                    reject(error);
                })
        })
    },
    post(url,data = {},config = {}){
        return new Promise((resolve, reject)=>{
            axios.post(url,data,config)
                .then((response)=>{
                    resolve(response);
                })
                .catch((error)=>{
                    reject(error);
                })
        })
    }
}