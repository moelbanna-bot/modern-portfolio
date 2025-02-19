import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5">Get in Touch</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={5} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="h4 mb-4">Contact Information</h3>
              <div className="mb-4">
                <p className="mb-2">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Email: moelbanna880@gmail.com
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Phone: +20 1011677988
                </p>
              </div>
              <div className="social-links mb-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-dark"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3 text-dark"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </motion.div>
          </Col>
          <Col md={6} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  Send Message
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Contact;
