import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import * as routes from "../constants/routes";

//bring in image for header/logo
export default class Header extends React.Component{
  render () {
    return (
      <header>
        <div id="logo">
          <img /> 
        </div>
        <nav>
          <Link to={routes.SHORT_TERM_RENT}>Rent</Link>
          <Link to={routes.POST_LISTING}>Post Listing</Link>
          <Link to={routes.ABOUT}>About</Link>
        </nav>
        <Link to={routes.SIGN_IN} id="login">
          <i className="far fa-user"/>
          Sign In
        </Link>
      </header>
    );
  }
}