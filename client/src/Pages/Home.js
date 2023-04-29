import React from 'react';
import '../Style/Home.scss';
import CardCountries from '../Components/CardCountries';
import Hero from '../Components/Hero';

const Home = () => {
  return (
    <div className='home'>
      <Hero
        background={`${process.env.PUBLIC_URL}/assets/uluwatu/0U4A4875.JPG`}
        title={"mon p'tit surf trip"}
      />
      <section className='countries'>
        <CardCountries />
      </section>
    </div>
  );
};

export default Home;
