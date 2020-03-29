import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Contact</h1>

        <div className='row'>
            <h1><Link className='link' to='/'>Home</Link></h1>
            <h1><Link className='link' to='/About'>About</Link></h1>
        </div>
      </div>
    );
  }
}
