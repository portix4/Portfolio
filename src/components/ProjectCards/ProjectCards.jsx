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
        <span className='tools'>{tools}</span>
        <Button
          variant='secondary'
          className='buttonCard'
          size='sm'
          onClick={() => setShowModal(true)}
        >
          + details
        </Button>
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
        <hr />
        <div className='description'>{description}</div>
        <hr />
        <div className='link-and-close'>
          <Link to={URL} target='_blank'>
            <button>VIEW SITE</button>
          </Link>
          <button
            onClick={() => setShowModal(false)}
            type='button'
            class='btn-close'
            aria-label='Close'
          ></button>
        </div>
      </Modal>
    </div>
  )
}

export default ProjectCards
