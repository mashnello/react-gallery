import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';
import Header from '../components/header';
import ListImagesAdmin from '../components/listImagesAdmin';

class Admin extends Component {

    render() {
        const { images, actions } = this.props;
        return (
            <div>
                <Header />
                <ListImagesAdmin
                    images={images}
                    actions={actions}
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