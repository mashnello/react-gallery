import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';
import ListImagesAdmin from '../components/listImagesAdmin';
import ImageUpload from '../components/imageUpload';

class Admin extends Component {

    render() {
        const { images, actions } = this.props;
        const { getImages, editImage, deleteImage } = actions;
        return (
            <div>
                <ImageUpload
                    uploadImage={ actions.uploadImage }
                />
                <ListImagesAdmin
                    images={images}
                    getImages={getImages}
                    editImage={editImage}
                    deleteImage={deleteImage}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        images: state.images.all
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin);