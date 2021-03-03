import { API } from '../config';

export const getServices = () => {
    return fetch(
        `${API}/service/list`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}

export const getBrands = () => {
    return fetch(
        `${API}/brand/list`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}