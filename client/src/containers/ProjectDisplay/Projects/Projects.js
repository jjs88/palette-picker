import React from 'react';
import Project from '../../../components/Project/Project';
import { connect } from 'react-redux';

const projects = (props) => {


  const renderProjects = () => {
    return props.projects.map(project => {
      return <Project key={project._id} project={project}/>
    })
  }

  return (
    <div className="Projects">
      {renderProjects()}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(projects);