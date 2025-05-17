import FilterBrand from '../FilterBrand/FilterBrand';
import FilterPrice from '../FilterPrice/FilterPrice';
import s from './CarSearchPanel.module.css';
const CarSearchPanel = ({ selectedBrand, onBrandChange, selectedPrice, onPriceChange, onSearch }) => {
  return (
    <div className={s.searchPanel}>
      <FilterBrand value={selectedBrand} onBrandChange={onBrandChange} />
      <FilterPrice value={selectedPrice} onPriceChange={onPriceChange} />
      <button className={s.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default CarSearchPanel;
