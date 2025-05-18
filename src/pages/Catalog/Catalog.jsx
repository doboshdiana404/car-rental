import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { resetCars, setBrand, setMaxPrice } from '../../redux/cars/slice';
import { selectAllCars, selectLoading, selectTotalPages } from '../../redux/cars/selectors';
import CarSearchPanel from '../../components/CarSearchPanel/CarSearchPanel';
import CatalogList from '../../components/CatalogList/CatalogList';
import LoadMore from '../../components/LoadMore/LoadMore';
import { fetchBrands } from '../../redux/brands/operations';
import s from './Catalog.module.css';
const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const [draftBrand, setDraftBrand] = useState(null);
  const [draftPrice, setDraftPrice] = useState(null);
  const [draftMileageFrom, setDraftMileageFrom] = useState('');
  const [draftMileageTo, setDraftMileageTo] = useState('');

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(resetCars());
    dispatch(fetchCars({ page: 1 }));
  }, [dispatch]);
  const handleSearch = () => {
    dispatch(setBrand(draftBrand));
    dispatch(setMaxPrice(draftPrice));
    dispatch(resetCars());
    dispatch(
      fetchCars({
        page: 1,
        brand: draftBrand,
        maxPrice: draftPrice,
        minMileage: draftMileageFrom,
        maxMileage: draftMileageTo,
      })
    );
  };

  const handleBrandChange = setDraftBrand;
  const handlePriceChange = setDraftPrice;
  const isEmpty = !loading && cars.length === 0;
  const showLoadMore = cars.length > 0 && !loading && Math.ceil(cars.length / 12) < totalPages;
  const Loader = () => {
    return (
      <div className={s.loaderWrapper}>
        <div className={s.loader}></div>
      </div>
    );
  };

  return (
    <div className={`container ${s.catalogPage}`}>
      <CarSearchPanel
        selectedBrand={draftBrand}
        selectedPrice={draftPrice}
        onBrandChange={handleBrandChange}
        onPriceChange={handlePriceChange}
        onSearch={handleSearch}
        setDraftMileageTo={setDraftMileageTo}
        setDraftMileageFrom={setDraftMileageFrom}
        draftMileageFrom={draftMileageFrom}
        draftMileageTo={draftMileageTo}
      />
      {loading ? (
        <Loader />
      ) : isEmpty ? (
        <p style={{ fontSize: '18px', marginTop: '20px' }}>No cars found with selected filters.</p>
      ) : (
        <>
          <CatalogList />
          {showLoadMore && <LoadMore />}
        </>
      )}
    </div>
  );
};

export default Catalog;
