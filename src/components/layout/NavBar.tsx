import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-8 justify-end my-20">
      <Link href="/">Home</Link>
      <Link href="/map">Map</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
