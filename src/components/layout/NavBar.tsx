import { StNavigation } from "@/styled-component/layout/StNavBar";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <StNavigation className="flex gap-8 justify-end my-20">
      <Link href="/">Home</Link>
      <Link href="/map">Map</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
    </StNavigation>
  );
};

export default NavBar;
