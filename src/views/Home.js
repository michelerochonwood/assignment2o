import React from 'react';
import MyCarousel from '../components/Carousel'; 
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <div className="centered-text">
      <MyCarousel />
      <div>
        <h3>Career Objectives</h3>
        <p className="plain">To find a full-time, remote or hybrid position with a publishing, media, or print and web design organization. Ideally this would be a creative direction or managing editor position with a healthy and uplifting culture of inclusivity and diversity.</p>
      </div>
      <Accordion />
    </div>
  );
};

export default Home;