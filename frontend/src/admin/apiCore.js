import {API} from '../config';

// CATEGORIES
export const getCarrousel=()=>{
    return fetch(
        `${API}/carrousel/list`, {method:"GET"}
    ).then(response=>{
        return response.json();
    }).catch(err=>console.log);
}