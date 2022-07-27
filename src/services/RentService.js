import axios from "../axios";

class RentService {
    postRent = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('rent', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    fetchRent = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('rent')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putRent = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('rent', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteRent = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('rent', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}
export default new RentService();