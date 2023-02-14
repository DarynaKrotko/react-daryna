import {carsAxiosService} from "./carsAxiosService";
import {urls} from "../configs";

const carService = {
    getAll: (page=1)=> carsAxiosService.get(urls.cars.cars, {params:{page}}),
    create: (newCar)=> carsAxiosService.post(urls.cars.cars,newCar),
    updateById: (id, data)=> carsAxiosService.put(`${urls.cars.cars}/${id}`, data),
    deleteById: (id)=> carsAxiosService.delete(`${urls.cars.cars}/${id}`)
}

export {
    carService
}