import React, { Component } from 'react';
import axios from 'axios';

class UploadImage extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
            //selectedFile: URL.createObjectURL(event.target.files[0])
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('myimage', this.state.selectedFile, this.state.selectedFile.name);

        axios.post('http://localhost:5000/upload', fd, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + "%");
            }
        })
            .then(res => {
                console.log(res.data);
            })

        this.setState = {
            selectedFile: null
        }
        this.props.history.push('/about');

    }
    render() {
        return (
            //     <div className="App">
            //     <div className="container">
            //     <p>Please upload your file/image</p>
            //     <div className="row">
            //       <div className="col-md-4">
            //     <input type="file" onChange={this.fileSelectedHandler} />
            //     </div>
            //     <div className="row">
            //     <div className="col-md-4">
            //     <button onClick={this.fileUploadHandler}> Upload</button>
            //     </div>
            //     </div>
            //      </div>
            //      </div>
            //    </div>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Upload file/image</h5>
                    <div className="card-body">
                        <h5 className="card-title">Please upload your file/image</h5>
                        <div className="row">
                            <div className="col-md-4">
                                <input type="file" onChange={this.fileSelectedHandler} />
                            </div>
                            <div className="row">
                                <div className="col-md-7">
                                    <button onClick={this.fileUploadHandler}> Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadImage;