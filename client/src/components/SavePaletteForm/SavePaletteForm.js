import React, { Component } from 'react';
import Button from '../ui/Button/Button';
import { getProjects, addPalette } from '../../store/actions/project';
import { connect } from 'react-redux';

class savePaletteForm extends Component {

  state = {
    paletteName: null,
    projectId: null,
    error: null
  }

  componentDidMount() {
    //fetch folders data
    this.props.getProjects();
  }

  componentDidUpdate() {
    //if state already updated then just return
    if(this.state.projectId || this.props.projects.length === 0) return;
    //make the first project the selected one in state upon loading of app
      const projectId = this.props.projects[0]._id;
      this.setState({projectId});
  }

  renderError = () => {
    return <div className="SavePaletteError">{this.state.error}</div>
  }


  submitForm = (e) => {
    e.preventDefault();
    // get the project id, palette, and palette name
    if(!this.state.paletteName) return this.setState({error: 'must set a palette name'});
    var colors = this.props.palettes.map(item => item.color);
    var obj = {
      colors,
      name: this.state.paletteName,
      projectId: this.state.projectId
    }
    this.props.addPalette(obj);
  }

  projectSelection = (e) => this.setState({projectId: e.target.value});

  renderFolderOptions = () => {
    return this.props.projects.map( ({_id, name}) => {
      //set state of first option
      return (
        <option key={_id} value={_id}>{name}</option>
      )
    })
  }

  inputChange = (e) => {
    this.setState({paletteName: e.target.value, error: null});
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)} className="SavePaletteForm">
        <select onChange={(e) => this.projectSelection(e)}>
         {this.renderFolderOptions()}
        </select>
        <input type="text" name="paletteName" onChange={(e) => this.inputChange(e)}/>
        <Button text="save palette" type="submit"/>
        {this.renderError()}
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    palettes: state.palettes
  }
}

export default connect(mapStateToProps, { getProjects, addPalette })(savePaletteForm);