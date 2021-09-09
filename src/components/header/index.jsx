import React from "react";
import LoginModal from "../loginModal";
import "./header.scss";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <header className={"header"}>
          {this.props.isAuthorized === false && <>
            <button onClick={this.props.openLoginModal} className={'auth-button'}>Войти</button>
            {this.props.isLoginModalOpen &&
            <LoginModal closeModal={this.props.closeLoginModal} auth={this.props.login}/>}
          </>}

          {this.props.isAuthorized === true && <>
            <button onClick={this.props.logout} className={'auth-button'}>Выйти</button>
          </>}
      </header>
    );
  }
}
