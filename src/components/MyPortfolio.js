import React from 'react';
import AnimatedProgress from '../Circle';  // Update the path to your AnimatedProgress component
const avatar = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/avatar.png';

const MyPortfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="skillbar">
        <div className="skillbar-title">
          <img
            src={avatar}
            alt="avatar"
            width="100"
            height="auto"
          />
          <p className="yellowheading">MICHELE ROCHON-WOOD</p>
          <p className="greyheading">Creative Professional</p>
        </div>
        <div className="skillbar-content">
          <p className="yellowheading">FRONT END DEVELOPMENT</p>
          <p className="greyheading">HTML<AnimatedProgress level="Advanced" /></p>
          <p className="greyheading">JavaScript<AnimatedProgress level="Intermediate" /></p>
          <p className="greyheading">CSS<AnimatedProgress level="Advanced" /></p>
          <p className="greyheading">PHP<AnimatedProgress level="Intermediate" /></p>
          <p className="greyheading">WordPress<AnimatedProgress level="Intermediate" /></p>
          <hr/>
        </div>

      </div>
      <div className="content">
        <h6>Stuff in the content</h6>
      </div>
    </div>
  );
};

export default MyPortfolio;