import React from "react";
import MyMedia from "./Media";
import ReactRotatingText from "react-rotating-text";

export default function Body() {
  return (
    <div className="body">
      <section className="aboutme">
        <h1 className="l2">About me</h1>
        <hr className="horazontal-line" />

        <img className="my-image" src={require("../images/profile.jpg")} />
        <p className="typewriter">
          <ReactRotatingText
            items={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "jQuery",
              "React js",
              "Redux",
              "Node.js",
            ]}
          />
        </p>

        <div className="hey">
          <p>
            Hey, I am Yewbdar Girma. I live in Austin Texas. I have a bachelor’s
            degree in computer science. I am a software developer/front-end with
            over 5 years of experience developing a business-critical web
            application for a company.
          </p>
          <p>
            Easy to work with diverse teams to implement projects.Passionate to
            convert a design to code and build a sophisticated web-based
            applications.
          </p>
          <p>
            Self-starter to learn and adopt new technologies and always strive
            to solve business problems with practical and reusable solutions.
          </p>
          <p>
            Experienced in building applications using.
            <br />
            <b>Front-end :</b> HTML5, CSS3,JavaScript, jQuery, AJAX, React
            js,React hook,Redux ,Bootstrap,Restful api,Graphql, JSON <br />
            <b>Version-Control:</b> Github. <br />
            {/* <b>Backend:</b>
            Node.js, Express js, NPM.
            <b>Database:</b>MySQL, Mongodb. */}
          </p>
          {/*<p>*/}
          {/*English is my second language and if you hear broken English around you that is probably*/}
          {/*me &#x1F600;*/}
          {/*</p>*/}
        </div>
      </section>
      {/*<MyMedia/>*/}
    </div>
  );
}
