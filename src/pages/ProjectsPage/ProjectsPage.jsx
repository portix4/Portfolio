import { Container, Col, Row } from 'react-bootstrap'
import './ProjectsPage.css'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import image1 from './../../assets/IronSlugPlay1.png'
import image1b from './../../assets/IronSlugStart.png'
import image2 from './../../assets/FlickMeet1.png'
import image2b from './../../assets/FlickMeet2.png'
import image2c from './../../assets/FlickMeet3.png'
import image3 from './../../assets/CodeConnect1.png'
import image3b from './../../assets/CodeConnect2.png'
import image3c from './../../assets/CodeConnect3.png'
import image4a from './../../asset/SociaLink1.png'
import image4b from './../../asset/SociaLink2.png'
import image4c from './../../asset/SociaLink3.png'

const ProjectsPage = () => {
  const PROJECTS = [
    {
      name: 'IronSlug',
      src: [image1, image1b],
      description:
        '2D Arcade Game. In this project, the initial knowledge acquired with HTML, CSS, and JavaScript was applied. The challenge of this task is to work with the DOM and the creation of classes using JavaScript',
      tools: 'HTML5 | CSS | Javascript',
      URL: 'https://portix4.github.io/IH-Project1-Game2D/'
    },
    {
      name: 'FlickMeet',
      src: [image2, image2b, image2c],
      description:
        'Movie rating website project that uses an external API as its primary database, integrates Express.js and MongoDB for server-side functionalities, and incorporates Handlebars for streamlined and dynamic views',
      tools:
        'HTML5 | CSS | Javascript | Mongoose | Handlebars.js | Postman | Express.js | MongoDB | Node.js',
      URL: 'https://flickmeet2.fly.dev/'
    },
    {
      name: 'Code Connect',
      src: [image3, image3b, image3c],
      description:
        'Online tutoring platform. Full Stack Application (MERN) using MongoDB for the database, Express and Node.js for the backend, and React for the frontend.',
      tools:
        'HTML5 | CSS | Javascript | Mongoose | Postman | Express.js | MongoDB | Node.js | React.js',
      URL: 'https://code-connectt.netlify.app/'
    },
    {
      name: 'SociaLink',
      src: [image4a, image4b, image4c],
      description:
        'Online tutoring platform. Full Stack Application (MERN) using MongoDB for the database, Express and Node.js for the backend, and React for the frontend.',
      tools:
        'Vibrant social network hub. MERN-based platform leveraging MongoDB, Express, Node.js, and React. Connect, share, and explore in our dynamic community!',
      URL: 'https://thesocialink.netlify.app/'
    }
  ]

  return (
    <div className='Projects' id='projects'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>Projects</h2>
          <div className='underline mb-5'></div>
        </div>
        <Row className='ProjectsCards'>
          {PROJECTS.map((elm, index) => {
            return (
              <Col key={index} md={4} className='cards'>
                <ProjectCards {...elm} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProjectsPage
