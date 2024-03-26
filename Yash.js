import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordion from 'react-bootstrap/Accordion';
export default function Yash() {
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}> {/* Set background color for the entire page */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ backgroundColor: 'red', color: 'white' }}>
            Here is the First title
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: 'red', fontSize: '16px', lineHeight: '1.5' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ backgroundColor: 'blue', color: 'white' }}>
            Here is the second title
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: 'blue', fontSize: '14px', lineHeight: '1.4' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      
        <Accordion.Item eventKey="2">
          <Accordion.Header style={{ backgroundColor: 'green', color: 'white' }}>
            Here is the third title
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: 'green', fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    
  );
};
