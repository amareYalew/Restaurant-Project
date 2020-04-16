import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {connect} from 'react-redux'
const Styles = styled.div`

.navbar{
    background-color :#222
}
.navbar-brand,
.navbar-nav 
.nav-link{
color:#bbb;
    &:hover {
color:white;
  }
 }
a,.nav-link{
    color:#bbb;
    &:hover {
        color:white;
    }
}
`;

class NavigationBar extends React.Component{
  
  render(){
console.log(this.props)

return  (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">COVID-Resturant</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/menu">Menu</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
         
            {this.props.reducer.role ==='admin'? (
             <Nav.Item>
            <Nav.Link>
              <Link to="/items">AdminMenu</Link>
            </Nav.Link>
            </Nav.Item>

            ) : null}
            
            {this.props.reducer.role ==='admin'? (
             <Nav.Item>
            <Nav.Link>
              <Link to="/form">AddMenu</Link>
            </Nav.Link>
            </Nav.Item>

            ) : null}
          
          <Nav.Item>
            <Nav.Link>
              <Link to="/orders/"></Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/signin">Sign In</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/signup"></Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </Styles >
)

  }
  
 

}


const mapStateToProps =(state)=>{

  return {...state}

}
export default connect(mapStateToProps)(NavigationBar) 