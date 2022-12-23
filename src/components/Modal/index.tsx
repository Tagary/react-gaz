import React from 'react';
import styles from './Modal.module.scss';

const ModalComponents = () => {
  return (
    <div className="modal__container">
      <div className={styles.modal}>
        <div className={styles.modal__title}>
          <h2>
            Доставим газ <br /> за 4 часа
          </h2>
          <div>
            <img src="assets/svg/close.svg" alt="" />
          </div>
        </div>
        <div>
          <form className={styles.modal__form} action="">
            <input placeholder="Имя" type="text" />
            <input placeholder="Телефон" type="tel" />
          </form>
          <div>
            <button className={styles.modal__button}>Заказать доставку газа</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponents;
