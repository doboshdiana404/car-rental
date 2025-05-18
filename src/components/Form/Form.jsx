import toast from 'react-hot-toast';
import styles from './Form.module.css';
import { useState } from 'react';
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.success('Rental request sent successfully!');
    setFormData({ name: '', email: '', date: '', comment: '' });
    setErrors({});
  };
  const [rentalDate, setRentalDate] = useState('');

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <h3 className={styles.formTitle}>Book your car now</h3>
        <p className={styles.formDescription}>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={styles.formInputWrap}>
        <label>
          <input
            placeholder="Name*"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>

        <label>
          <input
            placeholder="Email*"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.formInput} ${errors.email ? styles.errorInput : ''}`}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>

        <label>
          <input
            className={`${styles.formInput} ${!rentalDate ? styles.placeholder : ''}`}
            placeholder="Booking date"
            type="date"
            name="date"
            value={rentalDate}
            onChange={e => {
              setRentalDate(e.target.value);
            }}
          />
        </label>

        <label>
          <textarea className={styles.formTextarea} placeholder="Comment" name="comment" value={formData.comment} onChange={handleChange} />
        </label>
      </div>

      <div className={styles.btnWrapForm}>
        <button type="submit" className={styles.rentalBtn}>
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
