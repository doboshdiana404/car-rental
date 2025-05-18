import { selectError, selectLoading, selectSelectedCar } from '../../redux/cars/selectors';
import Icons from '../../../public/icons.svg';
import { useSelector } from 'react-redux';
import s from './RightSideDetails.module.css';

const RightSideDetails = () => {
  const car = useSelector(selectSelectedCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const formatNumber = number => number.toLocaleString('en-US').replace(/,/g, ' ');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const address = car.address.split(', ');

  return (
    <div className={s.rightMoreInfoContainer}>
      <h3 className={s.nameCar}>
        {car.brand} {car.model}, {car.year}
        <span>Id: {car.id}</span>
      </h3>
      <div className={s.cityMileageWrap}>
        <p className={s.itemWrap}>
          <svg width="16" height="16">
            <use href={`${Icons}#icon-Location`}></use>
          </svg>
          {address[1]}, {address[2]}
        </p>
        <p>Mileage: {formatNumber(car.mileage)} km</p>
      </div>
      <p className={s.rentalPrice}>${car.rentalPrice}</p>

      <p className={s.infoDescription}>{car.description}</p>
      <div className={s.listWrap}>
        <h4 className={s.infoSubTitle}>Rental Conditions: </h4>
        <ul className={s.infoList}>
          <li className={s.itemWrap}>
            {' '}
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.rentalConditions[0]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.rentalConditions[2]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.rentalConditions[1]}
          </li>
        </ul>
      </div>
      <div className={s.listWrap}>
        <h4 className={s.infoSubTitle}>Car Specifications: </h4>
        <ul className={s.infoList}>
          <li className={s.itemWrap}>
            {' '}
            <svg width="16" height="16">
              <use href={`${Icons}#icon-calendar`}></use>
            </svg>
            Year: {car.year}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-car`}></use>
            </svg>
            Type: {car.type}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            Fuel Consumption: {car.fuelConsumption}{' '}
          </li>
          <li className={s.itemWrap}>
            {' '}
            <svg width="16" height="16">
              <use href={`${Icons}#icon-gear`}></use>
            </svg>
            Engine Size: {car.engineSize}
          </li>
        </ul>
      </div>
      <div>
        <h4 className={s.infoSubTitle}>Accessories and functionalities: </h4>
        <ul className={s.infoList}>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.accessories[0]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.accessories[1]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.functionalities[1]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.functionalities[0]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.functionalities[2]}
          </li>
          <li className={s.itemWrap}>
            <svg width="16" height="16">
              <use href={`${Icons}#icon-check-circle`}></use>
            </svg>
            {car.accessories[2]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideDetails;
