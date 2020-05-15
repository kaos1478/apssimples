import React from "react";
import { Container } from "./styles";
import Button from "./Button";

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <ul>
          <Button text="Home" to="/" />
          <Button text="Agenda" to="/agenda" />
        </ul>
      </Container>
    );
  }
}
