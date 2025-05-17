import { useEffect } from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="homePage">
      <Hero />
    </div>
  );
};

export default Home;
