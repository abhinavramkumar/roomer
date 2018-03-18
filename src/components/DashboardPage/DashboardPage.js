import React, { Component } from "react";
import { connect } from "react-redux";
import { SideBar, OptionsBar, CreateTenantForm } from "../index";

class DashboardPage extends Component {
  state = {
    isShownAddTenantForm: false
  };

  toggleAddTenantForm = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isShownAddTenantForm: !prevState.isShownAddTenantForm
    }));
  };

  render() {
    return (
      <div className="page-wrapper">
        <SideBar user={this.props.user} />
        <div className="DashboardPage">
          <div className="container">
            <OptionsBar addTenant={this.toggleAddTenantForm} />

            {/* Show CreateTenantForm if add tenant button is clicked in OptionsBar component  */}
            {this.state.isShownAddTenantForm && <CreateTenantForm />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(DashboardPage);
