import s from './FilterMileage.module.css';

const FilterMileage = ({ draftMileageFrom, draftMileageTo, setDraftMileageFrom, setDraftMileageTo }) => {
  return (
    <label className={s.mileageRangeLabel}>
      <span>Mileage range (km)</span>
      <div className={s.mileageInputGroup}>
        <div className={s.inputWrapper}>
          {draftMileageFrom && <span className={s.inputPrefix}>From</span>}
          <input type="number" value={draftMileageFrom} onChange={e => setDraftMileageFrom(e.target.value)} className={s.inputLeft} placeholder="From" />
        </div>

        <div className={s.divider} />

        <div className={s.inputWrapper}>
          {draftMileageTo && <span className={s.inputPrefix}>To</span>}
          <input type="number" value={draftMileageTo} onChange={e => setDraftMileageTo(e.target.value)} className={s.inputRight} placeholder="To" />
        </div>
      </div>
    </label>
  );
};

export default FilterMileage;
