import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Dash from './routes/Dash';
import Home from './routes/Home';

ReactDOM.render(
	<Router>
		<Home path="/" />
		<Dash path="dashboard" />
	</Router>,
	document.getElementById('root'),
);
registerServiceWorker();
