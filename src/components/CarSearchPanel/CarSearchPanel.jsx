import FilterBrand from '../FilterBrand/FilterBrand';
import FilterPrice from '../FilterPrice/FilterPrice';
import s from './CarSearchPanel.module.css';
const CarSearchPanel = ({ onBrandChange, onPriceChange }) => {
  return (
    <div className={s.searchPanel}>
      <FilterBrand onBrandChange={onBrandChange} />
      <FilterPrice onPriceChange={onPriceChange} />
    </div>
  );
};

export default CarSearchPanel;
