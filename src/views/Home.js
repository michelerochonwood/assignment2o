import React from 'react';
import MyCarousel from '../components/Carousel'; 
import Accordion from '../components/Accordion';

const Home = () => {
  return (
    <div className="centered-text">
      <MyCarousel />
      <div>
        <h2>Career Objectives</h2>
        <h3>To find a full-time, remote or hybrid position with a publishing, media, or print and web design organization. Ideally this would be a creative direction or managing editor position with a healthy and uplifting culture of inclusivity and diversity.</h3>
      </div>
      <Accordion />
    </div>
  );
};

export default Home;