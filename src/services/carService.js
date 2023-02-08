import {carsAxiosService} from "./carsAxiosService";

const carService = {
    getAll: ()=> carsAxiosService.get('/cars'),
    create: (newCar)=> carsAxiosService.post('/cars',newCar),
    updateById: (id, data)=> carsAxiosService.put(`/cars/${id}`, data),
    deleteById: (id)=> carsAxiosService.delete(`/cars/${id}`)
}

export {
    carService
}