import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  .form-login {
    background: rgba(255, 255, 255, 0.8);
    padding: 30px;
    border-radius: 10px;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }
`;
