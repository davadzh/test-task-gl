import React from "react";
import {withStore} from "../../state/withStore";
import "../../state/stores/AuthStore";
import "./login-modal.scss"
import {LOGIN} from "../../state/stores/AuthStore";
import {ModalWrapper} from "../UI/modalWrapper";
import {withCookies} from "react-cookie";
import {Input} from "../UI/input";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login:'', password: ''}
  }

  render() {
    const {dispatch} = this.props;

    const changeLogin = (e) => {
      this.setState({login: e.target.value})
    }

    const changePassword = (e) => {
      this.setState({password: e.target.value})
    }

    const onLogin = () => {
      dispatch('LOGIN', {login: this.state.login, password: this.state.password});
      this.setState({login: '', password: ''});
      this.props.closeModal();
      this.props.auth();
    }

    return (
      <ModalWrapper title={"Вход"} closeModal={this.props.closeModal}>
        <Input label={"Логин"} type={"text"} onChange={changeLogin} placeholder={"Введите логин"}/>
        <Input label={"Пароль"} type={"password"} onChange={changePassword} placeholder={"Введите пароль"}/>

        <button onClick={onLogin} className={'login-form-button'}>Войти</button>
      </ModalWrapper>
    );
  }
}

export default withCookies(withStore("auth", (data) => data)(LoginModal))