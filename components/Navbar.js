import 'bootstrap/dist/css/bootstrap.min.css';

import { Dropdown, Icon, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { Estilos } from '../styles/estilosNavbar';

export default class extends React.Component {
  render() {
    return (
      <Estilos>
        <Navbar bg="light" expand="lg" className="nav">
          <Navbar.Brand className="logo" href="#home">
            DIGEVO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="opcion" href="#home">
                Home
              </Nav.Link>
              <NavDropdown
                className="lista"
                title="Demos"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Blazeface Demo - Vision
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Body-pix Demo - Vision
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Facemesh Demo - Vision
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Pose Estimation - Camera feed demo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Pose Estimation - Image demo
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="opcion" href="https://digevo.com/contacto/">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Estilos>
    );
  }
}
