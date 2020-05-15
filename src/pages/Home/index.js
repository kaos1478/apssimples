//import Sidebar from "../../components/Sidebar";
import NavbarComponent from "../../components/Navbar";
import React from "react";
import Calendar from "../Calendar";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <Calendar />
      </>
    );
  }
}
