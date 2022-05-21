import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyContext } from "../../MainContext";
import Trade from "../../pages/Trade/Trade";
import MyNav from "../MyNav/MyNav";

export default function Home() {
  const {user} = useContext(MyContext)
  
  return (
    <div>
      <MyNav />
      <Trade />
    </div>
  );
}
