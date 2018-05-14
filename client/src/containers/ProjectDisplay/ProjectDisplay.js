import React from 'react';
import AddProjectForm from '../../components/AddProjectForm/AddProjectForm';
import Projects from './Projects/Projects';

const projectDisplay = (props) => {

  return (
    <div className="ProjectDisplay">
      <AddProjectForm />
      <Projects />
    </div>
  )
}

export default projectDisplay;