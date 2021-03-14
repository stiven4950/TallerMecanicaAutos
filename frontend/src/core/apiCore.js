import { API } from '../config';

export const getLists = (model) => {
    return fetch(
        `${API}/${model}/list`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}