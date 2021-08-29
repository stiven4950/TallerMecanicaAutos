import { API } from "../config";

export const putUserData = async (
    name,
    lastname,
    phone,
    email,
    address
) => {

    const jsonData = JSON.stringify({
        name,
        lastname,
        phone,
        email,
        address
    });

    const options = {
        method: 'PUT',
        body: jsonData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(API + '/user/edit', options);
    const toJson = await response.json();

    if (toJson) {
        return toJson;
    }
    return false;
}

export const createUser = async (
    name,
    lastname,
    phone,
    email,
    address
) => {

    const jsonData = JSON.stringify({
        name,
        lastname,
        phone,
        email,
        address
    });

    const options = {
        method: 'POST',
        body: jsonData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(API + '/user/create', options);
    const toJson = await response.json();

    if (toJson) {
        return toJson;
    }
    return false;
}