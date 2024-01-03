import { Container } from 'react-bootstrap'
import './Projects.css'
import { useState } from 'react'
import foto from './../../assets/profile-pic.jpeg'

const Projects = () => {
  const [isFlipped, setFlipped] = useState(false)

  const handleMouseEnter = () => {
    setFlipped(true)
  }

  const handleMouseLeave = () => {
    setFlipped(false)
  }

  return (
    <div className='Projects' id='projects'>
      <Container>
        <div className='firstContainer'>
          <h2 className='pt-4'>Projects</h2>
          <div className='underline'></div>
        </div>
        <div
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              {/* Contenido de la cara frontal, como la imagen */}
              <img src={foto} alt='Imagen' />
            </div>
            <div className='flip-card-back'>
              {/* Contenido de la cara trasera, como el texto */}
              <div style={{ backgroundColor: 'red' }}>
                <p>Texto en la cara trasera</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
