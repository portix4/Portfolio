import './AboutMe.css'
import { Container, Row, Col } from 'react-bootstrap'
import * as CLASS_CONSTS from '../../const/languages-const'
import LogoJS from '../../assets/js-logo'
import HTML5Logo from '../../assets/html5-logo'
import CSS3Logo from '../../assets/css3-logo'
import BootstrapLogo from '../../assets/bootstrap-logo'
import PostmanLogo from '../../assets/postman-logo'

const AboutMe = () => {
  return (
    <div className='AboutMePage' id='aboutMe'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>About Me</h2>
          <div className='underline'></div>
          <p className='pitch'>
            Welcome to this space where you can discover more about me, my professional
            projects focused on Full Stack Web Developemnt
          </p>
        </div>
        <div className='centerDiv'>
          <Row>
            {/* <Col className='col-sm-12 col-md-6'> */}
            <Col md={6} className='who-i-am'>
              <h3>Who am I?</h3>
              <div className='my-description'>
                Tech enthusiast turned Front-End Developer, with a degree in Application
                Development and leadership experience as the head of the administrative
                department. Recently completed a Full-Stack Web Development bootcamp, I'm
                specialized in JavaScript, HTML5, CSS, NodeJS, Express, MongoDB and React.
                I'm looking forward to the opportunity to contribute to impactful projects
                with dedication and precision.
              </div>
            </Col>
            {/* <Col className='col-sm-12 col-md-6'> */}
            <Col md={6} className='my-skills'>
              <h3>My Skills</h3>
              <div className='logos'>
                <LogoJS />
                <HTML5Logo />
                <CSS3Logo />
                <BootstrapLogo />
                <PostmanLogo style={{ width: '80px' }} />
              </div>
              {/* <div className='my-skills2'>
                {CLASS_CONSTS.LANGUAGES.map(language => (
                  <div className='languages'>{language}</div>
                ))}
              </div> */}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default AboutMe
