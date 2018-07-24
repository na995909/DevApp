import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import About from "./components/About";
import Probono from "./components/Probono";
import Projects from "./components/Projects";
import UpdateProjects from "./components/UpdateProjects";

const App = () =>
  <Router>
    <div>
    	{/* 
    	 * The exact param disables the partial 
    	 * matching for a route and makes sure 
    	 * that it only returns the route if the 
    	 * path is an EXACT match to the current url  
    	*/}
    	<Route exact path='/' component={Probono} />
	    <Route path='/About' component={About}/>
	    <Route path='/Probono' component={Probono}/>
	    <Route path='/Projects' component={Projects}/>
	    <Route path='/admin/UpdateProjects' component={UpdateProjects}/>
    </div>
  </Router>;

export default App;
