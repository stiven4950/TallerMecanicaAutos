import {API} from '../config';

// CATEGORIES
export const getLists=(url)=>{
    return fetch(
        `${API}/${url}/list`, {method:"GET"}
    ).then(response=>{
        return response.json();
    }).catch(err=>console.log);
}

export const createCarrousel=(name, link, photoMobile, photoDesktop)=>{
    let data = new FormData();
    data.append('name', name);
    data.append('link', link);
    data.append('photoMobile', photoMobile);
    data.append('photoDesktop', photoDesktop);
    
    return fetch(
        `${API}/carrousel/create`, {
            method:"POST",
            body:data
        }
    ).then(response=>{
        console.log(response);
        return response.json();
    }).catch(err=>console.log);
}

export const deleteItem=(url,id)=>{
    return fetch(
        `${API}/${url}/${id}`, {method:"DELETE"}
    ).then(response=>{
        return response.json();
    }).catch(err=>console.log);
}

export const createService=(name, description, type, slug, photo, photoDetail)=>{
    let data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('type', type);
    data.append('slug', slug);
    data.append('photo', photo);
    data.append('photoDetail', photoDetail);
    
    return fetch(
        `${API}/service/create`, {
            method:"POST",
            body:data
        }
    ).then(response=>{
        console.log(response);
        return response.json();
    }).catch(err=>console.log);
}



