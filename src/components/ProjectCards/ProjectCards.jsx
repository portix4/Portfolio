import { useState } from 'react'
import { Card, Container, Button, Modal, Form, Carousel } from 'react-bootstrap'
import './ProjectCards.css'
import { Link } from 'react-router-dom'

const ProjectCards = ({ name, src, description, tools, URL }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='ProjectCards'>
      <div className='box1'>
        <img src={src[0]} alt={`${name} project`} />
      </div>

      <div className='box2'>
        <h3 className='mt-5'>{name}</h3>
        <div className='tools_button'>
          <span className='tools'>{tools}</span>
          <Button
            // variant='secondary'
            // className='buttonCard'
            className='textButton'
            // size='sm'
            onClick={() => setShowModal(true)}
          >
            + details
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className='headerRequestClass'>
          <Modal.Title className='titleModalRequestClass'>{name} Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bodyRequestModalClass'>
          <Carousel>
            {src.map((item, index) => (
              <Carousel.Item key={index} interval={2000}>
                <img src={item} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <div className='description'>{description}</div>
        <div className='link-and-close'>
          <Link to={URL} target='_blank' style={{ textDecoration: 'none' }}>
            <div className='textButton'>VIEW SITE</div>
          </Link>
          <button
            onClick={() => setShowModal(false)}
            type='button'
            className='btn-close'
            aria-label='Close'
          ></button>
        </div>
      </Modal>
    </div>
  )
}

export default ProjectCards
