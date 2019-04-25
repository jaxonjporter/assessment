import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import People from './People'
import Planet from './Planet'
import {Container, } from 'semantic-ui-react';
import Navbar from './Navbar'
import Home from './Home'
import NoMatch from './NoMatch';

const App = () => {

  return (
    <>
    <Navbar />
    <Container>
    <Switch>

      <Route exact path='/people' component={People} />
      <Route exact path='/planet/:name' render={(props) => <Planet name={props.match.params.name} /> } />
      <Route exact path='/' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
    </>
  );
}

export default App;
