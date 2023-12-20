import { Container } from 'react-bootstrap'
import './HelloPage.css'
import { Link } from 'react-scroll'
import AboutMe from '../AboutMePage/AboutMe'

const HelloPage = () => {
  return (
    <div className='HelloPageDiv' id='helloId'>
      <Container>
        <p className='section-hello-i-m'>
          <span className='text-wrapper'>Hola!, I&#39;m </span>
          <span className='span'>Pablo Portillo</span>
          <span className='text-wrapper'>
            .<br />
            I&#39;m a full-stack web developer.
          </span>
        </p>
        <div className='portfolioButton'>
          <Link
            to='aboutMe'
            className='textButton'
            spy={true}
            smooth={true}
            offset={-78}
            duration={500}
          >
            See my portfolio
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default HelloPage
