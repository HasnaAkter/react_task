import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><div><img style={{ width: '48px', height: '48px', borderRadius: '999px' }} src={logo} alt="" /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

          </Nav>
          <Nav>
            {/* <Nav.Link eventKey={2} href="#deets">Home</Nav.Link> */}
            <NavLink style={{
              width: 39,
              height: 17,
          marginRight:40,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} to="/Home">Home</NavLink>
            <NavLink style={{
              width: 39,
              height: 17,

              marginRight:70,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} to="/ProductPage" eventKey={2} href="#memes">
              Categories
            </NavLink>
            <NavLink style={{
              width: 39,
              height: 17,
           
              marginRight:40,
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} eventKey={2} href="#deets">Login</NavLink>
            <NavLink style={{
              width: 39,
              height: 17,
         
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 14,
              lineHeight: '124.19%',
              /* or 17px */

              letterSpacing: 2,

              color: 'white'
            }} eventKey={2} href="#memes">About_Us</NavLink>
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>
  );
}



export default Header;