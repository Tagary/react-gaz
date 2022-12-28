import React from 'react';
import axios from '../../axios';
import { IReviews } from '../../models/IReviews';

const Reviews = () => {
    const [data, setData] = React.useState<IReviews[]>()
    const [reviewsindex, setReviewsIndex] = React.useState<number>(0)
    const featchData = async () => {
        try {
          const response = await axios.get('/reviews')
          setData(response.data)
          
        } catch (error) {
          console.log(error); 
        }
      }



    const handlerClickArrow = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      
      if(reviewsindex > -1 && reviewsindex < (data!.length) && (event.target as Element).className === 'reviews__arrowright') {
        console.log(data?.length);
        
        if(reviewsindex >= (data!.length -1)) {
          setReviewsIndex(0)
          
        } else {
          setReviewsIndex(reviewsindex + 1)
        }
        
      }
      else {
        if(reviewsindex <= 0) {
          setReviewsIndex(data!.length - 1)
        } 
        else {
        setReviewsIndex(reviewsindex - 1)
        }
      }

    }


    React.useEffect(() => {
        featchData(); 
    }, [])

    return (
        <section className="reviews">
        <div className="reviews__container">
          <h2 className="reviews__ourclients">Отзывы наших клиентов</h2>

          <div className="reviews__info">
            <div className="reviews__item">
              <div>
                <img onClick={(e) => handlerClickArrow(e)} className="reviews__arrowleft" src="assets/svg/arrowreviews.svg" alt="" />
              </div>

              {data?.map((reviews ,index) => (<div key={reviews.id} className={`reviews__card ${index === reviewsindex ? '' : 'reviews__cardnone'}`}>
                <div className="reviews__img">
                  <img src={reviews.avatar} alt="" />
                </div>
                <div>
                  <div className="reviews__username">{reviews.name}</div>
                  <div className="reviews__city">{reviews.city}</div>
                  <div className="reviews__text">
                        {reviews.text}
                  </div>
                </div>
              </div>))}
              <div>
                <img onClick={(e) => handlerClickArrow(e)} className="reviews__arrowright" src="assets/svg/arrowreviews.svg" alt="" />
              </div>
            </div>
            <div className="reviews__dots">
            {data?.map((dots, index) =>(
                           
                           <div key={index} className={`dots ${index === reviewsindex ? 'dots__active' : ''} `}></div>


            ))}
                          </div>
          </div>
        </div>
      </section>
    );
};

export default Reviews;