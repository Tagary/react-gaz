import React, { FC } from 'react';
import axios from '../../axios';
import { IVolume } from '../../models/IVolume';


interface VolumeProps {
    setOpen: (value: boolean ) => void;
  }

const Volume:FC<VolumeProps> = ({ setOpen}) => {
    const [data, setData] = React.useState<IVolume[]>([]);
    const [volume, setVolume] = React.useState<number>(0);
    const [volumeimg, setVolumeImg] = React.useState<string>('2k');

    const handleClickVolume = (index: number) => {
        switch (index) {
          case 0:
            setVolumeImg('2k')
            break;
        
          case 1:
            setVolumeImg('6k')
            break;
        
          case 2:
            setVolumeImg('10k')
            break;
        
          case 3:
            setVolumeImg('40k')
            break;
        
          default:
            break;
        }
        setVolume(index)
      }
    
      const featchData = async () => {
        try {
          const response = await axios.get('/volumeGaz')
          setData(response.data)
        } catch (error) {
          console.log(error); 
        }
      }
    
      React.useEffect(() => {
        featchData();
      },[])


    return (
        <section className="choicevolume">
        <div className="choicevolume__container">
          <div className="choicevolume__article">
            <h2 className="choicevolume__article--blue">Выберите свой объём Газовоза</h2>
          </div>
          <div className="choicevolum__choice">
              {
                data?.map((item, index) =>             <button onClick={() => handleClickVolume(index)} key={item.id} className={`choicevolume__button ${index == volume ? 'choicevolume__button--active' : '' }`}>
                {item.name} <br />
                {item.litrs} л.
              </button>)
              }
            
          </div>
          <div className="choicevolume__img">
            <img src={`assets/images/choicevolume/${volumeimg}.png`} alt="" />

          </div>
          <div className="choicevolume__button--order">
            <button className="button__order" onClick={() => setOpen(true)}>Заказать газ</button>
          </div>
        </div>
      </section>
    );
};

export default Volume;