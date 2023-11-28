import React, { useEffect, useState } from 'react';

const AnimatedProgress = ({ level }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    // Define the progress values based on the provided level
    const progressValues = {
      Beginner: 25,
      Intermediate: 50,
      Advanced: 75,
      Expert: 100,
    };

    // Set the width based on the provided level
    setProgressWidth(progressValues[level]);
  }, [level]);

  return (
    <div className={`animated-progress progress-${level.toLowerCase()}`}>
      <span style={{ width: `${progressWidth}%` }} data-progress={level}>
        {level}
      </span>
    </div>
  );
};

export default AnimatedProgress;
