import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Form, Container, Button } from 'react-bootstrap'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)

  const sendEmail = e => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        result => {
          setStateMessage(`Message sent! I'll respond you soon!`)
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        },
        error => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage(null)
          }, 5000)
        }
      )
    e.target.reset()
  }

  return (
    <div className='Contact'>
      <Container>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Name' name='user_name' />
            <Form.Label>Enter email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' name='user_email' />
            <Form.Label>Your Message</Form.Label>
            <Form.Control type='textarea' name='message' placeholder='Your message' />
          </Form.Group>
          <Button variant='primary' type='submit' value='Send' disabled={isSubmitting}>
            Submit
          </Button>
          {stateMessage && <p>{stateMessage}</p>}
        </Form>
      </Container>

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form> */}
    </div>
  )
}

export default Contact
