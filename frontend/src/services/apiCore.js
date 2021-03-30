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

export const createReservation = (
    brandR,
    modelR,
    yearR,
    servicesR,
    dateR,
    timeR,
    bringcarR,
    nameR,
    lastnameR,
    phoneR,
    emailR,
    commentR
) => {

    let data = JSON.stringify({
        brand: brandR,
        model: modelR,
        year: yearR,
        services:servicesR,
        date:dateR,
        time:timeR,
        bringcar:bringcarR,
        name: nameR,
        lastname: lastnameR,
        phone: phoneR,
        email: emailR,
        comment: commentR
    });

    return fetch(
        `${API}/reservation/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    ).then(response => {
        console.log(response);
        return response.json();
    }).catch(err => console.log);
}