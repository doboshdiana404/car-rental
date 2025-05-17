import { useSelector } from 'react-redux';
import { selectBrands } from '../../redux/brands/selectors';
import style from './FilterBrand.module.css';
import { useEffect, useRef, useState } from 'react';
import Icons from '../../../public/icons.svg';

const FilterBrand = ({ value = null, onBrandChange }) => {
  const brands = useSelector(selectBrands);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  const handleSelect = option => {
    setSelectedValue(option);
    onBrandChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.customSelect} ref={dropdownRef}>
      <label className={style.label}>Car brand</label>
      <div
        className={`${style.selectHeader} ${isOpen ? style.selectHeaderActive : ''}`}
        onClick={toggleDropdown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue === null ? 'Choose a brand' : selectedValue === '' ? 'All brands' : selectedValue}{' '}
        <span className={`${style.arrow} ${isOpen ? style.arrowUp : ''}`}>
          <svg width="16" height="16">
            <use href={`${Icons}#icon-chevron-down`}></use>
          </svg>
        </span>
      </div>

      {isOpen && (
        <div className={style.optionsList} role="listbox">
          <div
            className={`${style.option} ${selectedValue === '' ? style.selected : ''}`}
            onClick={() => handleSelect('')}
            role="option"
            aria-selected={selectedValue === ''}
            tabIndex={-1}
          >
            All brands
          </div>
          {brands.map(brand => (
            <div
              key={brand}
              className={`${style.option} ${selectedValue === brand ? style.selected : ''}`}
              onClick={() => handleSelect(brand)}
              role="option"
              aria-selected={selectedValue === brand}
              tabIndex={-1}
            >
              {brand}
            </div>
          ))}
        </div>
      )}
      <div className={style.selectUnderline}></div>
    </div>
  );
};

export default FilterBrand;
