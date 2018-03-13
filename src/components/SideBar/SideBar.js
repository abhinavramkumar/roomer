import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faCog,
  faHome,
  faUsers,
  faInbox
} from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";
import { history } from "../../router/AppRouter";

class SideBar extends Component {
  goToAdminProfile = (e) => {
    history.push("/admin");
  };

  render() {
    return (
      <div className="SideBar">
        <div className="SideBar__Head">
          <div className="SideBar__Logo">
            <h1>Roomer</h1>
          </div>
          <div className="SideBar__Profile">
            <img
              src={this.props.user.photoURL}
              alt={this.props.user.displayName}
            />
            <button onClick={this.goToAdminProfile}>
              <FontAwesomeIcon icon={faCog} />
            </button>
            <p>{this.props.user.displayName}</p>
          </div>
        </div>
        <div className="SideBar__Links">
          <div
            className={
              "SideBar__Link " + (this.props.properties ? "active" : "")
            }
          >
            <Link to="/properties">
              <FontAwesomeIcon icon={faHome} />
              Properties
            </Link>
          </div>
          <div
            className={"SideBar__Link " + (this.props.tenants ? "active" : "")}
          >
            <Link to="/tenants">
              <FontAwesomeIcon icon={faUsers} />
              Tennants
            </Link>
          </div>
          <div
            className={"SideBar__Link " + (this.props.messages ? "active" : "")}
          >
            <Link to="/messages">
              <FontAwesomeIcon icon={faInbox} />
              Messages
            </Link>
          </div>
        </div>
        <div className="SideBar__Footer">
          <hr />
          <p>Need Help?</p>
          <p className="SideBar__Footer-Text">+91 897 160 5307</p>
          <p className="SideBar__Footer-Text">abhinavramkumar91@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default SideBar;
