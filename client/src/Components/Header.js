import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import * as routes from "../constants/routes";

//bring in image for header/logo
export default class Header extends React.Component{
  render () {
    return (
      <header>
        <nav>
        <div id="logo">
          <img style={{ maxwidth: "100%" }} src="/img/logo.png"/> 
        </div>  
        <div id="nav-links">
          <Link to={routes.SHORT_TERM_RENT} id="page">Rent</Link>
          <Link to={routes.POST_LISTING} id="page">Post Listing</Link>
          <Link to={routes.ABOUT} id="page">About</Link>  
          <Link to={routes.SIGN_IN} id="login">
          <i className="far fa-user"/>
          Sign In
        </Link>
        </div>
        </nav>
      </header>
    );
  }
}