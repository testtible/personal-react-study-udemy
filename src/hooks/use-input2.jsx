import React, {useState, useEffect} from 'react';

const useInput2 = (validateValue) => {
    
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    
    const hasError = !valueIsValid && isTouched;

    const changeValueHandler = (e) => {
        setValue(e.target.value)
    };

    const changeBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return { 
        value,
        hasError,
        valueIsValid,
        changeValueHandler,
        changeBlurHandler,
        reset
    };
};

export default useInput2;