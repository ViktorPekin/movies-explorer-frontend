 import { useCallback, useState } from "react";
 import emailValidator from 'email-validator';

 export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event, userInfo) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    if (name === 'email') {
      setIsValid(emailValidator.validate(value));
      if (!emailValidator.validate(value)) {
        setErrors({...errors, [name]: "Неправельная почта" });
      }
    }
    if (userInfo) {
      if (userInfo.name === value) {
        setIsValid(false);
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
