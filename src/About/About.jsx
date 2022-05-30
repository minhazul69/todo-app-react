import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is about section</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://thumbs.dreamstime.com/z/hand-writing-thank-you-many-languages-chalkboard-84667902.jpg"
            className="w-3/5"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
