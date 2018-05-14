import React, { Component } from 'react';
import Button from '../ui/Button/Button';
import { addProject } from '../../store/actions/project';
import { connect } from 'react-redux';

class AddProjectForm extends Component {

  state = {
    name: null,
    error: null
  }

  renderError = () => {
    return (
      <div className="ProjectFormError">{this.state.error}</div>
    )
  }


  formSubmit = (e) => {
    e.preventDefault();
    if(!this.state.name) this.setState({error: 'please enter a project name'});
    this.props.addProject({name: this.state.name});
  }

  inputChange = (e) => {
    this.setState({name: e.target.value, error: null});
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} className="AddProjectForm">
        <div className="AddProjectFormItem">
          <label>Create a new project</label>
          <input className="AddProjectFormItem__input" type='text' placeholder="new project name" onChange={(e) => this.inputChange(e)}/>
          {this.renderError()}
        </div>
        <Button text="save project" type="submit"/>
      </form>
    )
  }
}

export default connect(null, { addProject })(AddProjectForm)