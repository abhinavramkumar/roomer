import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTenantForm extends Component {
  render() {
    return (
      <div className="CreateTenantForm">
        <div className="CreateTenantForm__Backdrop" />
        <div className="CreateTenantForm__Main">
          <form className="CreateTenantForm__Form" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTenantForm);
