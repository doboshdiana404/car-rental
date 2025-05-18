import FilterBrand from '../FilterBrand/FilterBrand';
import FilterMileage from '../FilterMileage/FilterMileage';
import FilterPrice from '../FilterPrice/FilterPrice';
import s from './CarSearchPanel.module.css';
const CarSearchPanel = ({ selectedBrand, onBrandChange, selectedPrice, onPriceChange, onSearch, setDraftMileageTo, setDraftMileageFrom, draftMileageFrom, draftMileageTo }) => {
  return (
    <div className={s.searchPanel}>
      <FilterBrand value={selectedBrand} onBrandChange={onBrandChange} />
      <FilterPrice value={selectedPrice} onPriceChange={onPriceChange} />
      <FilterMileage setDraftMileageTo={setDraftMileageTo} setDraftMileageFrom={setDraftMileageFrom} draftMileageFrom={draftMileageFrom} draftMileageTo={draftMileageTo} />
      <button className={s.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default CarSearchPanel;
