import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem/CatalogItem';
import { selectAllCars } from '../../redux/cars/selectors';
import s from './CatalogList.module.css';
const CatalogList = () => {
  const cars = useSelector(selectAllCars);

  return (
    <div>
      <ul className={s.carsList}>
        {cars.map(car => (
          <li key={car.id}>
            <CatalogItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
