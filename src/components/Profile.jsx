import { Card, Row, Col, Badge } from 'react-bootstrap'

function Profile() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Row className="align-items-center g-3">
          <Col xs={12} md="auto" className="text-center">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              style={{ width: 128, height: 128, objectFit: 'cover', borderRadius: '50%' }}
            />
          </Col>
          <Col>
            <Card.Title className="mb-1">Ravina Mandal</Card.Title>
            <Card.Subtitle className="text-body-secondary mb-2">
              Developer • Designer • Learner
            </Card.Subtitle>
            <Card.Text>
              I’m a full‑stack web developer focused on crafting clean, responsive interfaces and solid
              back‑end solutions. I enjoy building projects that blend modern design with practical
              problem‑solving, and I’m especially interested in React, JavaScript, and UI/UX. My skills
              include React, Node.js, HTML/CSS, and working with databases, and I’m always exploring new
              tools to improve performance and user experience.
            </Card.Text>
            <div className="d-flex gap-2 flex-wrap">
              <Badge bg="primary">React</Badge>
              <Badge bg="success">Node</Badge>
              <Badge bg="warning" text="dark">UI/UX</Badge>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Profile

