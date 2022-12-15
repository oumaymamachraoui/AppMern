import React from "react";
import { Button, Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/actions/users";
const Navigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const load = useSelector((state) => state.userReducer.loadUser);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/home">Home</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/endroit"> endroit</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/document">document</Link>{" "}
            </Nav.Link>

            {isAuth ? (
              <Nav.Link>
                
                <Link to="/profil">Profil</Link>{" "}
              </Nav.Link>
            ) : null}
            {/* {isAuth ? ( */}
              <Nav.Link>
                <Link to="/reclamation"> reclamation</Link>
              </Nav.Link>
            {/* // ): null} */}
          </Nav>

          {isAuth ? (
            <Link to="/">
              <Button onClick={() => dispatch(logout())}> Logout </Button>{" "}
            </Link>
          ) : (
            <div>
              <Link to="/login">
                <Button>Login</Button>{" "}
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
