import {
  StNavContainer,
  StNavWrapper
} from "@/app/styledComponents/layout/StNavBar";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <StNavContainer>
      <p>나의쾌변일지</p>

      <StNavWrapper>
        <Link href="/">Home</Link>
        <Link href="/map">Map</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
      </StNavWrapper>
    </StNavContainer>
  );
};

export default NavBar;
