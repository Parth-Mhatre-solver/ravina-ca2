import { Card, Row, Col, Badge } from 'react-bootstrap'

const webDevSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Responsive Design',
  'Web Development Best Practices',
  'React',
  'Node.js',
  'Figma',
]

const programmingSkills = [
  'Python',
  'Java (Basic)',
  'JavaScript',
  'Problem Solving',
  'Algorithm & Data Structures',
  'PHP',
  'SQL',
  'DBMS',
]

function Skills() {
  return (
    <Card className="shadow-sm mt-4">
      <Card.Body>
        <Card.Title className="mb-3">Skills</Card.Title>
        <Row className="g-3">
          <Col md={6}>
            <h6 className="text-body-secondary">Web Development</h6>
            <div className="d-flex flex-wrap gap-2">
              {webDevSkills.map((s) => (
                <Badge key={s} bg="light" text="dark">{s}</Badge>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h6 className="text-body-secondary">Programming Languages</h6>
            <div className="d-flex flex-wrap gap-2">
              {programmingSkills.map((s) => (
                <Badge key={s} bg="light" text="dark">{s}</Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Skills

