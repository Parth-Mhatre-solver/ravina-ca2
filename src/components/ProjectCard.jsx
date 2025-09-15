import { Card, Badge } from 'react-bootstrap'

function ProjectCard({ project }) {
  return (
    <Card className="h-100 shadow-sm">
      {project.image && (
        <Card.Img variant="top" src={project.image} alt={project.title} style={{ objectFit: 'cover', height: 160 }} />
      )}
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="d-flex gap-2 flex-wrap mb-2">
          <Badge bg="info" text="dark">{project.type}</Badge>
          <Badge bg="secondary">{project.domain}</Badge>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          {project.technologies.map((t) => (
            <Badge key={t} bg="light" text="dark">{t}</Badge>
          ))}
        </div>
        {project.link && (
          <div className="mt-2">
            <a href={project.link} target="_blank" rel="noreferrer">Code/Project Link</a>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProjectCard

