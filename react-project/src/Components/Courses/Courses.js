import React from "react";
import './Courses.css';
import CoursesSectionCode from "../CoursesSectionCode/CoursesSectionCode";
import FooterSectionCode from "../FooterSectionCode/FooterSectionCode";
function Courses() {

  return (
    <>
    <div className="course-section-container">
      <div className="core-course-container">
        <CoursesSectionCode/>
      </div>
      <div className="core-footer-container">
        <FooterSectionCode/>
      </div>
    </div>
    </>
  )
}


export default Courses;