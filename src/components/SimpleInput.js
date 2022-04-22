import { useEffect, useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes("@"));
  
  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault(); // 브라우저에서 아무것도 하지 않도록 명령
    
    // nameBlurHandler(true);
    // emailBlurHandler(true);

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputStyles = nameInputHasError
    ? 'form-control invalid' 
    : 'form-control';

    const emailInputStyles = emailInputHasError
    ? 'form-control invalid' 
    : 'form-control';

  return (
      <form onSubmit={formSubmissionHandler}>
          <div className={nameInputStyles}>
              <label htmlFor="name">Your Name</label>
              <input
                  type="text"
                  id="name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
              />
              {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
          </div>
          <div className={emailInputStyles}>
              <label htmlFor="email">Your Email</label>
              <input
                  type="email"
                  id="email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
              />
              {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
          </div>
          <div className="form-actions">
              <button disabled={!formIsValid}>Submit</button>
          </div>
      </form>
  );
};

export default SimpleInput;


// 왜 form태그는 클릭 이벤트 없는 button으로 작동이 가능할까? 

// blur는 input 요소가 포커스를 잃는다는 의미

