import axios, {create} from "axios";
import {createBrowserHistory} from "history";

import {authService} from "./authService";

const history = createBrowserHistory();
const carsAxiosService = axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v2'})

carsAxiosService.interceptors.request.use((config) =>{
    if(authService.isAuthenticated()){
        const access = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})
let isRefreshing = false;

carsAxiosService.interceptors.response.use((config)=>{
    return config
},
    async (error)=>{
    const refresh = authService.getRefreshToken();
    if(error.response?.status===401 && refresh && !isRefreshing){
        isRefreshing= true;
        try {
            await authService.refresh(refresh)
        }catch (e) {
            authService.deleteTokens()
            history.replace('/login?expSession=true')
        }
        isRefreshing=false;
        return carsAxiosService(error.config)
    }
        return Promise.reject(error)
    }
    )
export {
    carsAxiosService,
    history
}