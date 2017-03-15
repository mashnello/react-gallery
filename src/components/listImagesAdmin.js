import React, { Component, PropTypes } from 'react';

import ImageDetails from './imageDetails';

class ListImagesAdmin extends Component {
    componentWillMount() {
        this.props.getImages();
    }

    static propTypes = {
        images: PropTypes.object.isRequired,
        getImages: PropTypes.func.isRequired,
        editImage: PropTypes.func.isRequired,
        deleteImage: PropTypes.func.isRequired
    }

    renderImagesList() {
        const { images, editImage, deleteImage } = this.props;
        return images && Object.keys(images).map(key => {
            const image = images[key];
            return (
                <li className='media' key={key}>
                    <div className='media-left'>
                        <a href='#'>
                            <img className='media-object' src={image.src} />
                        </a>
                    </div>
                    <div className='media-body'>
                        <ImageDetails
                            editImage={editImage}
                            deleteImage={deleteImage}
                            id={key}
                            name={image.name}
                            tooltip={image.tooltip}
                        />
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className='gallery-admin container'>
                <ul className='media-list'>
                   { this.renderImagesList() }
                </ul>
            </div>
        );
    };
}

export default ListImagesAdmin;