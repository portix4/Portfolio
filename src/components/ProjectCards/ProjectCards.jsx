import { useState } from 'react'
import { Card, Container, Button, Modal, Form, Carousel } from 'react-bootstrap'
import './ProjectCards.css'

const ProjectCards = ({ name, src, description, tools, URL }) => {
  const [showModal, setShowModal] = useState(false)

  const finalActions = () => {
    setShowModal(false)
  }

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
        </Button>{' '}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className='headerRequestClass'>
          <Modal.Title className='titleModalRequestClass'>{name} Project</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bodyRequestModalClass'>
          <Carousel>
            {async () => {
                for (const item of {src})
                {
                  await new Promise(resolve =>
                    setTimeout(() => {
                      <Carousel.Item>
                        <img src={item} />
                      </Carousel.Item>
                      resolve()
                    }, 1000)
                  )
                }
            }}

            {/* <Carousel.Item interval={2500}>
              <img src={src[0]} />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img src={src[1]} />
            </Carousel.Item> */}
            {/* {src.forEach(elm => {
              ;<Carousel.Item interval={1000}>
                <img src={elm} alt='picture' />
              </Carousel.Item>
            })} */}
          </Carousel>
          <Button className='requestButtonModal' onClick={finalActions}>
            No
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProjectCards
