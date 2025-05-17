import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { resetCars, setBrand, setMaxPrice } from '../../redux/cars/slice';
import { selectAllCars, selectLoading } from '../../redux/cars/selectors';
import CarSearchPanel from '../../components/CarSearchPanel/CarSearchPanel';
import CatalogList from '../../components/CatalogList/CatalogList';
import LoadMore from '../../components/LoadMore/LoadMore';
import { fetchBrands } from '../../redux/brands/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectLoading);
  const selectedBrand = useSelector(state => state.cars.filters.brand);
  const maxPrice = useSelector(state => state.cars.filters.maxPrice);
  useEffect(() => {
    dispatch(resetCars());
    dispatch(fetchBrands());
    dispatch(fetchCars({ page: 1, brand: selectedBrand, maxPrice }));
  }, [dispatch, selectedBrand, maxPrice]);

  const handleBrandChange = value => {
    dispatch(setBrand(value));
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, brand: value, maxPrice }));
  };

  const handlePriceChange = value => {
    dispatch(setMaxPrice(value));
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1, brand: selectedBrand, maxPrice: value }));
  };
  const isEmpty = !loading && cars.length === 0;

  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <CarSearchPanel onBrandChange={handleBrandChange} onPriceChange={handlePriceChange} />
      {isEmpty ? (
        <p style={{ fontSize: '18px', marginTop: '20px' }}>No cars found with selected filters.</p>
      ) : (
        <>
          <CatalogList />
          <LoadMore />
        </>
      )}
    </div>
  );
};

export default Catalog;
