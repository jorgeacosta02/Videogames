import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/landingPage/home.js';
import Main from './components/main/main';
import Form from './components/form/form';
import One from './components/one/one';
import NotFound from './components/notFound/notFound';


function App() {

  return (
  <div className='App'>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/videogames' render = {()=><div> <Main/> </div>} />
      <Route path='/form'>
        <Form />
      </Route>
      <Route exact path='/videogames/:id' render ={()=><One />} />
      <Route path='*' component={NotFound}/>
    </Switch>
  </div>
  );
};

export default App;
