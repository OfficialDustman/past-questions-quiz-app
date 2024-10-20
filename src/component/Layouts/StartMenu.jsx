// StartMenu.jsx
import React from 'react';

const StartMenu = ({ subjects, onSelectSubject }) => {
  console.log(subjects)

  function getSanityImageUrl(ref) {
    // Extract the image ID and format (file extension) from the reference
    const [_, id, dimensions, format] = ref.match(/image-([a-zA-Z0-9]+)-([0-9x]+)-([a-z]+)/);
    
    const projectId = "04otdx22";
    const dataset = "production";
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${format}`;
  }

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
              <img src={getSanityImageUrl(subject.icon.asset._ref)} alt={`${subject.title} icon`} />
            </div>
            {subject.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartMenu;
