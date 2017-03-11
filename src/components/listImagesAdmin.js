import React, { Component, PropTypes } from 'react';

class ListImagesAdmin extends Component {
    componentWillMount() {
        this.props.actions.getImages();
    }

    static propTypes = {
        images: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    renderImagesList() {
        const { images } = this.props;
        return images && Object.keys(images).map(key => {
            const image = images[key];
            return (
                <li className="media" key={key}>
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src={image.src} />
                        </a>
                    </div>
                    <div className="media-body">
                        <h5 className="media-heading">Image name</h5>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={image.name}
                                aria-describedby={'name'+key}
                            />
                            <span
                                className="input-group-addon"
                                id={'name'+key}>
                                Save
                            </span>
                        </div>
                        <br />
                        <h5 className="media-heading">Tooltip text</h5>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={image.tooltip}
                                aria-describedby={'tooltip'+key}
                            />
                            <span
                                className="input-group-addon"
                                id={'tooltip'+key}>
                                Save
                            </span>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="gallery-admin container">
                <ul className="media-list">
                   { this.renderImagesList() }
                </ul>
            </div>
        );
    };
}

export default ListImagesAdmin;