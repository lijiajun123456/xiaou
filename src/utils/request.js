import axios from 'axios'
const baseUrl = '/api';
// 响应拦截
axios.interceptors.response.use(res => {
    console.group('本次响应的路径为:' + res.config.url)
    console.log(res)
    return res
})


//轮播图
export const requestBanner = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/getbanner',
    })
}