import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <section className="thanks__page">
      <header className="container">
        <div className="header__logo">
          <div className="left__logo">
            <img src="assets/images/Logo.png" alt="" />
          </div>
          <div className="right__logo">
            <a href="" className="tel">
              +7 926 330-68-34
            </a>
            <a href="" className="ask">
              Срочный вопрос
            </a>
          </div>
        </div>
      </header>
      <div className="container thanks__maininfo">
        <div className="thanks__article">Спасибо за обращение</div>
        <div className="thanks__info"> наш специалист свяжется с вами в ближайшее время</div>
        <div className="container__button">
          <Link to={`/`}>
            <button className="button__order">Вернуться на сайт</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
