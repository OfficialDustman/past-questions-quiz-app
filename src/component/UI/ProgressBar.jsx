// ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar whole">
      <div className="progress-bar done" style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;

