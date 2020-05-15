import React from "react";
import { ButtonLink } from "./styles";

export default class Button extends React.Component {
  render() {
    return (
      <li>
        <ButtonLink to={this.props.to}>{this.props.text}</ButtonLink>
      </li>
    );
  }
}
