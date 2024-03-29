import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return(
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to='/' className="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li>
            <Link to="/aboutme" className="nav-link" >About me</Link>
            </li>
            <li>
            <Link to='/abilities' className="nav-link" >Abilities</Link>
            </li>
            <li>
            <Link to='/projects' className="nav-link" >Projects</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
           
          </form>
        </div>
      </nav>
    );
};