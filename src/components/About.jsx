import React from 'react';

function About() {
  return (
    <div>
      <div>
        <style>{`
          .center {
            text-align: center;
            font-family: sans-serif;
            margin-top: 75px;
          }
          .about {
            font-family: sans-serif;
            text-align: center;
            font-size: 50px;
            border: 2px solid black;
            margin-right: 20px;
            margin-left: 20px;
            padding-right: 8px;
            padding-left: 8px;
            background-color: pink;
            opacity: 0.6;
          }
        `}</style>
      </div>
      <div className="center">
        <h1>About</h1>
      </div>
      <div className="about">
        <p>This Is forum created by Porter Savage. This forum was created for every user's benifit and entertainment.</p>
      </div>
    </div>
  );
}

export default About;