import './Form.css';
import { FormEvent, useState } from 'react';
import classNames from 'classnames';

function Form() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <form
      className={classNames('form', { form_loading: isLoading })}
      onSubmit={handleSubmit}
    >
      <div className="form__inputs">
        <label className="form__input-container form__input-container_type_from">
          <span className="form__input-label">Откуда</span>
          <input
            type="text"
            className="form__input"
            placeholder="Город вылета"
          />
        </label>

        <label className="form__input-container form__input-container_type_where">
          <span className="form__input-label">Куда</span>
          <input
            type="text"
            className="form__input"
            placeholder="Город прилёта"
          />
        </label>

        <label className="form__input-container form__input-container_type_date-from">
          <span className="form__input-label">Туда</span>
          <input type="date" className="form__input form__input_type_date" />
        </label>

        <label className="form__input-container form__input-container_type_date-where">
          <span className="form__input-label">Обратно</span>
          <input type="date" className="form__input form__input_type_date" />
        </label>
      </div>
      <button className="form__submit-button" type="submit">
        Найти билеты
      </button>
    </form>
  );
}

export default Form;
