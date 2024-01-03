import { Container, Col } from 'react-bootstrap'
import './Projects.css'
import { useState } from 'react'
import foto from './../../assets/profile-pic.jpeg'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import * as PROJECT_CONSTS from './../../const/projects-const'

const Projects = () => {
  return (
    <div className='Projects' id='projects'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>Projects</h2>
          <div className='underline'></div>
        </div>
        {PROJECT_CONSTS.PROJECTS.map(elm => {
          return (
            <Col md={4}>
              <ProjectCards {...elm} key={elm._id} />
            </Col>
          )
        })}

        {/* <div
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <div style={{ backgroundColor: 'green' }}>
                <p>Texto en la cara delantera</p>
              </div>
            </div>
            <div className='flip-card-back'>
              <div style={{ backgroundColor: 'red' }}>
                <p>Texto en la cara trasera</p>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  )
}

export default Projects
