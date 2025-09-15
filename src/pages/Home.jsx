import { Container, Row, Col } from 'react-bootstrap'
import Skills from '../components/Skills'
import Profile from '../components/Profile'

function Home() {
  return (
    <Container>
      <h1 className="mb-4">CA2: Personal Website using React</h1>
      <Row className="g-4 align-items-center">
        <Col xs={12} md={4} className="text-center">
          <img src="/images/profile.jpg" alt="My portrait" style={{ maxWidth: '100%', borderRadius: 12 }} />
        </Col>
        <Col xs={12} md={8}>
          <p>
            A personal website is meant to showcase your skills, your interests and your projects/portfolio.
          </p>
          <Profile />
        </Col>
      </Row>
      <Skills />
    </Container>
  )
}

export default Home

