import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Gallery from './containers/gallery';
import Admin from './containers/admin';

export default (
    <Route path='/react-gallery/' component={App}>
        <IndexRoute component={Gallery} />
        <Route path='/react-gallery/admin' component={Admin} />
    </Route>
);