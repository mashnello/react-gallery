import React, { Component, PropTypes } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    static propTypes = {
        actions: PropTypes.object.isRequired
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { lastModified, name } = this.state.file;
        const src = this.state.imagePreviewUrl;
        if (lastModified && name && src) {
            this.props.actions.uploadImage(lastModified, name, src);
            this.setState({
                file: '',
                imagePreviewUrl: ''
            });
        }
    }

    onImageChange = (e) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        const { imagePreviewUrl } = this.state;
        const imagePreview = imagePreviewUrl ?
            <img src={imagePreviewUrl} /> : '';

        return (
            <div className="container">
                <form
                  onSubmit={ this.onFormSubmit }
                  id="image-upload"
                  className='form-inline pull-xs-right image-upload'>
                    <input
                        onChange={this.onImageChange}
                        className='form-control'
                        accept='image/jpeg,image/png'
                        id='uploader'
                        type='file'
                        style={{display: 'none'}}
                    />
                    {this.state.file ?
                    <button
                        type='submit'
                        onClick={this.onFormSubmit}
                        className='btn btn-sm btn-primary'>
                        Upload
                    </button> :
                    <label
                        htmlFor="uploader"
                        className='btn btn-sm btn-primary'>
                        Upload Image
                    </label>
                    }
                </form>
                <div className="image-preview">
                    { imagePreview }
                </div>
            </div>
        );
    }
}

export default ImageUpload;