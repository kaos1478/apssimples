import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
  color: #aaabb3;
  text-decoration: none;
  display: block;
  padding: 10px;
  font-family: "roboto", "arial";
  transition: all 0.5s;
  text-align: center;

  &:hover {
    transform: rotate(5deg);
    color: black;
  }
`;

/*.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}*/
