import React from 'react';
import api from '../api/api';
import b64toBlob from 'b64-to-blob';

export default class UploadImage extends React.Component {

    validFileTypes = new Set(['image/png', 'image/jpeg', 'image/gif', 'image/webp']);

    constructor (props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    handleFileSelect = (event) => {
        // Get the file from the upload event
        let file = event.target.files[0];
        let fileType = file.type;
        let input = event.target;
        // Check if the file type is valid
        if (this.validFileTypes.has(fileType)) {
            this.setState({ selectedFile: file });
        } else {
            // Reset file value
            input.value = "";
            // Display error message to the user if incorrect file type
            alert("Invalid file type. Please select a PNG, JPEG, GIF or WEBP image and try again.");
        }
    }

    handleUpload = () => {
        // Attach selected file to formData
        const formData = new FormData();
        formData.append('image', this.state.selectedFile);
        // API URL for uploading the image file
        api.post('/upload', formData).then(res => {
            // Retrieve the blob of the PNG from the server
            let blob = b64toBlob(res.b64Data, res.contentType);
            // Get the window URl or webkit URL as a base
            let urlCreator = window.URL || window.webkitURL;
            // Asign the blob to the URL
            let imageURL = urlCreator.createObjectURL(blob);
            // Set the preview image tag to be the blob
            document.getElementById('preview').src = imageURL;
            // Revoke the blob object URL once we are done
            urlCreator.revokeObjectURL(blob);
        }).catch(err => {
            console.log(err);
        });
    }

    render () {
        return (
            <div>
                <input type="file" onChange={this.handleFileSelect} />
                <button onClick={this.handleUpload}>Upload</button>
                <img id='preview' />
            </div>
        );
    }
}