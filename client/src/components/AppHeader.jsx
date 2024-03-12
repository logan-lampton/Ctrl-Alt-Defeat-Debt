import { ReactDOM, React, UseState } from "react";
import Container from '@mui/material/Container';
import logo from "../assets/logo.svg"
import account from "../assets/account.svg"

const AppHeader = () => {


return (
   <Container>
      <header className="app-header">
      <img className="icons" src={account}></img> 
      <img className="center-logo icons" src={logo}></img>
    </header>
      </Container>



)
}



export default AppHeader;