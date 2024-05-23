import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EXPAND_BREAKPOINT = "md";

// MyNavbar.propTypes = {
//   brandTitle: String,
//   offCanvasTitle: String,
// };

const MyNavbar = ({ brandTitle, offCanvasTitle }) => {
  const navigate = useNavigate();
  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              <Nav.Link
                className="flex-grow-1 text-center border border-dark border-end-0"
                onClick={() => navigate("/login")}
              >
                로그인
              </Nav.Link>
              <Nav.Link
                className="flex-grow-1 text-center border border-dark"
                onClick={() => navigate("/signin")}
              >
                회원가입
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">게시판</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
