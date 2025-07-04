import React from "react";
import './Home.css';

function Home() {

  const cardsObject = [
    {
      image: "",
      title: "Personalized Training Plans",
      cardBody: "Get a workout plan that's made just for you. Whether you're starting out or already fit."
    }, {
      image: "",
      title: "Flexible Schedule",
      cardBody: "Work out when it fits your life. No matter where you are, you can follow your plan on your time."
    },
    {
      image: "",
      title: "Expert Guidance",
      cardBody: "Test and confirm the market demand for your course by setting and evaluating pricing strategies."
    }, {
      image: "",
      title: "Nutrition Advice",
      cardBody: "Develop a preliminary version of your course to test its effectiveness and gather feedback."
    }, {
      image: "",
      title: "Track Your Progress",
      cardBody: "Create and refine your course to ensure long-term viability and ongoing value for your audience."
    }, {
      image: "",
      title: "Long-Term Results",
      cardBody: "Get access to special bonuses designed to enhance your course creation journey and maximize."
    }
  ]

  return (
    <>
      <div className="main-container">
        <div className="container container-top">
          <div className="row">
            <div className="col-6">
              <div className="top-left-section">
                <h1 className="top-left-heading">Fitness School of
                  the Future</h1>
                <p className="top-left-paragraph">Find your flow with a helping hand from Jane Doe,
                  in her yoga course for beginners.</p>
                <button className="top-left-courses-button">View All Coures</button>
              </div>
            </div>
            <div className="col-6">
              <div className="top-right-section">
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="second-container-main">
          <div className="second-container">
            <div className="second-left-section">
              <h1 className="first-section-count">500+</h1>
              <p className="first-section-paragraph">clients who've successfully reached their fitness goals, it's your turn to experience real results.</p>
            </div>
            <div className="second-middle-section">
              <h1 className="second-section-count">4.5/5</h1>
              <p className="second-section-paragraph">from more than 200 reviews. Clients leave feeling strong and motivated.</p>
            </div>
            <div className="second-right-section">
              <h1 className="third-section-count">98%</h1>
              <p className="third-section-paragraph">clients achieve their fitness goals. Whether it's building strength, losing weight.</p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
                <h1>Image</h1>
              </div>

              <div className="col-6">
                <h1 className="second-right-heading">Meet Hardik Pandya</h1>
                <p className="second-right-paragraph">Our body does not get tired — our mind gets tired. So many times in my life, the difference between where I was and where I was able to push my limits was always the fact that, when my mind got tired, I would tell my body to just push — because you will always have extra effort left in your body.
                </p>
                <p className="second-right-paragraph2">
                  The difference is, if you do 20 and I do 20, we are on the same level. But if I push to 25, and I challenge my mind — next time I’m going to do 25, then the next time 30 — that is when I start to level up. That’s when I’m putting in the “wow,” you know, getting a little level up on that.</p>
              </div>

            </div>

          </div>
        </div>


        <div className="container container-main">
          <div className="row row-container">
            {cardsObject.map((cardItem, index) => {
              return (
              
              )
            })}

          </div>

        </div>




      </div>
    </>
  )
}


export default Home;