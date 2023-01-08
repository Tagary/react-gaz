import React, { FC } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  setModal: (value: boolean) => void;
  thanks: boolean;
  setThanks: (value: boolean) => void;
}

interface IFormSubmit {
  name: string;
  tel: number;
}
const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[-a-zA-Z\u0410-\u044F`]+$/, 'Писать имя только буквами')
      .required('Укажите Имя'),
    tel: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'Писать только цифры')
      .test(
        'len',
        'Ввведите телефон в формате 9*********',
        (val) => val!.length >= 10 && val!.length <= 10,
      ),
  })
  .required();

const ModalComponents: FC<ModalProps> = ({ open, setModal, thanks, setThanks }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormSubmit>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data: IFormSubmit) => {
    console.log(data);
    setThanks(true);
  };

  const Ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  return (
    <div
      ref={Ref}
      className="overlay"
      onClick={(e) => {
        if (e.target === Ref.current) {
          setModal(false);
        }
      }}>
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
            <form className={styles.modal__form} onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                placeholder="Имя"
                type="text"
                {...register('name', { required: 'Укажите Имя', maxLength: 100 })}
              />
              {errors.name && <p className={styles.modal__errors}>{errors.name?.message}</p>}
              <input
                required
                placeholder="Телефон"
                type="tel"
                {...register('tel', {
                  required: 'Укажите телефон',
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              {errors.tel && <p className={styles.modal__errors}>{errors.tel?.message}</p>}
              <div>
                <button type="submit" disabled={!isValid} className={styles.modal__button}>
                  {!isValid ? 'Правильно напишите данные' : 'Заказать доставку газа'}
                </button>
              </div>
            </form>
          </div>
          <div className={styles.modal__information}>
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с
            условиями политики конфиденциальности
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponents;
