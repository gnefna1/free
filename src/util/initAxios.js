import axios from "axios";
import { Loading } from "element-ui";
import router from '../router'

let token = localStorage.getItem("token")
if(token){
    axios.defaults.headers.common["Authorization"] = token
}
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Loading.service({ fullscreen: true });
    return config;
}, function (error) {
    // 对请求错误做些什么
    Loading.service({ fullscreen: true }).close()
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Loading.service({ fullscreen: true }).close()
    if (response.data.code === 401){
        let formPath = window.location.hash.split("#")[1]
        debugger
        router.push({ path: "/login", query: { path: formPath}})
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    Loading.service({ fullscreen: true }).close()
    return Promise.reject(error);
});
export  {axios}