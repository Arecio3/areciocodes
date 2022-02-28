import React from "react";
import "./about.css";
import ME from "../../assets/pexels-markus-spiske-965345.jpg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { GiAtom } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2 Years Coding</small>
            </article>
            <article className="about__card">
              <ImUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>5 Clients</small>
            </article>
            <article className="about__card">
              <GiAtom className="about__icon"/>
              <h5>Projects</h5>
              <small>13 Projects Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam consectetur odit deleniti natus possimus, blanditiis vel fuga officia voluptatum sequi porro ut reiciendis est dignissimos deserunt expedita, magnam amet perspiciatis.</p>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default About;
