import React, { Component } from "react";
import firebase from "../firebase/firebase";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Logo from "../assets/images/logo.png";
import Button from "./Button";

class Register extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div className="mainContainer">
        <div className="contentSignUp">
          <header>
            <img className="header-logo-image" src={Logo} alt="logo" />
            <h2>Registrate</h2>
          </header>
          <Form onSubmit={this.handleSubmit}>
            {/* <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="Nickname" />
            </Form.Group> */}

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted">
                Nunca compartas datos personales con extraños.
              </Form.Text>
              {/* <Form.Label>Confirma tu correo</Form.Label>
              <Form.Control type="email" placeholder="Confirmar correo" /> */}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={this.handleInputChange}
              />
              {/* <Form.Label>Confirma tu contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
              /> */}
            </Form.Group>
            {error ? <p>{error.message}</p> : null}
            <Button
              type="submit"
              className="btnEnter btn btn-dark btn-lg"
              content="Registrar"
            />
          </Form>
          <Link to="./">¿Ya eres usuario registrado? VE A INICIAR SESIÓN</Link>
        </div>
      </div>
    );
  }
}

export default Register;
