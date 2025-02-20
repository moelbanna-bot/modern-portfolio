import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
    title: "Interactive Dashboard",
    description:
      "A dynamic dashboard with real-time data visualization, interactive charts, and customizable widgets using jQuery.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["jQuery", "HTML5", "CSS3", "Chart.js"],
    liveUrl: "https://b-dashboard.netlify.app/",
    githubUrl: "https://github.com/moelbanna-bot/dynamic-dashboard",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "An interactive Tic Tac Toe game with a modern UI, player vs player mode, and score tracking functionality.",
    image:
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["React", "TypeScript", "CSS3"],
    liveUrl: "https://xo-game2.netlify.app/",
    githubUrl: "https://github.com/moelbanna-bot/Tic-Tac_Toe",
  },
  {
    title: "E-learning Platform",
    description:
      "An interactive learning platform with quiz modules, progress tracking, and multimedia content delivery.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["jQuery", "AJAX", "Bootstrap"],
    liveUrl: "https://learning-easy.netlify.app/",
    githubUrl: "https://github.com/moelbanna-bot/E-Learning",
  },
  {
    title: "Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://lumiere-boutique.netlify.app/",
    githubUrl:
      "https://github.com/moelbanna-bot/Lumiere-Boutique-E-commerce-website-",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["React", "Bootstrap", "MySQL", "JavaScript"],
    liveUrl: "https://task-master.netlify.app/",
    githubUrl: "https://github.com/moelbanna-bot/task-master",
  },
  {
    title: "Real Estate Listings",
    description:
      "A modern real estate platform featuring property listings, advanced search filters, and interactive map integration.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["jQuery", "Bootstrap", "MySQL", "Python"],
    liveUrl: "https://dream-homes.netlify.app/",
    githubUrl: "https://github.com/moelbanna-bot/dream-homes",
  },
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
                        <span key={i} className="badge bg-primary me-2 mb-2">
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
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="me-2"
                          />
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
