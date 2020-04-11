import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
import NoMatch from './NoMatch'
import Layout from './Components/Layout'
import { NavigationBar } from './Components/NavigationBar'
import{Jumbotron} from './Components/Jumbotron'



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
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          </Router>
      </React.Fragment>

    );
  }
}


export default App;
