import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
import ProfilePic from './../../assets/profile-pic.jpeg'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary header sticky-top'>
      <Container>
        <Navbar.Brand href='#home'>
          <Row className='align-items-center'>
            <Col xs={6} md={3} className='mb-3'>
              <div className='logo'>
                <img className='profile-pic' src={ProfilePic} alt='profile picture' />
              </div>
            </Col>
            <Col xs={6} md={9} className='mt-3'>
              <Link
                to={'helloId'}
                spy={true}
                smooth={true}
                offset={-78}
                duration={800}
                className='pablo link'
                style={{ color: '#333333' }}
              >
                PABLO PORTILLO
              </Link>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto mt-3'>
            <Link
              to={'helloId'}
              spy={true}
              smooth={true}
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              HOME
            </Link>
            <Link
              to={'aboutMe'}
              spy={true}
              smooth={true}
              // smooth='easeOutQuad'
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              ABOUT
            </Link>
            <Link
              to={'projects'}
              spy={true}
              smooth={true}
              // smooth='easeOutQuad'
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              PROJECTS
            </Link>
            <Link
              to={'footerId'}
              spy={true}
              smooth={true}
              // smooth='easeOutQuad'
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
