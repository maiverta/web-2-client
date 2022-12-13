import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillBagFill } from "react-icons/bs";
import { Badge } from 'react-bootstrap';
import './AppNavber.css';

function AppNavbar(props) {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Collapse></Navbar.Collapse>
          <Navbar.Brand className='home-page' onClick={() => props.onShowChart(false)}>תיקים</Navbar.Brand>
            <Nav.Link  onClick={() => props.onShowChart(true)}>
              <div className='iconClass'>
              <BsFillBagFill >   
            </BsFillBagFill>
            <span><Badge bg="secondary">{props.amount}</Badge></span>
              </div>
            </Nav.Link>
        </Container>
      </Navbar>
       );
}

export default AppNavbar;