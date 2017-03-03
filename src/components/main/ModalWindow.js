import React from 'react'

import { Modal } from 'react-bootstrap'

import ContactForm from './ContactForm'

import '../../styles/ModalWindow.css'

const ModalWindow = () => (
  <Modal show={true}>
    <Modal.Header>
      <Modal.Title>Request a call back</Modal.Title>
      <p>Our team will explain everything to you</p>
    </Modal.Header>
    <Modal.Body>
      <ContactForm />
    </Modal.Body>
  </Modal>
)

export default ModalWindow
