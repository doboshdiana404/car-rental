import { useDispatch, useSelector } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';
import { useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';
import LoadMore from '../components/LoadMore/LoadMore';
import { selectAllCars } from '../redux/cars/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCars(1));
    }
  }, [dispatch, cars.length]);
  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <CatalogList />
      <LoadMore />
    </div>
  );
};

export default Catalog;
