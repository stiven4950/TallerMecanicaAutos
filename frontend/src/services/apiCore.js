import { API } from '../config';

export const getService = (name) => {
    return fetch(
        `${API}/service/${name}`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}

export const getLists = (model, idService) => {
    return fetch(
        `${API}/${model}/${idService}`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}