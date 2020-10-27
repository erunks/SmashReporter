import React, { Fragment }  from 'react';
import { IKContext } from 'imagekitio-react';
import Routes from 'routes'

import './AppContainer.scss';

const App = () => (
    <Fragment>
      <IKContext
        publicKey="public_DfZPshOEvWdxzvxS8HGNWPJCo70="
        urlEndpoint="https://ik.imagekit.io/ozcerk4wii"
      >
        <Routes />
      </IKContext>
    </Fragment>
)

export default App;
