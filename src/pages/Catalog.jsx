import { useDispatch } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';
import { useEffect } from 'react';
import { fetchCars } from '../redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div className="container">
      <CatalogList />
    </div>
  );
};

export default Catalog;
