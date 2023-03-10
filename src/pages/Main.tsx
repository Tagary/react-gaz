import React from 'react';
import { Navigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Reviews from '../components/Reviews';

import Volume from '../components/Volume';

const Main = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [thanks, setThanks] = React.useState<boolean>(false);
  console.log(thanks);

  if (thanks) {
    return <Navigate to="thanks" />;
  }

  return (
    <div>
      {open && <Modal open={open} setModal={setOpen} thanks={thanks} setThanks={setThanks} />}
      <section className="header__section">
        <header className="header__container">
          <div className="header__logo">
            <div className="left__logo">
              <img src="assets/images/Logo.png" alt="" />
              <div className="divider">|</div>
              <p>Расправь плечи в теплом доме</p>
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
          <div className="preview">
            <div>
              <div className="main__info">
                <div className="weather__time">
                  <div className="any__time">
                    <div className="img__time">
                      <img src="assets/svg/moon 1.svg" alt="" />
                      <img src="assets/svg/arrow 1.svg" alt="" />
                      <img src="assets/svg/sun 1.svg" alt="" />
                    </div>
                    <p>В любое время дня и ночи</p>
                  </div>
                  <div className="any__weather">
                    <div className="img__time">
                      <img src="assets/svg/cloudy 1.svg" alt="" />
                      <img src="assets/svg/arrow 1.svg" alt="" />
                      <img src="assets/svg/snowflake 1.svg" alt="" />
                    </div>
                    <p>Вне зависимости от погодных условий</p>
                  </div>
                </div>
                <h1 className="info__delivery">Доставим газ за 4 часа</h1>
                <div className="txt__anotherdots">в любую точку Москвы и Московской области</div>
                <div className="button__container">
                  <button className="button__order" onClick={() => setOpen(true)}>
                    Заказать доставку газа в газгольдер
                  </button>
                </div>
                <div>
                  <p className="text__information">Доставка газа всегда по актуальным ценам</p>
                </div>
              </div>
            </div>
            <div className="background__track">
              <img className="img__all" src="assets/images/firsttrack.png" alt="" />
            </div>
          </div>
          <div></div>
        </header>
      </section>
      <section className="price__section">
        <h2 className="main__infoprice">Стоимость газа в ваш газгольдер сегодня</h2>
        <div className="infoprice__row">
          <div className="infoprice__first">
            <p className="gaz">Пропан</p>
            <p className="gaz__price">от 25 рублей за литр</p>
            <p className="gaz__info">
              Физически испарение происходит до -40 градусов, что позволяет использовать его в наших
              с вами погодных условиях{' '}
            </p>
            <div className="button__mob">
              <button className="button__gaz" onClick={() => setOpen(true)}>
                Заказать
              </button>
            </div>
          </div>
          <div className="infoprice__second">
            <p className="perfect__ration">Идеальное соотношение</p>
            <div className="info__ration">
              <div className="reforger">
                <p className="ration__percent">80%</p>
                <p className="ration__gaz">Пропан</p>
              </div>

              <div>
                <p className="ration__percent">20%</p>
                <p className="ration__gaz">Бутан</p>
              </div>
            </div>
            <div className="track__balon">
              <img src="assets/images/proportions 1.png" alt="" />
            </div>
          </div>
          <div className="infoprice__third">
            <p className="gaz">Бутан</p>
            <p className="gaz__price">от 16 рублей за литр</p>
            <p className="gaz__info">
              Испарение Бутана происходит только до 0 градусов и годится для использования в тёплое
              время года{' '}
            </p>
            <div className="button__mob">
              <button className="button__gaz" onClick={() => setOpen(true)}>
                Заказать
              </button>
            </div>
          </div>
        </div>
        <div className="container arrow">
          <img className="animation__infinitydown" src="assets/svg/arrowdown.svg" alt="" />
        </div>
      </section>
      <section className="new__benefits">
        <div className="main__benifits">
          <h2 className="benifits">Преимущества работы с нашей компанией</h2>
          <div className="items__benefits">
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/energycapacity.png" alt="" />
              </div>
              <h3 className="benifits__article">Экономия на хранилище </h3>
              <p className="benifits__info">за счёт собственных цистерн на нашей базе</p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/track.png" alt="" />
              </div>
              <h3 className="benifits__article">Экономия на транспорте</h3>
              <p className="benifits__info">более 10 собственный газовозов</p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/calc.png" alt="" />
              </div>
              <h3 className="benifits__article">Поставки напрямую от производителей</h3>
              <p className="benifits__info">
                нет наценки на стоимость газа как у перекупщиков и небольших частных компаний
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/baloon.png" alt="" />
              </div>
              <h3 className="benifits__article">Любые объёмы поставки качественного газа</h3>
              <p className="benifits__info">
                вы получаете объем от 1 тонны до 20 тонн, с сертификатом качества газа
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/cards.png" alt="" />
              </div>
              <h3 className="benifits__article">Оплата удобным для вас способом</h3>
              <p className="benifits__info">
                все газовозы оснащены терминалами для оплаты вашего заказа
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/gazoil.png" alt="" />
              </div>
              <h3 className="benifits__article">Чистый газ без примесей</h3>
              <p className="benifits__info">
                нет наценки на стоимость газа как у перекупщиков и небольших частных компаний
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/50m.png" alt="" />
              </div>
              <h3 className="benifits__article">Длина заправочных рукавов — 50 метров</h3>
              <p className="benifits__info">
                не требуется подъезд автомобиля вплотную к резервуару
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/timer.png" alt="" />
              </div>
              <h3 className="benifits__article">Доставка сжиженного газа в формате 24/7</h3>
              <p className="benifits__info">
                привезем газ в удобное для вас время или же по графику
              </p>
            </div>
            <div className="item__benefits">
              <div className="img__benefits">
                <img src="assets/images/list/sert.png" alt="" />
              </div>
              <h3 className="benifits__article">Аттестованный персонал</h3>
              <p className="benifits__info">
                квалифицированные сотрудники проведут полную консультацию и дадут рекомендации, если
                такие нужны будут
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="guarantee">
        <div className="gurantee__container">
          <div className="gurantee__left">
            <img src="assets/images/guarantee.png" alt="" />
          </div>
          <div className="gurantee__right">
            <h3 className="guarantee__text">
              Благодаря нашему собственному автопарку мы можем давать гарантию, что доставим{' '}
              <span className="gurantee__blue">за 4 часа</span>
            </h3>
            <div className="guarantee__button">
              <button className="guarantee__button-blue">
                Это сильное конкурентное преимущество, которым мы дорожим
              </button>
            </div>
          </div>
        </div>
      </section>
      <Volume setOpen={setOpen} />
      <Reviews />
      <section className="accordion">
        <div className="accordion__container">
          <h2 className="accordion__title">Ответы на часто задаваемые вопросы</h2>
          <details className="accordion__details">
            <summary className="accordion__article">Есть ли у вас инженеры в компании?</summary>
            <p className="accordion__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__article">Делаете ли вы отчистку газгольдера?</summary>
            <p className="accordion__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__article">
              А вы не испортите газон у меня и соседей?
            </summary>
            <p className="accordion__text">
              За счёт длинны в 50 м. делаем заправку не заезжая и не портим газон, а так же не
              мешаем соседям
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__article">
              Вы предоставляете документы для субсидий?
            </summary>
            <p className="accordion__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
          <details className="accordion__details">
            <summary className="accordion__article">
              Смогу ли я заказать во время праздников?
            </summary>
            <p className="accordion__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </details>
        </div>
      </section>
      <section className="askcompany">
        <div className="askcompany_container">
          <div className="askcompany__first">
            <div className="askcompany__form">
              <h2 className="askcompany__title">
                Не нашли ответа на свой вопрос задайте их нашему специалисту
              </h2>
              <div>
                <form className="ask__form" action="">
                  <input className="input__standart" placeholder="Имя" type="text" />
                  <input className="input__standart" placeholder="Телефон" type="tel" />
                  <textarea
                    className="input__ask"
                    placeholder="Ваш вопрос"
                    name=""
                    id=""
                    cols={30}
                    rows={10}></textarea>
                </form>
              </div>
              <div className="ask__buttoncontainer">
                <button className="button__ask">Задать вопрос</button>
              </div>
            </div>
            <div className="askcompany__right">
              <div className="askcompany__employee">
                <img src="assets/images/askcompany/romantik.png" alt="" />
              </div>
              <div className="cutaway">
                <h3 className="cutaway__username">Роман Ш.</h3>
                <p className="cutaway__prof">Старший менеджер</p>
              </div>
            </div>
          </div>
          <div className="askcompany__second">
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners1.png"
                alt=""
              />
            </div>
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners2.png"
                alt=""
              />
            </div>
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners3.png"
                alt=""
              />
            </div>
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners4.png"
                alt=""
              />
            </div>
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners5.png"
                alt=""
              />
            </div>
            <div className="partners__company">
              <img
                className="img__partners"
                src="assets/images/askcompany/parners/patners6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer__container">
          <h2 className="footer__article">
            Закажи прямо сейчас и получи бесплатную установку телеметрии
          </h2>
          <div className="button__containerfooter">
            <button className="button__footer" onClick={() => setOpen(true)}>
              Заказать газ
            </button>
          </div>
          <div className="footer__card">
            <div className="footer__cardinfo">
              <div className="footer__visit">Посетите наш уютный офис</div>
              <div className="footer__visittext">
                где мы сможем вас полностью проконсультировать по всем вопросам
              </div>
              <div className="footer__office">
                <h4 className="footer__officearticle">Офис</h4>
                <p className="footer__officetext">Видное , Белокаменное шоссе, 20</p>
              </div>
              <div className="footer__tel">
                <h4 className="footer__telarticle">Телефон:</h4>
                <p className="footer__teltext">+7 926 330-68-34</p>
              </div>
            </div>
            <div className="footer__maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.9191071420144!2d37.725069432801234!3d55.71664313350506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab5181d35a46b%3A0xdc800980123c3a57!2z0KHQuNC90LDRgCDQntCe0J4!5e0!3m2!1sru!2sru!4v1671435474953!5m2!1sru!2sru"
                className="footer__googlemaps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="footer__policy">
            <div className="footer__policyarticle">Политика конфиденциальности</div>
            <div className="footer__policydata">Согласие на обработку персональных данных</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
