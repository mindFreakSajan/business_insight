/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./favicon.ico');
import './styles.scss';
    import 'font-awesome/css/font-awesome.css';
    import 'flexboxgrid/css/flexboxgrid.css';
    import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import CreateStore from './Stores/store';

injectTapEventPlugin();
const store =
    CreateStore(browserHistory);

const history = syncHistoryWithStore(browserHistory, store)
render((
        <Provider store={store}>
          <div>
            <Router history={history} routes={routes} />
          </div>
        </Provider>), document.getElementById('app')
);
