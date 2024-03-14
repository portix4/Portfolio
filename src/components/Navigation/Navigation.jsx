import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
// import ProfilePic from './../../assets/profile-pic.jpeg'
import personalLogo from './../../assets/logo-portillo.png'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary header sticky-top'>
      <Container>
        <Navbar.Brand>
          <Row className='align-items-center'>
            <Col xs={6} md={3}>
              <Link to={'helloId'}>
                <img className='profile-pic' src={personalLogo} alt='profile picture' />
              </Link>
              <Link
                to={'helloId'}
                spy={true}
                // smooth={true}
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
          <Nav className='ms-auto'>
            <Link
              to={'helloId'}
              spy={true}
              // smooth={true}
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              HOME
            </Link>
            <Link
              to={'aboutMe'}
              spy={true}
              // smooth={true}
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
              // smooth={true}
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
              // smooth={true}
              // smooth='easeOutQuad'
              offset={-78}
              duration={1300}
              className='list-item link'
            >
              CONTACT
            </Link>

            <a
              href={
                'https://drive.google.com/file/d/1z1lrpjKA3jCMsv2ret9y9gSGa9N1QjB0/view?usp=sharing'
              }
              target='_blank'
              style={{ textDecoration: 'none' }}
            >
              <div className='textButton'>CV</div>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
