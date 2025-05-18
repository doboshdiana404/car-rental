import { useEffect } from 'react';
import LeftSideDetails from '../../components/LeftSideDetails/LeftSideDetails';
import RightSideDetails from '../../components/RightSideDetails/RightSideDetails';
import { fetchCarById } from '../../redux/cars/operations';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import s from './CarDetailsPage.module.css';
import { selectSelectedCar } from '../../redux/cars/selectors';

const CarDetailsPage = () => {
  const { id } = useParams();
  const car = useSelector(selectSelectedCar);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      {car ? (
        <div className={`container ${s.mainDetailsPageWrap}`}>
          <div className={s.detailsPageWrap}>
            <LeftSideDetails />
            <RightSideDetails />
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CarDetailsPage;
