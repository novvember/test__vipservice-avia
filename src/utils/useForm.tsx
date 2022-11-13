import React, { ChangeEvent } from 'react';

export default function useForm<T>(initialValues: T, initialIsValid = false) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(initialIsValid);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    setErrors((errors) => ({ ...errors, [name]: input.validationMessage }));
    setValues((values) => ({ ...values, [name]: value }));
    setIsValid(input.closest('form')!.checkValidity());
  }

  return [values, handleChange, errors, isValid];
}
