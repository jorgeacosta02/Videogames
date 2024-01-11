import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landingPage/landing.jsx';
import Home from './components/main/home.jsx';
import Form from './components/form/form.jsx';
import One from './components/one/one.jsx';
import NotFound from './components/notFound/notFound.jsx';


function App() {

  return (
  <div className='App'>
    <Switch>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/videogames' render = { () => <div> <Home /> </div> } />
      <Route path='/form'>
        <Form />
      </Route>
      <Route exact path='/videogames/:id' render ={ () => <One />} />
      <Route path='*' component = { NotFound }/>
    </Switch>
  </div>
  );
};

export default App;
