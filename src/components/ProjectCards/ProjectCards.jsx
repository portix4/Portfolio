import { useState } from 'react'
import { Container } from 'react-bootstrap'

const ProjectCards = ({ name, prueba }) => {
  const [isFlipped, setFlipped] = useState(false)

  const handleMouseEnter = () => {
    setFlipped(true)
  }

  const handleMouseLeave = () => {
    setFlipped(false)
  }
  return (
    <Container>
      <div
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
              <p>{name}</p>
              <p>{prueba}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProjectCards
