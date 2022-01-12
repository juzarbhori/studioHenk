import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./style.css";
import { ShoppingCartOutlined, UserOutlined, HeartOutlined } from "@ant-design/icons";

const NavBarFun = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <div className={x.join(" ")}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/hi-malaya/studioHenk/">
            <img
              src={"https://masara.ro/wp-content/uploads/2021/10/Asset-1-8.png"}
              alt="Logo"
              className="logo"
              title="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavDropdown title="Produse" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Mese Lemn Masiv
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Mese de Cafea
                </NavDropdown.Item>

              </NavDropdown>


              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#link">Despre noi</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>


            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ShoppingCartOutlined />
            </Navbar.Text>
            <Navbar.Text>
              <UserOutlined />
            </Navbar.Text>
            <Navbar.Text>
              <HeartOutlined />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarFun;
