import { useEffect } from 'react';
import LeftSideDetails from '../../components/LeftSideDetails/LeftSideDetails';
import RightSideDetails from '../../components/RightSideDetails/RightSideDetails';
import { fetchCarById } from '../../redux/cars/operations';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './CarDetailsPage.module.css';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchCarById(id));
    }
  }, [dispatch, id]);
  return (
    <div className={`container ${s.mainDetailsPageWrap}`}>
      <div className={s.detailsPageWrap}>
        <LeftSideDetails />
        <RightSideDetails />
      </div>
    </div>
  );
};

export default CarDetailsPage;
