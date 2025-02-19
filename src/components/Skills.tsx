import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faPython,
  faGit,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faJs as faJquery } from "@fortawesome/free-brands-svg-icons";

interface SkillCardProps {
  icon: any;
  name: string;
  level: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => (
  <motion.div
    className="mb-4"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="p-4 bg-white rounded shadow-sm text-center">
      <FontAwesomeIcon icon={icon} size="3x" className="mb-3 text-primary" />
      <h3 className="h5 mb-2">{name}</h3>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: faHtml5, name: "HTML5", level: 90 },
    { icon: faCss3Alt, name: "CSS3", level: 85 },
    { icon: faJs, name: "JavaScript", level: 95 },
    { icon: faJquery, name: "jQuery", level: 85 },
    { icon: faReact, name: "React", level: 85 },
    { icon: faPython, name: "Python", level: 75 },
    { icon: faGit, name: "Git", level: 85 },
    { icon: faDocker, name: "Docker", level: 70 },
  ];

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-5">Technical Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Skills;
