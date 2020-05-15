import React, { useContext } from "react";
import { Container } from "./styles";
import StoreContext from "../../components/Store/Context";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Home, CalendarToday } from "@material-ui/icons";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export default function NavbarComponent() {
  const { setToken } = useContext(StoreContext);

  function login() {
    return { token: null };
  }

  function logout() {
    const { token } = login();
    setToken(token);
    return history.push("/");
  }

  const history = useHistory();

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Agenda Ágil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">
              <Home />
              {"\u00A0"}Home
            </Nav.Link>
            <Nav.Link to="/agenda">
              <CalendarToday />
              {"\u00A0"}Agenda
            </Nav.Link>
            <NavDropdown.Divider />
          </Nav>
          <Nav>
            <Nav.Link onClick={logout}>
              <PowerSettingsNewIcon />
              {"\u00A0"}Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
