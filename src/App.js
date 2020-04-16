import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/UserComponent/Home';
import About from './Components/UserComponent/About';
import Menu from './Components/UserComponent/Menu';
import Contact from './Components/UserComponent/Contact';
import NoMatch from './Components/UserComponent/NoMatch';

import SignUpForm from './Components/UserComponent/SignUpForm';
import SignInForm from './Components/UserComponent/SignInForm';
import FoodForm from './Components/AdminComponent/FoodForm'
import Layout from './Components/pages/Layout';
import { NavigationBar } from './Components/pages/NavigationBar';
import { Jumbotron } from './Components/pages/Jumbotron';
import FoodItem from './Components/UserComponent/FoodItem';
import AdminItem from '../src/Components/AdminComponent/AdminFoodList';
import EditPage from './Components/AdminComponent/EditPage';
import Payment from './Components/UserComponent/Payment';
import Orders from './Components/UserComponent/Orders'
import Footer from './Components/pages/Footer';

import './App.css';


class App extends React.Component {

  render() {

    return (
      <React.Fragment>

        <Router>
        <NavigationBar />
        <Jumbotron/>
        <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={Menu} />
              <Route path='/items' component={AdminItem} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/fooditem/:id' component={FoodItem} />
              <Route path='/form' component={FoodForm} />
              <Route path='/payment' component={Payment} />    
              <Route path='/signin' component={SignInForm}/>
              <Route exact path='/signup' component={SignUpForm} />
              <Route path="/edit/:id" component={EditPage} />
              <Route path="/orders/:id"component={Orders}/>
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer/>
          </Router>
      </React.Fragment>

    );
  }
}


export default App;
