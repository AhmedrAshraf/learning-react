import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>

        <div className='row'>
            <h1><Link className='link' to='/About'>About</Link></h1>
            <h1><Link className='link' to='/Contact'>Contact</Link></h1>
        </div>
      </div>
    );
  }
}
