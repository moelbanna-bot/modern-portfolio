import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Interactive Dashboard',
    description: 'A dynamic dashboard with real-time data visualization, interactive charts, and customizable widgets using jQuery.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['jQuery', 'HTML5', 'CSS3', 'Chart.js'],
    liveUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/yourusername/interactive-dashboard'
  },
  {
    title: 'Content Management System',
    description: 'A user-friendly CMS with drag-and-drop functionality, rich text editing, and dynamic content updates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['jQuery', 'Bootstrap', 'MySQL', 'PHP'],
    liveUrl: 'https://cms-demo.com',
    githubUrl: 'https://github.com/yourusername/jquery-cms'
  },
  {
    title: 'E-learning Platform',
    description: 'An interactive learning platform with quiz modules, progress tracking, and multimedia content delivery.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=400&q=80',
    technologies: ['jQuery', 'AJAX', 'Bootstrap', 'PHP'],
    liveUrl: 'https://elearning-demo.com',
    githubUrl: 'https://github.com/yourusername/elearning-platform'
  }
];

const Projects = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="badge bg-primary me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary me-2"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          <FontAwesomeIcon icon={faGithub} className="me-2" />
                          Code
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Projects;