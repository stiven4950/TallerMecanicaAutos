import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

import Routes from './Routes';

ReactDOM.render(

<Auth0Provider
  domain="taller-mecanica.us.auth0.com"
  clientId="n0ryhtuBK88nMfqlyKgvvGI2QJw7aucz"
  redirectUri={window.location.origin}
>
  <Routes />
</Auth0Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
