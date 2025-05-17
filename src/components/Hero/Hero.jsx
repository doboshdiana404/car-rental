import { useNavigate } from 'react-router-dom';
import s from './Hero.module.css';
import { useState } from 'react';
const Hero = () => {
  const navigate = useNavigate();
  const [slideUp, setSlideUp] = useState(false);

  const handleClick = () => {
    setSlideUp(true);

    setTimeout(() => {
      navigate('/catalog');
    }, 600);
  };

  return (
    <section className={`${s.hero} ${slideUp ? s.slideUp : ''}`}>
      <div>
        <h1 className={s.heroTitle}>Find your perfect rental car</h1>
        <p className={s.heroDescription}>Reliable and budget-friendly rentals for any journey</p>
        <button onClick={handleClick} className={s.heroBtn}>
          View Catalog
        </button>
      </div>
    </section>
  );
};

export default Hero;
