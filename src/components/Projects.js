import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const Projects = [
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              A collection of projects that showcase my skills and expertise in
              web development, mobile app development, and software engineering.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {Projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem impus</Tab.Pane>
                <Tab.Pane eventKey="third">lorem impus</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt=""></img>
    </section>
  );
};
