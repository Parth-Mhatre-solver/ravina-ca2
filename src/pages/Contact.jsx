import { Container, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <Container>
      <h1 className="mb-3">Contact</h1>
      <Form className="" onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="you@example.com" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="How can I help?" required />
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  )
}

export default Contact

