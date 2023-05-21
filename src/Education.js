import "./CSS/education.css";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="education">
      <h2>MY EDUCATION</h2>
      <VerticalTimeline lineColor="#79E0EE">
        <VerticalTimelineElement iconStyle={{ background: "#99A98F" }}>
          <div className="ed1">
            <h4>SECONDARY EDUCATION</h4>
            <p>VIDYODAYA SCHOOL,THEVAKKAL</p>
            <p>GRADE : 9.68</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: "#E76161" }}>
          <div className="ed2">
            <h4>SENIOR SECONDARY EDUCATION</h4>
            <p>VIDYODAYA SCHOOL,THEVAKKAL</p>
            <p>GRADE : 9.68</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement iconStyle={{ background: "#9384D1" }}>
          <div className="ed3">
            <h4>GRADUATION</h4>
            <p>GOVERNMENT MODEL ENGINEERING COLLEGE</p>
            <p>GRADE : 9.59</p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
