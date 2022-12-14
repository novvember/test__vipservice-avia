import './Form.css';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import FormValues from '../../types/FormValues';

function Form({ onSubmit }: { onSubmit: (values: FormValues) => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState(loadSavedValues());
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function loadSavedValues(): FormValues {
    const savedValues = localStorage.getItem('formValues');
    if (savedValues) {
      return JSON.parse(savedValues);
    }
    return {
      from: '',
      to: '',
      'date-to': '',
      'date-back': '',
    };
  }

  useEffect(() => {
    localStorage.setItem('formValues', JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    if (formRef.current !== null) {
      setIsValid(formRef.current.checkValidity());
    }
  }, [values]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target;
    const name = input.name;
    const value = input.value;
    setValues((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    await onSubmit(values);
    setIsLoading(false);
  }

  return (
    <form
      className={classNames('form', { form_loading: isLoading })}
      onSubmit={handleSubmit}
      noValidate
      ref={formRef}
    >
      <div className="form__inputs">
        <label className="form__input-container form__input-container_type_from">
          <span className="form__input-label">Откуда</span>
          <input
            type="text"
            name="from"
            className="form__input"
            placeholder="Город вылета"
            onChange={handleChange}
            value={values.from}
            required
          />
        </label>

        <label className="form__input-container form__input-container_type_to">
          <span className="form__input-label">Куда</span>
          <input
            type="text"
            name="to"
            className="form__input"
            placeholder="Город прилёта"
            onChange={handleChange}
            value={values.to}
            required
          />
        </label>

        <label className="form__input-container form__input-container_type_date-to">
          <span className="form__input-label">Туда</span>
          <input
            type="date"
            name="date-to"
            className="form__input form__input_type_date"
            onChange={handleChange}
            value={values['date-to']}
            required
            placeholder="дд.мм.гггг"
          />
        </label>

        <label className="form__input-container form__input-container_type_date-back">
          <span className="form__input-label">Обратно</span>
          <input
            type="date"
            name="date-back"
            className="form__input form__input_type_date"
            onChange={handleChange}
            value={values['date-back']}
          />
        </label>
      </div>
      <button className="form__submit-button" type="submit" disabled={!isValid}>
        Найти билеты
      </button>
    </form>
  );
}

export default Form;
