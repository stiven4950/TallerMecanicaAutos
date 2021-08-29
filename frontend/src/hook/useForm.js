import {useState} from 'react';
import { validateField } from '../core/utils/validator';

export const useForm = (initialState={}) => {
    const [value, setValue] = useState(initialState);

    const handleInputChange = (e, regExp)=>{
        const {target} = e;
        setValue({
            ...value,
            [target.name]:target.value
        });
        return validateField(target.value,regExp);
    }

    const cleanOBjects = (object)=>{
        setValue(object);
    }

    const fillOBjects = (object) => {
        setValue({
            ...value,
            ...object
        });
    }

    return [value, handleInputChange, cleanOBjects, fillOBjects];
}
