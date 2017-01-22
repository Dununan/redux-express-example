import React from 'react'
import C from './constants'

import PageList from './containers/PageList'
import PageDetail from './containers/PageDetail'

const SimpleRouter = (page) => {
    let title = 'Welcome';
    let content = null;
    switch (page) {
        case C.PAGE_MAIN:
            title = 'Costumers List';
            content = <PageList />;
            history.pushState(null,title, '/');
            break;
        case C.PAGE_DETAIL:
            title = 'Costumers Detail';
            content = <PageDetail />;
            history.pushState(null,title, '/detail/');
            break;
        default:
            title = 'Error - Page Not Found';
            content = <div>404</div>;
    }

    return {
        title,
        content,
    }
};

export default SimpleRouter