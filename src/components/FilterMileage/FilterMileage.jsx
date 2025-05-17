import { useEffect, useRef, useState } from 'react';
import style from '../FilterBrand/FilterBrand.module.css';
import Icons from '../../../public/icons.svg';

const FilterPrice = ({ value = null, onPriceChange }) => {
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
  const handleSelect = value => {
    setSelectedValue(value);
    onPriceChange(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const prices = ['30', '40', '50', '70', '80'];

  return (
    <div className={style.customSelect} ref={dropdownRef}>
      <label className={style.label}>Price/ 1 hour</label>
      <div
        className={`${style.selectHeader} ${isOpen ? style.selectHeaderActive : ''}`}
        onClick={toggleDropdown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedValue === null ? 'Choose a price' : selectedValue === '' ? 'All cars' : selectedValue}{' '}
        <span className={`${style.arrow} ${isOpen ? style.arrowUp : ''}`}>
          <svg width="16" height="16">
            <use href={`${Icons}#icon-chevron-down`} />
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
            All cars
          </div>
          {prices.map(price => (
            <div
              key={price}
              className={`${style.option} ${selectedValue === price ? style.selected : ''}`}
              onClick={() => handleSelect(price)}
              role="option"
              aria-selected={selectedValue === price}
              tabIndex={-1}
            >
              ${price}
            </div>
          ))}
        </div>
      )}
      <div className={style.selectUnderline}></div>
    </div>
  );
};

export default FilterPrice;
