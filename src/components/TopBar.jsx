import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./css/TopBar.css";
import navlogo from "../images/navlogo.svg";
import wave from "../images/wave.svg";

const TopBar = () => {
  return (
    <>
      {/* <img
        src={wave}
        alt="logo"
        style={{
          width: "-webkit-fill-available",
          height: "-webkit-fill-available",
        }}
      /> */}
      <Navbar className="topbar shadow" color="light" light fixed>
        <NavbarBrand>
          <img
            src={navlogo}
            alt="logo"
            style={{
              height: 40,
              width: 40,
            }}
          />
          Company name
        </NavbarBrand>
        <li className="list-unstyled">
          <ul className="unstyled">
            <NavbarText className="mr-5 m-0 p-0 ">City: Kolkata</NavbarText>
          </ul>
          <ul>
            <NavbarText className="mr-5 m-0 p-0 ">Phone: 9876543210</NavbarText>
          </ul>
          <ul>
            <NavbarText className="mr-5 m-0 p-0 ">Email: sales@admin.com</NavbarText>
          </ul>
        </li>

      </Navbar>
    </>
  );
};

export default TopBar;
