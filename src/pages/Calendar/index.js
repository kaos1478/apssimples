//import Sidebar from "../../components/Sidebar";
import NavbarComponent from "../../components/Navbar";
import Calendar from "../../components/Calendar";
import React from "react";

export default class CalendarPage extends React.Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <Calendar />
      </>
    );
  }
}
