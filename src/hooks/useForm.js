import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (newResetState = initialState) => {
        setValues( newResetState );
    }


    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}