import React from 'react';
import {Link} from 'react-router-dom';

export default function Jumbotron() {
    return(
        <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Sofware Developer and Enthusiast</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p>
            <Link to="./aboutme" class="btn btn-primary btn-lg" href="#" role="button" > about me&raquo;</Link>

          </p>
        </div>
      </div>
    );

};