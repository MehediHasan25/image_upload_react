import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import UploadImage from './Component/upload';

import about from './Component/about';

class App extends Component {

  // state = {
  //   selectedFile: null
  // }

  // fileSelectedHandler = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //     //selectedFile: URL.createObjectURL(event.target.files[0])
  //   })
  // }

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('myimage', this.state.selectedFile, this.state.selectedFile.name);
    
  //   axios.post('http://localhost:5000/upload', fd, {
  //     onUploadProgress: ProgressEvent => {
  //       console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + "%");
  //     }
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //     })
      
  //     this.setState={
  //       selectedFile:null
  //     }
      

  // }
  
  


  render() {
    return (
      <Router>
      <div className="App">
      <div className= "container">
      <Switch>
           <Route exact path="/upload" component={UploadImage}/>
           <Route exact path="/about" component={about}/>]
           </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;


