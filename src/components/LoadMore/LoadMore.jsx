import { useDispatch, useSelector } from 'react-redux';
import s from './LoadMore.module.css';
import { selectLoading, selectPage, selectTotalPages } from '../../redux/cars/selectors';
import { fetchCars } from '../../redux/cars/operations';

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectLoading);
  const brand = useSelector(state => state.cars.filters.brand);
  const maxPrice = useSelector(state => state.cars.filters.maxPrice);
  const handleClick = () => {
    dispatch(fetchCars({ page: page + 1, brand, maxPrice }));
  };

  if (page >= totalPages) return null;

  return (
    <div className={s.loadMoreWrap}>
      <button onClick={handleClick} disabled={loading} className={s.loadMoreBtn}>
        {loading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
};

export default LoadMore;
