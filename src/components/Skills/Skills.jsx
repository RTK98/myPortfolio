import React from 'react';
import 'react-multi-carousel/lib/styles.css';
// import meter1 from "../../assets/img/meter1.svg";
// import meter2 from "../../assets/img/meter2.svg";
// import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
// import arrow1 from "../../assets/img/arrow1.svg";
// import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/skill-img.jpg"

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am proficient in HTML5 and CSS4
                my web design is attractive and responsive. my web design is attractive and responsive. I create dynamic and interactive user interfaces using my experience in React JS.
                Furthermore, my knowledge includes Node JS for effective server-side scripting and PHP for solid backend programming,
                ensuring smooth operation in various web apps.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%" style={{ "--value": "80" }}></div>
                  <h5>HTML5</h5>
                </div>
                {/* <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS4</h5>
                </div> */}
                <div className="item">
                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%" style={{ "--value": "80" }}></div>
                  <h5>CSS4</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%" style={{ "--value": "80" }}></div>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 75%"  style={{ "--value": "75" }}></div>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 75%" style={{ "--value": "75" }}></div>
                  <h5>React Js</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 75%" style={{ "--value": "75" }}></div>
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%"  style={{ "--value": "80" }}></div>
                  <h5>PHP</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%" style={{ "--value": "80" }}></div>
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 80%" style={{ "--value": "80" }}></div>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Progress: 50%"  style={{ "--value": "50" }}></div>
                  <h5>AWS</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="backgroundImage" />
    </section>
  )
}
export default Skills;