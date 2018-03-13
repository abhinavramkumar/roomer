import React from "react";
import { connect } from "react-redux";
import { start__login } from "../../actions";

const LoginPage = (props) => (
  <div className="LoginPage">
    <div className="container">
      <form action="" className="LoginPageForm">
        <div className="LoginPageForm__Logo">
          <img src="" alt="Logo" />
        </div>
        <button
          className="LoginPageForm__LoginButton"
          onClick={props.startLogin}
        >
          Sign Up with Google
        </button>
      </form>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(start__login())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
