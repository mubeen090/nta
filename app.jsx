// src/App.js
import React from 'react';
import './App.css';
import CourseList from './components/CourseList';
import courses from './data/courses';

function App() {
  return (
    <div className="App">
      <h1>Course List</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
