import React, { Component, PropTypes } from 'react';

import Tooltip from './tooltip';

class ListImages extends Component {
    componentWillMount() {
        this.props.getImages();
    }

    static propTypes = {
        images: PropTypes.object.isRequired,
        getImages: PropTypes.func.isRequired
    }

    renderImages() {
        const { images } = this.props;
        return images && Object.keys(images).map(key => {
            const image = images[key];
            return (
                <div className='gallery-item col-sm-12 col-md-4' key={key}>
                    <h4>{image.name}</h4>
                    {image.tooltip ?
                        <span data-tip='Tooltip' className='tooltip-icon'>i</span>
                        : null}
                    <Tooltip tooltipText={image.tooltip} />
                    <img src={image.src} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className='gallery clearfix'>
               { this.renderImages() }
            </div>
        );
    };
}

export default ListImages;