import {axiosCarService} from "./axiosCarService";

const carService = {
    getAll: ()=> axiosCarService.get('/cars'),
    create: (newCar) =>axiosCarService.post('/cars', newCar),
    updateById:(id, data) => axiosCarService.put(`/cars/${id}`, data),
    deleteById: (id)=> axiosCarService.delete(`/cars/${id}`)
}

export {carService};