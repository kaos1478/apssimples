import React, { useContext, useState } from "react";
import StoreContext from "../../components/Store/Context";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import BackgroundImg from "../../assets/imgs/background1.jpg";

export default function LoginForm() {
  function login({ user, password }) {
    if (user === "admin" && password === "admin") {
      return { token: "1234" };
    }
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
        Entre em contato por telefone <strong>(14)99719-0307</strong>
      </Popover.Content>
    </Popover>
  );
  return (
    <Container img={BackgroundImg}>
      <Form className="form-login" onSubmit={onSubmit}>
        <Form.Group controlId="usuario">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="user"
            name="user"
            onChange={onChange}
            placeholder="Digite seu usuário"
            value={values.user}
          />
        </Form.Group>

        <Form.Group controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={onChange}
            placeholder="Senha"
            value={values.password}
          />
        </Form.Group>
        <div className="btns">
          <Button variant="success" type="submit">
            Logar
          </Button>
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="outline-primary">Ajuda</Button>
          </OverlayTrigger>
        </div>
      </Form>
    </Container>
  );
}
