import { useMemo, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Project One',
    description: 'An example project description.',
    image: '/images/image2.png',
    type: 'Course',
    domain: 'FS',
    technologies: ['React', 'Vite'],
    link: 'https://resume-sigma-lilac-85.vercel.app/'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another example project.',
    image: '/images/image1.png',
    type: 'Personal',
    domain: 'DBMS',
    technologies: ['Node', 'PostgreSQL'],
    link: 'https://projj-45lt.vercel.app/'
  }
]

function Portfolio() {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedDomains, setSelectedDomains] = useState([])

  const types = ['Course', 'Personal']
  const domains = ['FS', 'DBMS']

  const filtered = useMemo(() => {
    return SAMPLE_PROJECTS.filter(p => (
      (selectedTypes.length === 0 || selectedTypes.includes(p.type)) &&
      (selectedDomains.length === 0 || selectedDomains.includes(p.domain))
    ))
  }, [selectedTypes, selectedDomains])

  const toggle = (list, value) => list.includes(value) ? list.filter(v => v !== value) : [...list, value]

  return (
    <Container>
      <h1 className="mb-3">Portfolio</h1>
      <Form className="mb-4">
        <Row>
          <Col md={6} className="mb-2">
            <strong>Filter by Project Type</strong>
            {types.map(t => (
              <Form.Check key={t} type="checkbox" label={t} checked={selectedTypes.includes(t)} onChange={() => setSelectedTypes(s => toggle(s, t))} />
            ))}
          </Col>
          <Col md={6} className="mb-2">
            <strong>Filter by Project Domain</strong>
            {domains.map(d => (
              <Form.Check key={d} type="checkbox" label={d} checked={selectedDomains.includes(d)} onChange={() => setSelectedDomains(s => toggle(s, d))} />
            ))}
          </Col>
        </Row>
      </Form>
      <Row className="g-3">
        {filtered.map(p => (
          <Col key={p.id} xs={12} md={6} lg={4}>
            <ProjectCard project={p} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Portfolio

