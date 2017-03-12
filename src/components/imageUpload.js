import React, { Component, PropTypes } from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    static propTypes = {
        actions: PropTypes.object.isRequired
    }

    onFormSubmit(e) {
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

    onImageChange(e) {
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
            <img src={imagePreviewUrl} /> :
            <div className="preview-text">Please select an Image for Preview</div>;

        return (
            <div className="container">
                <form
                  onSubmit={ (e) => this.onFormSubmit(e)}
                  id="image-upload"
                  className='form-inline pull-xs-right image-upload'>
                    <input
                        onChange={ (e) => this.onImageChange(e) }
                        className='form-control'
                        accept='image/jpeg,image/png'
                        id='uploader'
                        type='file'
                        style={{display: 'none'}}
                    />
                    {this.state.file ?
                    <button
                        type='submit'
                        onClick={ (e) => this.onFormSubmit(e)}
                        className='btn btn-primary'>
                        Upload
                    </button> :
                    <label
                        htmlFor="uploader"
                        className='btn btn-primary'>
                        Upload Image
                    </label>
                    }
                </form>
                <div className="img-preview">
                    { imagePreview }
                </div>
            </div>
        );
    }
}

export default ImageUpload;