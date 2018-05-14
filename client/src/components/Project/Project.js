import React from 'react';
import Palette from './Palette/Palette';

const project = (props) => {

  const renderPalettes = () => {
    const { palettes, _id } = props.project;
    return palettes.map(palette => {
      return (
        <Palette key={palette._id} palette={palette} projectId={_id}/>
      )
    })
  }


  return (
    <div className="Project">
      <h3>{props.project.name}</h3>
      {renderPalettes()}
    </div>
  )
}

export default project;