import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' className='p-3 bigboy'>
      <Container>
        <Navbar.Brand href="#home"><img src="./acm-logo.png" width={100} alt="ACM" /> </Navbar.Brand>
        <Navbar.Toggle className='nav-hover'/>
        <Navbar.Collapse className="justify-content-end text-secondary gap-3">
          <Nav.Link href="#home" className='nav-hover'>Home</Nav.Link>
          <Nav.Link href="#features" className='nav-hover'>Events</Nav.Link>
          <Nav.Link href="#sponsors" className='nav-hover'>Sponsors</Nav.Link>
          <Nav.Link href="#about" className='nav-hover'>About</Nav.Link>
          <Nav.Link href="#contact" className='nav-hover'>Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header