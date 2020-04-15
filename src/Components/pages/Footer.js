import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem } from 'react-bootstrap';

 const Footer=()=> {
    return (
      <footer style={style}>
        <Container >
  
  
          <div className="text-center small copyright">
            © Covid-19 Cuisine 2020 <br></br>
              <Link>miu.com</Link>
          </div>
        </Container>
      </footer>
    );
  }
  
export default Footer;
  

var style = {
    backgroundColor: "#222",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    color : "white",
    padding: "20px",
    position: "relative",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "40px",
    width: "100%",
};
