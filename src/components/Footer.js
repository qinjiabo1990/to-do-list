import React from "react";


import { Row, Container } from "reactstrap";
import classes from './Footer.module.css';

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className={classes.right}>
            <span>
              © {new Date().getFullYear()}, Bob's Todo List
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;