import React from "react";
import "./state/stores/ProductsStore";
import "./state/stores/AuthStore";
import './index.scss';
import "./App.scss"

import Content from "./components/content";
import {withCookies} from "react-cookie";
import {Header} from "./components/header";

class App extends React.Component {
  constructor(props) {
    super(props);
    const { cookies } = props;

    if (cookies.get("isAuthorized") === undefined) {
      cookies.set("isAuthorized", "false")
    }

    this.state = {
      isAuthorized:  cookies.get("isAuthorized") === "true",
      isLoginModalOpen: false
    }
  }

  render() {

    const openLoginModal = () => {
      this.setState({isLoginModalOpen: true})
    }

    const closeLoginModal = (e) => {
      this.setState({isLoginModalOpen: false})
    }

    const login = () => {
      this.setState({isAuthorized: true})
      this.props.cookies.set("isAuthorized", "true");
    }

    const logout = () => {
      this.setState({isAuthorized: false})
      this.props.cookies.set("isAuthorized", "false");
    }

    return (
      <main>
        <div className="container">
          <Header isAuthorized={this.state.isAuthorized}
                  login={login}
                  logout={logout}
                  isLoginModalOpen={this.state.isLoginModalOpen}
                  openLoginModal={openLoginModal}
                  closeLoginModal={closeLoginModal}/>

          <Content isAuthorized={this.state.isAuthorized} />
        </div>
      </main>
    );
  }
}

export default withCookies(App);
