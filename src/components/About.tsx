import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col md={6} className="mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://api.dicebear.com/6.x/avataaars/svg?seed=mohamed-elbanna&backgroundColor=b6e3f4&accessories=kurt&clothingColor=a7d&eyes=happy&facialHair=beardMedium&hair=short&hairColor=2c1b18&mouth=smile&skinColor=f8d25c"
              alt="Profile Avatar"
              roundedCircle
              fluid
              className="shadow"
              style={{ backgroundColor: "#f8f9fa" }}
            />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="display-4 mb-4">About Me</h2>
            <p className="lead mb-4">
              I'm a passionate software developer with a strong foundation in
              web technologies and a drive for creating innovative solutions.
              With expertise in modern frameworks and best practices, I
              specialize in building responsive and user-friendly applications.
            </p>
            <div className="mb-4">
              <h3 className="h4 mb-3">Professional Background</h3>
              <p>
                Throughout my career, I've worked on diverse projects ranging
                from e-commerce platforms to enterprise applications. I'm
                constantly learning and adapting to new technologies while
                maintaining a focus on writing clean, maintainable code.
              </p>
            </div>
            <div>
              <h3 className="h4 mb-3">Technical Expertise</h3>
              <ul className="list-unstyled">
                <li>✓ Frontend Development with React & JavaScript</li>
                <li>✓ Responsive Web Design & UI/UX</li>
                <li>✓ Database Management & API Design</li>
              </ul>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
