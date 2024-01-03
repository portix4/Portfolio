import { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import image1 from './../../assets/IronSlugPlay1.png'

const ProjectCards = ({ name, src, prueba }) => {
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
          <Card className='flip-card-front'>
            <Card.Img src={src} />
          </Card>
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
