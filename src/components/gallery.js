import React, { Component, PropTypes } from 'react';

class Gallery extends Component {
    componentWillMount() {
        this.props.actions.getImages();
    }

    static propTypes = {
        images: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    renderImages() {
        const { images } = this.props;
        return images && Object.keys(images).map(key => {
            return (
                <div className="gallery-item col-sm-12 col-md-4" key={key}>
                    <h4>{images[key].name}</h4>
                    <img
                        src={images[key].src}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="gallery">
               { this.renderImages() }
            </div>
        );
    };
}

export default Gallery;