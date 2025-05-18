import { useSelector } from 'react-redux';
import { selectSelectedCar } from '../../redux/cars/selectors';
import s from './LeftSideDetails.module.css';
import Form from '../Form/Form';
const LeftSideDetails = () => {
  const car = useSelector(selectSelectedCar);

  return (
    <div>
      <img src={car.img} alt={car.description} width="640" height="512" className={s.detailImg} />
      <Form carId={car.id} />
    </div>
  );
};

export default LeftSideDetails;
