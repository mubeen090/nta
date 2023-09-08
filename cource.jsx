// src/components/CourseCard.js
import React, { useState } from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <button onClick={togglePopup}>Learn More</button>
      {isOpen && (
        <div className="popup">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
