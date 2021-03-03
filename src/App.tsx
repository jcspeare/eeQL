import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from '../../eeQL/src/components/Home/Home';
import TestBuilder from '../../eeQL/src/components/TestSuite/Test'
// import TestSuite from '../../eeQL/src/components/TestSuite/Supertest';

const App = () => (
      <div>
         <Switch>
            <Route exact path='/' component={TestBuilder} />
         </Switch>
      </div>
);


export default App;
