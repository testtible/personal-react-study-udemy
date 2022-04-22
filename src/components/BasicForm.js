import useInput2 from '../hooks/use-input2';
import { useState, useReducer } from 'react';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    valueIsValid: enteredfirstNameValid,
    changeValueHandler: firstNameChangeHandler,
    changeBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput2(value => value.trim() !== '');

  const {
    value: enteredScdName,
    hasError: scdNameHasError,
    valueIsValid: enteredScdNameValid,
    changeValueHandler: scdNameChangeHandler,
    changeBlurHandler: scdNameBlurHandler,
    reset: scdNameReset
  } = useInput2(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueIsValid: enteredEmailValid,
    changeValueHandler: emailChangeHandler,
    changeBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput2(value => value.includes('@'));


  const formValid = enteredfirstNameValid
      && enteredScdNameValid
      && enteredEmailValid;

  const onSubmit = (e) => {
    e.preventDefault();

    if(!formValid) {
          return;
    }
    console.log(enteredFirstName, enteredScdName, enteredEmail)
    firstNameReset();
    scdNameReset();
    emailReset();
  };

  const firstNameStyle = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

    const scdNameStyle = scdNameHasError
    ? 'form-control invalid'
    : 'form-control';

    const emailNameStyle = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={onSubmit}>
      <div className='control-group'>
        <div className={firstNameStyle}>
          <label htmlFor='first-name'>First Name</label>
          <input 
            type='text' 
            id='first-name' 
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}/>
        </div>
        {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        <div className={scdNameStyle}>
          <label htmlFor='last-name'>Last Name</label>
          <input 
            type='text' 
            id='last-name' 
            value={enteredScdName}
            onChange={scdNameChangeHandler}
            onBlur={scdNameBlurHandler}/>
        </div>
        {scdNameHasError && <p className="error-text">Please enter a last name.</p>}
      </div>
      <div className={emailNameStyle}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='email' 
          id='email' 
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}/>
      </div>
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      <div className='form-actions'>
        <button formValid={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
