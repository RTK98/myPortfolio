import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.png";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
import TrackVisibility from "react-on-screen";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Web Developer"]; // Move toRotate inside useEffect

    // Define the tick function here
    const tick = () => {
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
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting, period]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Rajindra Tharindu`}<br/>{" "}
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Web Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  I recently received a bachelor's degree in information technology from the University of Colombo School of Computing and am currently seeking a 
                  career as a Fresher Software Engineer with a focus on web development using PHP and the MERN Stack. 
                  I'm passionate about technology, and I work hard to learn about the newest developments in ICT and impart that knowledge to others. 
                  I enjoy taking on challenges and comes up with creative solutions since I have a solution-oriented mindset and do well in demanding situations. 
                  I'm motivated to work for a fast-paced company where I can use my knowledge,grow, and support the company's expansion. 
                  happy about the chance to contribute positively to the software engineering field.
                  </p>
                  {/* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;
