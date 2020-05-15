import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo > img {
    width: 50px;
  }

  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

  .toggleSideBar {
    transform: translateX(-100%);
    display: none;
  }
`;
