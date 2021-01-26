import React, { Component} from "react";
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import ProceduresList from './components/procedures-list.cosmponent'
import Procedure from './components/procedure.component';
import CreateProcedure from './components/createProcedure.component';
import EditProcedure from './components/editProcedure.component';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">ASQ Saúde</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/newprocedure'} className="nav-link">Criar</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/procedures'} className="nav-link">Lista</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/newprocedure' component={ CreateProcedure } />
              <Route path='/editprocedure/:id' component={ EditProcedure  } />
              <Route path='/procedures' component={ Procedure } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;