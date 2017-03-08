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
                <div key={key}>
                    <h3>{images[key].name}</h3>
                    <img src={images[key].src} />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
               { this.renderImages() }
            </div>
        );
    };
}

export default Gallery;