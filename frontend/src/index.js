import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

import Routes from './Routes';

ReactDOM.render(


  <Routes />
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
