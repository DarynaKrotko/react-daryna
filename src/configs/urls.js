const baseURL = 'https://jsonplaceholder.typicode.com/'

const cars = '/cars';
const auth = '/auth';
const urls = {
    auth:{
        login:auth,
        refresh: `${auth}/refresh`,
        me:`${auth}/me`
    },
    users: '/users',
    posts: '/posts',
    cars:{
        cars,
        byId:(id)=>`${cars}/${id}`
    }
}

export {baseURL, urls};