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

const ProjectsPage = () => {
  const PROJECTS = [
    {
      name: 'IronSlug',
      src: [image1, image1b],
      description:
        '2D Arcade Game. In this project, the initial knowledge acquired with HTML, CSS, and JavaScript was applied. The challenge of this task is to work with the DOM and the creation of classes using JavaScript',
      tools: 'HMTL5 | CSS | Javascript',
      URL: 'https://portix4.github.io/IH-Project1-Game2D/'
    },
    {
      name: 'FlickMeet',
      src: [image2, image2b, image2c],
      description:
        'Movie rating website project that uses an external API as its primary database, integrates Express.js and MongoDB for server-side functionalities, and incorporates Handlebars for streamlined and dynamic views',
      tools:
        'HMTL5 | CSS | Javascript | Mongoose | Handlebars.js | Google Maps API | Postman | Express.js | JavaScript | MongoDB | Node.js',
      URL: 'https://flickmeet2.fly.dev/'
    },
    {
      name: 'Code Connect',
      src: [image3, image3b, image3c],
      description:
        'Online tutoring platform. Full Stack Application (MERN) using MongoDB for the database, Express and Node.js for the backend, and React for the frontend.',
      tools:
        'HMTL5 | CSS | Javascript | Mongoose | Google Maps API | Postman | Express.js | MongoDB | Node.js | ReactJS',
      URL: 'https://code-connectt.netlify.app/'
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
          {PROJECTS.map(elm => {
            return (
              <Col md={4} className='cards'>
                <ProjectCards {...elm} key={elm._id} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default ProjectsPage
