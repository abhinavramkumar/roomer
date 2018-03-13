import React, { Component } from "react";
import { connect } from "react-redux";
import { SideBar } from "../index";
class DashboardPage extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <SideBar user={this.props.user} />
        <div className="DashboardPage">
          <p>Dashboard Page</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DashboardPage);
