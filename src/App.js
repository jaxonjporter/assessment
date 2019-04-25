import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import People from './People'
import Planet from './Planet'
import {Container, } from 'semantic-ui-react';
import Navbar from './Navbar'

const App = () => {

  return (
    <>
    <Navbar />
    <Container>
    <Switch>
      <Route exact path='/' component={People} />
      <Route exact path='/planet/:name' render={(props) => <Planet name={props.match.params.name} /> } />
    </Switch>
  </Container>
    </>
  );
}

export default App;
