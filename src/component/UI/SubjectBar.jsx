// SubjectBar.jsx
import React from 'react';

const SubjectBar = ({ subject }) => {
  return (
    <div className="curr-subject" style={{ visibility: 'visible' }}>
      <div className="button-icon-container">
        <img src={subject.icon} alt="subject icon" />
      </div>
      <h2 className="subject-chosen">{subject.title}</h2>
    </div>
  );
};

export default SubjectBar;
