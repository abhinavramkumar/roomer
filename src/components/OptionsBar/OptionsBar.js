import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";

class OptionsBar extends Component {
  render() {
    return (
      <div className="OptionsBar">
        {/* Summary Component */}
        <div className="Summary">
          <h2>
            Tenants<span>11</span>
          </h2>
        </div>

        {/* SearchBar Component */}
        <div className="SearchBar">
          <div className="SearchBar__Container">
            <input className="SearchBar__Input" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        <button
          className="btn btn-small btn-primary"
          onClick={this.props.addTenant}
        >
          ADD TENANT
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tenantCount: state.tenants.length > 0 ? state.tenants.length : 0
});

const mapDispatchToProps = (dispatch) => ({
  startSetTextFilter: (text) => dispatch(start__setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar);
