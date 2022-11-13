import './Form.css';

function Form() {
  return (
    <form className="form">
      <div className="form__inputs">
        <label className="form__input-container">
          <span className="form__input-label">Откуда</span>
          <input
            type="text"
            className="form__input"
            placeholder="Город вылета"
          />
        </label>

        <label className="form__input-container">
          <span className="form__input-label">Куда</span>
          <input
            type="text"
            className="form__input"
            placeholder="Город прилёта"
          />
        </label>

        <label className="form__input-container">
          <span className="form__input-label">Туда</span>
          <input
            type="date"
            className="form__input"
            placeholder="дд.мм.гг"
          />
        </label>

        <label className="form__input-container">
          <span className="form__input-label">Обратно</span>
          <input
            type="date"
            className="form__input"
            placeholder="дд.мм.гг"
          />
        </label>
      </div>
      <button className="form__submit-button" type="submit">
        Найти билеты
      </button>
    </form>
  );
}

export default Form;
