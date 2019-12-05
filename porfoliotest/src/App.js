import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Home from './Home';
import Aboutme from './Aboutme';
import Abilities from './Abilities';
import Projects from './Projects';




function App() {
  return (
    <>
   
   <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path='/aboutme'>
        <Aboutme/>
      </Route>
      <Route path="/abilities">
        <Abilities/>
      </Route>
      <Route path="/projects">
      <Projects/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>

      
   </BrowserRouter>
 
  </>
  );
}

export default App;
