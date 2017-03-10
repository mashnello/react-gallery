import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Gallery from './containers/gallery';
import Admin from './containers/admin';

export default (
    <Route path="/" component={Gallery}>
        <IndexRoute component={Gallery} />
        <Route path="/admin" component={Admin} />
    </Route>
);