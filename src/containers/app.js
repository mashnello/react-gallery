import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/index';
import Gallery from '../components/gallery';

class App extends Component {

    render() {
        const { images, actions } = this.props;
        return (
            <div>
                <h1>React Gallery</h1>
                <Gallery
                    images={images}
                    actions={actions}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { images } = state;
    return {
        images
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
)(App);