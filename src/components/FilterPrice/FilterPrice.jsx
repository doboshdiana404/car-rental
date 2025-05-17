import s from './FilterPrice.module.css';

const FilterPrice = ({ onPriceChange }) => {
  return (
    <div>
      <label htmlFor="price-select" className={s.label}>
        Price/ 1 hour
      </label>
      <select id="price-select" onChange={e => onPriceChange(e.target.value)} className={s.selectPrice}>
        <option value="" className={s.defaultOption}>
          Choose max price
        </option>
        <option value="30">$30</option>
        <option value="40">$40</option>
        <option value="50">$50</option>
        <option value="70">$70</option>
        <option value="80">$80</option>
      </select>
    </div>
  );
};

export default FilterPrice;
