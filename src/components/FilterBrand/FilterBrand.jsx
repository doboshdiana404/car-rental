import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/brands/selectors';
import s from './FilterBrand.module.css';

const FilterBrand = ({ onBrandChange }) => {
  const brands = useSelector(selectBrands);

  return (
    <div>
      <label htmlFor="brand-select" className={s.label}>
        Car brand
      </label>
      <select id="brand-select" onChange={e => onBrandChange(e.target.value)} className={s.selectBrand} defaultValue="">
        <option value="" disabled hidden className={s.defaultOption}>
          Choose a brand
        </option>
        <option value="all">All brands</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBrand;
