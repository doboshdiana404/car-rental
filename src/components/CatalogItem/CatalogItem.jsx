import { useNavigate } from 'react-router-dom';
import s from './CatalogItem.module.css';
import Icons from '../../../public/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/cars/selectors';
import { toggleFavorite } from '../../redux/cars/slice';
const CatalogItem = ({ car }) => {
  const address = car.address.split(', ');
  const dispatch = useDispatch();

  const city = address[1];
  const country = address[2];
  const navigate = useNavigate();
  const formatNumber = number => number.toLocaleString('en-US').replace(/,/g, ' ');
  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(car.id);
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(car.id));
  };

  return (
    <div className={s.item}>
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
      <button onClick={handleToggleFavorite} className="heart-btn">
        {isFavorite ? (
          <svg width="16" height="16" className={s.iconHeart}>
            <use href={`${Icons}#icon-heart-2`}></use>
          </svg>
        ) : (
          <svg width="16" height="16" className={s.iconHeart}>
            <use href={`${Icons}#icon-heart`}></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default CatalogItem;
