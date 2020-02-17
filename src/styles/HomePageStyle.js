import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: left;
`;

export const BodyContainer = styled.div`
  margin: 2em auto;
  max-width: 960px;
  p {
    text-align: center;
  }
`;

export const AppHeader = styled.header`
  background-color: #42aa74;
  height: 50px;
  padding: 20px;
  color: white;
`;

export const AppHeaderCenter = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
`;

export const AppTitle = styled.h1`
  float: right;
  font-size: 1.5em;
`;

export const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 50px;
  padding-top: 0.5em;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
