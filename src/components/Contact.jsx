import React from 'react';

function Contact() {
  return (
    <div>
      <div>
        <style>{`
          .center {
            font-family: sans-serif;
            text-align: center;
            margin-top: 75px;
          }
          p {
            font-family: sans-serif;
            font-size: 50px;
            text-align: center;
            border: 2px solid black;
            margin-right: 20px;
            margin-left: 20px;
            background-color: teal;
            opacity: 0.6;
          }
        `}</style>
      </div>
      <div className="center">
        <h1>Contact</h1>
      </div>
      <div>
        <p>If you wish to contact any of our staff:</p>
        <p>Don't!</p>
      </div>
    </div>
  );
}

export default Contact;