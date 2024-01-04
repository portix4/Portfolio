import { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'

const ProjectCards = ({ name, src, prueba }) => {
  const [isFlipped, setFlipped] = useState(false)

  const handleMouseEnter = () => {
    setFlipped(true)
  }

  const handleMouseLeave = () => {
    setFlipped(false)
  }
  return (
    <div className='ProjectCard'>
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
            <Card className='text-center flip-card-back'>
              <Card.Header>{name}</Card.Header>
              <Card.Body>
                <Card.Title className='card_title'>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant='primary'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProjectCards
