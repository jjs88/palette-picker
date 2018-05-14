import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Picker from './Picker/Picker';
import ProjectDisplay from './ProjectDisplay/ProjectDisplay';

class App extends Component {


  render() {
    return (
      <Layout>
        <h1>Palette Picker</h1>
        <Picker />
        <ProjectDisplay />
      </Layout>
    );
  }
}

export default App;
