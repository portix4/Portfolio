import { Container, Col, Row } from 'react-bootstrap'
import './ProjectsPage.css'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import image1 from './../../assets/IronSlugPlay1.png'

const ProjectsPage = () => {
  const PROJECTS = [
    { name: 'IronSlug', src: image1, prueba: 'prueba1' },
    { name: 'FlickMeet', src: image1, prueba: 'prueba2' },
    { name: 'Code Conect', src: image1, prueba: 'prueba3' },
    { name: 'Code Conect', src: image1, prueba: 'prueba3' },
    { name: 'Code Conect2', src: image1, prueba: 'prueba4' }
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
