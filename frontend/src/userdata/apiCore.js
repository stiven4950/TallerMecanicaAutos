import { API } from '../config';

export const getUser = (email) => {
    return fetch(
        `${API}/user/${email}`, { method: "GET" }
    ).then(response => {
        return response.json();
    }).catch(err => console.log);
}