import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';
import ListImages from '../components/listImages';
import Header from '../components/header';

class Gallery extends Component {

    render() {
        const { images, actions } = this.props;
        return (
            <div>
                <Header />
                <ListImages
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
)(Gallery);