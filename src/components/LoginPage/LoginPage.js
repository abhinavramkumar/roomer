import React from "react";
import { connect } from "react-redux";
import { start__login } from "../../actions";

const LoginPage = (props) => (
  <div className="LoginPage">
    <div className="container">
      <div className="flex-row centered">
        <form className="LoginPageForm">
          <div className="LoginPageForm__Logo">
            <img src="" alt="Logo" />
          </div>
          <button
            className="btn btn-primary LoginPageForm__LoginButton"
            onClick={props.startLogin}
          >
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(start__login())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
