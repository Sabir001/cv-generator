import styled from "styled-components";
import bgBanner from "../assets/images/cv-banner.jpeg";

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

export const LandingWrapper = styled.div`
  background: rgb(16,97,131);
  background-image: url("${bgBanner}");
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(16,97,131);
    background: linear-gradient(90deg, rgba(16,97,131,.85) 0%, rgba(13,190,158,.85) 35%, rgba(3,159,196,.85) 100%);
    z-index: 1;
  }
`;

export const LandingContent = styled.div`
  z-index: 999;
`;

export const LandingHeader = styled.h1`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 4em;
  letter-spacing: -2px;
  text-align: center;
  text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.6);
`;

export const LandingButton = styled.div`
  button {
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    background: transparent;
    border: 3px solid #fff;
    color: #fff;
    text-align: center;
    font-size: 1.4em;
    opacity: 0.8;
    padding: 20px 40px;
    text-decoration: none;
    transition: all 0.5s ease;
    margin: 0 15px;
    display: inline-block;

    &:hover {
      opacity: 1;
      color: #000;
      border-color: #000;
      cursor: pointer;
    }
  }
`;
