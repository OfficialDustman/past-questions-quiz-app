// StartMenu.jsx
import React from 'react';

const StartMenu = ({ subjects, onSelectSubject }) => {
  console.log(subjects)

  return (
    <div className="start-menu visible">
      <div className="left-content">
        <h1>Welcome to <span className="bolded">Past Questions Quiz App!</span></h1>
        <p>Pick a subject to get started.</p>
      </div>

      <div className="choices">
        {subjects.map((subject) => (
          <button 
            key={subject.title} 
            id={subject.title} 
            className="quiz-type"
            onClick={() => onSelectSubject(subject.title)}>
            <div className="button-icon-container">
              <img src={subject.icon.asset.url} alt={`${subject.title} icon`} />
            </div>
            {subject.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartMenu;
