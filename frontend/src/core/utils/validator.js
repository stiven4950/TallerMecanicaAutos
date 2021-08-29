export const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const regExpPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
export const regExpNames = /^([a-zA-Z ñáéíóú]{2,60})$/;
export const regExpPhone = /^(\+57)?[ -]*(0|3)?([0-9]){10}$/;
export const regExpComment = /^([a-zA-Z ñáéíóú .,;'"]{2,200})$/;


export const validateField = (value, regExp)=>{

    if(regExp.test(value)) return true;
    return false;
}