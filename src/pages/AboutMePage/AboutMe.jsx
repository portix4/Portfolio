import './AboutMe.css'
import { Container } from 'react-bootstrap'

const AboutMe = () => {
  return (
    <div className='AboutMePage' id='aboutMe'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>ABOUT ME</h2>
          <div className='underlineAboutMe'></div>
          <p className='pitch'>
            Welcome to this space where you can discover more about me, my professional
            projects focused on Full Stack Web Developemnt
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AboutMe
