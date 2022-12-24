import React, { FC } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean,
  setModal: (value: boolean ) => void;
}

const ModalComponents:FC<ModalProps> = ({open, setModal}) => {
  const Ref = React.useRef() as React.MutableRefObject<HTMLDivElement>
  return (
    <div ref={Ref} className='overlay' onClick={(e) => {if(e.target === Ref.current) {
      setModal(false)
    }}}>
          <div className="modal__container">
      <div className={styles.modal}>
        <div className={styles.modal__title}>
          <h2>
            Доставим газ <br /> за 4 часа
          </h2>
          <div className={styles.modal__cross} onClick={() => setModal(false)}>
            <img src="assets/svg/close.svg" alt="" />
          </div>
        </div>
        <div>
          <form className={styles.modal__form} action="">
            <input required placeholder="Имя" type="text" />
            <input required placeholder="Телефон" type="tel" />
          </form>
          <div>
            <button className={styles.modal__button} >Заказать доставку газа</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalComponents;
