import { useNavigate } from 'react-router-dom';
import s from './CatalogItem.module.css';
const CatalogItem = ({ car }) => {
  const address = car.address.split(', ');
  const city = address[1];
  const country = address[2];
  const navigate = useNavigate();
  const formatNumber = number => number.toLocaleString('en-US').replace(/,/g, ' ');
  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <>
      <img src={car.img} alt={car.description} width={276} height={268} className={s.imgCar} />
      <div className={s.namePriceWrap}>
        <h3 className={s.carTitle}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h3>
        <p>${car.rentalPrice}</p>
      </div>
      <p className={s.descriptionCar}>
        <span>{city}</span>
        <span>{country}</span>
        <span>{car.rentalCompany}</span>
        <br />
        <span>{car.type}</span>
        <span>{formatNumber(car.mileage)} km</span>
      </p>
      <button className={s.carInfoBtn} onClick={handleClick}>
        Read more
      </button>
    </>
  );
};

export default CatalogItem;
