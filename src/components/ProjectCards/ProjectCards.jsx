import { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import './ProjectCards.css'

const ProjectCards = ({ name, src, prueba }) => {
  return (
    <div class='ProjectCards'>
      <div class='box1'>
        <img src={src} alt={`${name} project`} />
      </div>

      <div class='box2'>
        <p>data 2</p>
      </div>
    </div>
  )
}

export default ProjectCards
