import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";
import { start__setTextFilter } from "../../actions";

class OptionsBar extends Component {
  state = {
    text: this.props.text
  };
  onSearchInput = (e) => {
    let text = e.currentTarget.value;
    this.props.startSetTextFilter(text);
  };
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
            <input
              className="SearchBar__Input"
              value={this.state.text}
              onChange={this.onSearchInput}
            />
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
  tenantCount: state.tenants.length > 0 ? state.tenants.length : 0,
  text: state.filters.text
});

const mapDispatchToProps = (dispatch) => ({
  startSetTextFilter: (text) => dispatch(start__setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(OptionsBar);
