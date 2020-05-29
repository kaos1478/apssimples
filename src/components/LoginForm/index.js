import React, { useContext, useState } from "react";
import StoreContext from "../../components/Store/Context";
import { Form, Popover, OverlayTrigger } from "react-bootstrap";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import BackgroundImg from "../../assets/imgs/arvores.jpg";
import { useUser } from "../../contexts/User";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

export default function LoginForm() {
  const { setUser } = useUser();

  function login({ user, password }) {
    if (
      (user === "admin" && password === "admin") ||
      (user === "user" && password === "user")
    ) {
      setUser(user);
      return { token: "1234" };
    }
    alert("Usuário e Senha inválidos!");
    return { error: "Usuário ou senha inválida!" };
  }

  function initialState() {
    return { user: "", password: "" };
  }

  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const { token } = login(values);
    if (token) {
      setToken(token);
      return history.push("/");
    }

    setValues(initialState);
  };

  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Algum Problema?</Popover.Title>
      <Popover.Content>
        Entre em contato por telefone <strong>(xx)xxxxx-xxxx</strong>
      </Popover.Content>
    </Popover>
  );
  return (
    <Container img={BackgroundImg}>
      <Form className="form-login" onSubmit={onSubmit}>
        <Form.Group controlId="usuario">
          <TextField
            id="standard-basic"
            type="user"
            name="user"
            onChange={onChange}
            value={values.user}
            label="Usuário"
          />
        </Form.Group>

        <Form.Group controlId="senha">
          <TextField
            id="standard-basic"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            label="Senha"
          />
        </Form.Group>
        <br />
        <div className="btns">
          <Button variant="contained" color="primary" type="submit">
            Logar
          </Button>

          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="outlined" color="primary">
              Ajuda
            </Button>
          </OverlayTrigger>
        </div>
      </Form>
    </Container>
  );
}
