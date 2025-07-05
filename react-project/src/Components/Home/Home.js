import React from "react";
import './Home.css';

function Home() {

  const cardsObject = [
    {
      image: "https://cdn-icons-gif.flaticon.com/6569/6569161.gif",
      title: "Personalized Training Plans",
      cardBody: "Get a workout plan that's made just for you. Whether you're starting out or already fit."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172522.gif",
      title: "Flexible Schedule",
      cardBody: "Work out when it fits your life. No matter where you are, you can follow your plan on your time."
    },
    {
      image: "https://cdn-icons-gif.flaticon.com/6416/6416336.gif",
      title: "Expert Guidance",
      cardBody: "Test and confirm the market demand for your course by setting and evaluating pricing strategies."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172509.gif",
      title: "Nutrition Advice",
      cardBody: "Develop a preliminary version of your course to test its effectiveness and gather feedback."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/7211/7211788.gif",
      title: "Track Your Progress",
      cardBody: "Create and refine your course to ensure long-term viability and ongoing value for your audience."
    }, {
      image: "https://cdn-icons-gif.flaticon.com/6172/6172530.gif",
      title: "Long-Term Results",
      cardBody: "Get access to special bonuses designed to enhance your course creation journey and maximize."
    }
  ]

  const coursesObject = [{
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGRsL7h26w-Bg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711431970518?e=2147483647&v=beta&t=7MUoFdBoTt2bbPGQLIg36dcFCRHCwu1HyicK282aK6Y",
    title: "Full Stack Development",
    description: "Build real projects,and land your dream job as Full stack developer"
  },
  {
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png",
    title: "FrontEnd Development",
    description: "Experience the real-world of frontend development!"
  }, {
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
    title: "Back-End Development",
    description: "Prepare for a Back-End career with a real-world office simulation experience!"
  }]

  const resultObject = [{
    image: "https://d1lhfd3j3c8egz.cloudfront.net/themes/theme7/a2.jpeg",
    title: "Sarah Johnson",
    description: "The service exceeded all our expectations. From initial consultation to final delivery, the team demonstrated exceptional professionalism and attention to detail. The solution implemented has transformed our workflow efficiency by over 60%."
  },
  {
    image: "https://d1lhfd3j3c8egz.cloudfront.net/themes/theme7/a2.jpeg",
    title: "Michael Chen",
    description: "Working with this company has been a game-changer. Their innovative approach solved problems we didn't even know we had. The implementation was seamless and the ongoing support has been outstanding."
  }, {
    image: "https://d1lhfd3j3c8egz.cloudfront.net/themes/theme7/a2.jpeg",
    title: "Emily Rodriguez",
    description: "The level of professionalism is unmatched in the industry. They delivered our complex project on time and within budget while maintaining excellent communication throughout the process. The team's expertise was evident at every stage."
  }]

  const footerObj = [{
     image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj25zYqL4_MbUGibcRX7WIwwjdjbpmkXvRowmwp8vU5skTbv-94lDUdKTot8JngKPebwuffxdclhJpSfOSQtMwPwOuS8SGdCKtDJcT6qNM4mKo-8E2fMn7CLe5ye-THgRYAFhOWZtKeGkQ/s0-rw/Instagram+Logo+-+Download+Free+Vector+PNG.png"},
     {
      image: "https://thumbs.dreamstime.com/b/isolated-linkedin-logo-vector-illustration-icon-minsk-belarus-march-142909970.jpg"
     },
     {
      image: "https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png"
     }
  ]
const footLinks = [{
  link: "Privacy policy"
}, {
  link: "Terms of use"
},{
  link: "contact us"
},{
  link: "Refund policy"
}]
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
                <img className="top-right-img" src="https://d1lhfd3j3c8egz.cloudfront.net/themes/theme7/assett1.jpeg"/>
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

          <div className="container-fluid second-image-container">
            <div className="row">
              <div className="col-6">
                <img className="hardik-img" src="https://i1.wp.com/cdn.zeebiz.com/sites/default/files/2023/12/15/272829-hardik-pandya-reuters.jpg?strip=all" />
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

        <div className="cards-head-container">
          <h1 className="cards-heading">Start your fitness journey</h1>
          <div className="container container-main">
            <div className="row row-container">
              {cardsObject.map((cardItem, index) => {
                return (
                  <div class="card card-container" style={{ width: '22rem' }}>
                    <div className="card-img-class">
                      <img class="card-img-top card-img-class" src={cardItem.image} alt="image" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title card-title-container">{cardItem.title}</h5>
                      <p class="card-text card-paragraph-container">{cardItem.cardBody}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button className="cards-button">View All Courses</button>
        </div>



        <div className="courses-section">
          <h3 className="courses-heading">Start your fitness journey</h3>
          <div className="container">
            <div className="row row-course-container">
              {coursesObject.map((course, index) => {
                return (
                  <div class="card course-card" style={{ width: '380px' }}>
                    <div className="course-image">
                      <img class="card-img-top course-img" src={course.image} alt="image" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title course-title">{course.title}</h5>
                      <p class="card-tex course-description">{course.description}</p>
                      <a href="#" class="btn btn-primary courses-button">Register Now</a>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>


        <div className="real-results-container">
          <h3 className="real-result-heading">Real Results from Real People</h3>
          <div className="container">
            <div className="row row-res-container">
              {resultObject.map((resObj, index) => {
                return (
                  <div class="card result-card-container" style={{ width: '380px' }}>
                    <div className="real-img-container">
                       <img src={resObj.image} class="card-img-top res-img" alt="img" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title res-title">{resObj.title}</h5>
                      <p class="card-text res-paragraph">{resObj.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <button className="reslut-course-button">View All Courses</button>
        </div>

        <footer className="foot-container">
              <div className="footer-1">
                 <button className="footer-button">launched by</button>
                <div className="foot-img-container">
                {footerObj.map((foot) => {
                  return (
                    <img className="footer-images" src={foot.image} />
                  )
                })}
                </div>

                <ul className="links-container">
                {footLinks.map(flink => {
                  return (
                    <li>{flink.link}</li>
                  )
                })}
                </ul>

              </div>
        </footer>





      </div>
    </>
  )
}


export default Home;