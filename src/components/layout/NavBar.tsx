import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-8 p-8 items-center">
      <Link href="/">Home</Link>
      <Link href="/map">Map</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
