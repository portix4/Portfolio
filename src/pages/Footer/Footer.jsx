import Contact from '../../components/Contact/Contact'
import { Container } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'
import GithubLogo from '../../assets/github-logo'
import LinkedinLogo from '../../assets/linkedin-logo'
import GithubImg from './../../assets/github-mark.png'

const Footer = () => {
  return (
    <div className='Footer' id='footerId'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>Contact me</h2>
          <div className='underline mb-5'></div>
        </div>
        <div className='contactForm'>
          <Contact />
        </div>

        <div className='PostFooter'>
          <span className='postFooterText'>
            Feel free to connect with me on my social media platforms!
          </span>
          <div className='logosFooter'>
            {' '}
            <Link to={'https://github.com/portix4'} target='_blank' className='githubdiv'>
              <img src={GithubImg} alt='' />
            </Link>
            <Link
              to={'https://www.linkedin.com/in/pabloportillodev/'}
              target='_blank'
              className='linkedindiv'
            >
              <LinkedinLogo className='linkedingLogo' />
            </Link>
          </div>
          <span className='rights mt-4'>PABLO PORTILLO © 2024</span>
        </div>
      </Container>
    </div>
  )
}

export default Footer
