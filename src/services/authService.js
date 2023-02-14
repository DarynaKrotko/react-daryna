import {carsAxiosService} from "./carsAxiosService";
import {urls} from "../configs";


const accessToken = 'access';
const refreshToken = 'refresh';
const authService = {
    login: async (cred) => {
        const response = await carsAxiosService.post(urls.auth.login, cred);
        if(response.status === 200){
            authService.setTokens(response.data)
        }
        return response
    },
    refresh: async (refresh) => {
       const response = await carsAxiosService.post(urls.auth.refresh, {refresh})
        if(response.status === 200){
            authService.setTokens(response.data)
        }
        return response
    },
    me: ()=> carsAxiosService.get(urls.auth.me),
    setTokens: ({access, refresh})=>{
        localStorage.setItem(accessToken,access)
        localStorage.setItem(refreshToken, refresh)
    },
    getAccessToken: ()=> localStorage.getItem(accessToken),
    getRefreshToken: ()=> localStorage.getItem(refreshToken),
    deleteTokens: ()=> {
        localStorage.removeItem(accessToken)
        localStorage.removeItem(refreshToken)
    },
    isAuthenticated: ()=> !!localStorage.getItem(accessToken)
}

export {authService};