import axios from 'axios';

//没有做拦截，根据情况再看
export function get(url,config) {
    // 请求超过20秒则判定为超时
    const getInstance = axios.create({
        baseURL: '/api',
        timeOut: 20000,
        withCredentials: true,
    });
    getInstance.defaults.withCredentials = true;

    if (config) {
        if (config.params) {
            if (config.headers) {
                return getInstance.get(url, {params: config.params, headers: config.headers}); // 有参数和请求头
            }
            return getInstance.get(url, {params: config.params}); // 有参数没请求头
        }
        if (config.headers) {
            return getInstance.get(url, {headers: config.headers}); // 没参数有请求头
        }
    } else {
        return getInstance.get(url); // 没参数和请求头
    }
}

export function post(url,data,headers) {
    // 请求超过20秒则判定为超时
    const postInstance = axios.create({
        baseURL: '/api',
        timeOut: 20000,
        withCredentials: true,
    });

    postInstance.defaults.withCredentials = true;
    // axios.post("http://xxx/xxx",
    //   //参数列表
    //   { 'id': id },
    //   //请求头配置
    //   { headers: {'token':token }}
    // )

    // 如果 data 是 Content-Type: application/json ，后端要用 @RequestBody 接收
    if (headers) {
        return postInstance.post(url, data, headers); // 有请求头
    }
    return postInstance.post(url, data);  // 没请求头
}