import React from "react";
import reactImg from "/images/react.png";
import webdevImg from "/images/webDev.png";
import nodeImg from "/images/node.png";

const Achievements = () => {
  return (
    <>
      <div className="certificate-heading">
        <p>My Certificates</p>
      </div>
      <section className="certificate-section">
        <div className="certificate-title">
          <p>Web Developer Certificate</p>
        </div>
        <div className="certificate-img">
          <img src={webdevImg} alt="Web devloper img" />
        </div>
        <p className="skills-title">Skills I Acquired.</p>
        <div className="certificate-skills">
          <div className="html-css">
            <div>
              <p>1. HTML (HyperText Markup Language)</p>
              <ul>
                <li>Structuring web pages</li>
                <li>Understanding and using HTML <br /> tags and attributes</li>
                <li>Creating forms and tables</li>
                <li>Implementing semantic HTML</li>
              </ul>
            </div>
            <div>
              <p>2. CSS (Cascading Style Sheets)</p>
              <ul>
                <li>Styling web pages</li>
                <li>Using selectors, properties, and values</li>
                <li>Box model and layout techniques</li>
                <li>Positioning elements (float, flexbox, grid)</li>
                <li>Styling forms and tables</li>
                <li>Responsive Design</li>
                <li>Designing web pages that work <br /> on various devices</li>
                <li>Media queries, Flexible grid layouts</li>
                <li>Responsive images and videos</li>
              </ul>
            </div>
          </div>
          <div className="tailwind-js">
            <div>
              <p>3. Tailwind CSS</p>
              <ul>
                <li>Using utility-first CSS framework</li>
                <li>Applying pre-defined classes for styling</li>
                <li>Customizing Tailwind configurations</li>
                <li>Implementing responsive designs<br /> with Tailwind</li>
              </ul>
            </div>
            <div>
              <p>5. JavaScript</p>
              <ul>
                <li>Basic syntax and programming concepts</li>
                <li>DOM manipulation</li>
                <li>Event handling, Form validation</li>
                <li>Fetching data with APIs (Fetch'API, Axios)</li>
                <li>Basic debugging and troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section className="certificate-section">
        <div className="certificate-title">
          <p>React.JS Certificate</p>
        </div>
        <div className="certificate-img">
          <img src={reactImg} alt="Web devloper img" />
        </div>
        <p className="skills-title">Skills I Acquired.</p>
        <div className="certificate-skills">
          <div className="react">
            <div>
              <p>1. React Concepts</p>
              <ul>
                <li>Understanding JSX (JavaScript XML)</li>
                <li>Component-based architecture</li>
                <li>State and props management,<br /> Lifecycle methods</li>
                <li>Handling events in React</li>
              </ul>
            </div>
            <div>
              <p>2. React Hooks</p>
              <ul>
                <li>Using useState for state management <br /> in functional components</li>
                <li>Using useEffect for side effects <br /> and lifecycle management</li>
                <li>Using useContext for context API</li>
                <li>Custom hooks creation</li>
                <li>Other hooks like useReducer, <br /> useMemo, and useCallback</li>
              </ul>
            </div>
          </div>
          <div className="redux">
            <div>
              <p>3. Redux Toolkit</p>
              <ul>
                <li>Setting up Redux store, <br />Creating slices and reducers</li>
                <li>Using Redux Thunk for <br /> asynchronous actions</li>
                <li>Connecting Redux with <br /> React components </li>
                <li>Using useSelector and useDispatch</li>
                <li>Middleware and advanced <br /> state management techniques</li>
              </ul>
            </div>
            <div>
            <p>5. Virtual DOM & <br /> Functional Components</p>
              <ul>
                <li>Understanding the concept <br /> of the virtual DOM</li>
                <li>How React uses the virtual DOM <br /> for efficient updates</li>
                <li>Reconciliation process in React</li>
                <li>Writing and using functional components</li>
                <li>Passing props to functional components</li>
                <li>Composition and reusability <br /> of functional components</li>
              </ul>
            </div>
          </div>
        </div>
      <hr />
      </section>
      <section className="certificate-section">
        <div className="certificate-title">
          <p>Node.JS Certificate</p>
        </div>
        <div className="certificate-img">
          <img src={nodeImg} alt="Web devloper img" />
        </div>
        <p className="skills-title">Skills I Acquired.</p>
        <div className="certificate-skills">
          <div className="node-one">
            <div>
              <p>1. Basic Node.js Skills</p>
              <ul>
                <li>Setting up a Node.js environment</li>
                <li>Understanding the Node.js runtime</li>
                <li>Using npm (Node Package Manager)</li>
                <li>Creating and managing modules,<br /> File system operations</li>
                <li>Handling asynchronous programming<br /> with promises and async/await</li>
              </ul>
            </div>
            <div>
              <p>2. Authentication & Authorization</p>
              <ul>
                <li>Implementing user authentication <br /> with JWT (JSON Web Tokens)</li>
                <li>Using OAuth for third-party authentication</li>
                <li>Managing user sessions and cookies</li>
                <li>Role-based access control (RBAC),<br /> Securing APIs and routes</li>
              </ul>
            </div>
          </div>
          <div className="node-two">
            <div>
              <p>3. Socket.IO</p>
              <ul>
                <li>Setting up a real-time<br />  communication server with Socket.IO</li>
                <li>Implementing real-time<br /> features like chat applications</li>
                <li>Handling events and<br /> broadcasting messages</li>
                <li>Managing socket connections <br /> and disconnections</li>
              </ul>
            </div>
            <div>
              <p>4. Routing</p>
              <ul>
                <li>Defining and managing routes</li>
                <li>Using route parameters and query string</li>
                <li>Handling different HTTP methods <br /> (GET, POST, PUT, DELETE, etc.)</li>
                <li>Creating nested and modular routers</li>
                <li>Integrating templating engines like EJS.</li>
                <li>Basic debugging and troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
