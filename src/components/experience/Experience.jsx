import React from "react";
import "./experience.css";
import {
  BsFillPatchCheckFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>Professional Experience</h2>
          <div className="experience__content">
            <article className="experience__details">
              <a
                href="https://valuehaulers.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsFillArrowUpRightCircleFill className="experience__details-icon"/>
              </a>
              <div>
              <h4>Value Haulers</h4>
              <h6 className="text-light">Nationwide Trucking Business</h6>
              </div>
            </article>
            <article className="experience__details">
              <a
                href="https://hummingbirdlawn.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsFillArrowUpRightCircleFill className="experience__details-icon"/>
              </a>
              <div>
              <h4>Hummingbird Lawn Services</h4>
              <h6 className="text-light">Local Landscaping Business</h6>
              </div>
            </article>
            <article className="experience__details">
              <a
                href="https://areciocodes.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <BsFillArrowUpRightCircleFill className="experience__details-icon"/>
              </a>
              <div>
              <h4>ArecioCodes</h4>
              <h6 className="text-light">Portfolio Website</h6>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h2>Technical Experience</h2>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">JavaScript Framework</small>
              </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Python</h4>
              <small className="text-light">OOP Language</small>
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Back-End JS Framework</small>
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">Cascading Stylesheets</small>
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Next JS</h4>
              <small className="text-light">React Framework</small>
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Mongo DB</h4>
              <small className="text-light">Database Query</small>
            </div>
            </article>
            <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>SQL</h4>
              <small className="text-light">Database Management</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
