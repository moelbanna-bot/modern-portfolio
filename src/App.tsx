import { useState, lazy, Suspense } from "react";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Lazy load sections
const About = lazy(() => import("./components/About.tsx"));
const Skills = lazy(() => import("./components/Skills.tsx"));
const Projects = lazy(() => import("./components/Projects.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const scrollVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="app">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        expanded={isNavExpanded}
      >
        <Container>
          <Navbar.Brand href="#home">Mohamed Elbanna</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => setIsNavExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setIsNavExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" onClick={() => setIsNavExpanded(false)}>
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => setIsNavExpanded(false)}
              >
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setIsNavExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <motion.section
        id="home"
        className="hero-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="display-4 fw-bold">Hi, I'm Mohamed Elbanna</h1>
            <h2 className="h3 mb-4">Software Developer</h2>
            <div className="social-links">
              <a
                href="https://github.com/moelbanna-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-saeed-elbanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </motion.div>
        </Container>
      </motion.section>

      {[
        "about",
        "skills",
        "projects",
        "contact",
        "showcase",
        "timeline",
        "testimonials",
      ].map((section, index) => (
        <motion.section
          key={section}
          id={section}
          className={`py-5 ${index % 2 ? "bg-light" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Container>
            <Suspense
              fallback={<div className="text-center py-5">Loading...</div>}
            >
              {section === "about" && <About />}
              {section === "skills" && <Skills />}
              {section === "projects" && <Projects />}
              {section === "contact" && <Contact />}
            </Suspense>
          </Container>
        </motion.section>
      ))}

      <motion.footer
        className="py-4 bg-dark text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollVariants}
      >
        <Container>
          <p className="mb-0">
            &copy; 2024 Mohamed Elbanna. All rights reserved.
          </p>
        </Container>
      </motion.footer>
    </div>
  );
};

export default App;
