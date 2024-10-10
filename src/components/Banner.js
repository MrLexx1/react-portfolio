import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = useMemo(
    () => ["Web Developer", "Web Designer", "UI/UX Designer"],
    []
  );
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, toRotate, text, period]);

  const deltaRef = useRef(delta);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, deltaRef.current);

    return () => {
      clearInterval(ticker);
    };
  }, [loopNum, isDeleting, toRotate, text, period, tick]);

  return (
    <section className="Banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
            {({ isVisible }) => 
          <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Ilman Basir`}
              <span className="wrap">{text}</span>
            </h1>
            <p>I am a passionate web developer with a strong focus on</p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
