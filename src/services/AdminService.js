import axios from "axios";

class AdminService {

    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/car`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    putCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/car`, data)
                .then((res) => {

                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    };



    deleteCar = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}admin/car`, {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };



    fetchCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}admin/car`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




}

export default new AdminService()