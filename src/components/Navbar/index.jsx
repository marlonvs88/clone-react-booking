import React from "react";
import * as C from "./styles";

const Navbar = () => {
  return (
    <C.Navbar>
      <C.NavContainer>
        <C.Logo>React Booking</C.Logo>
        <C.NavItems>
          <C.NavButton>Register</C.NavButton>
          <C.NavButton>Login</C.NavButton>
        </C.NavItems>
      </C.NavContainer>
    </C.Navbar>
  )
}

export default Navbar