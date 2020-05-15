import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles";
import { Container } from "./styles";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <FullCalendar
          className="calendar"
          defaultView="dayGridMonth"
          events={[
            { title: "event 1", date: "2020-05-01 12:30" },
            { title: "event 2", date: "2020-05-02" }
          ]}
          eventClick={this.handleDateClick}
          plugins={[dayGridPlugin, interactionPlugin]}
        />
      </Container>
    );
  }
  handleDateClick = arg => {
    // bind with an arrow function
    alert(arg.event.start);
  };
}
