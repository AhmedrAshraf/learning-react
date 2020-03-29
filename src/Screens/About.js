import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./style.css";

export default class About extends React.Component {
  showAlert() {

    swal("Type something:", {content: "input"});
    
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 onClick={this.showAlert}>About</h1>

          <div className="row">
            <h1>
              <Link className="link" to="/">
                Home
              </Link>
            </h1>
            <h1>
              <Link className="link" to="/Contact">
                Contact
              </Link>
            </h1>
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    );
  }
}
