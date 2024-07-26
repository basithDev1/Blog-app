import React from "react";
import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Headder() {
  const path = useLocation().pathname;
  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white">
          basith
        </span>
        blog
      </Link>
      <form action="">
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={CiSearch}
          className="hidden lg:inline"
        ></TextInput>
      </form>
      <Button className="w-12 h-10  lg:hidden" color="gray" pill>
        <CiSearch />
      </Button>
      <div className="flex gap-2">
        <Button className="w-12 h-10 hidden lg:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" className="h-10 w-15" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} href="/">
          Home
          </Navbar.Link>
        <Navbar.Link active={path === "/about"} href="/about">
          About
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} href="/projects">
          Projects
     </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
