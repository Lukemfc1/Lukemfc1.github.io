import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Candidates from "./Candidates/Candidates";
import EditCandidate from "./Candidates/EditCandidate";
import Candidate from './Candidates/Candidate'
import NewCandidate from './Candidates/NewCandidate'
import NewRole from './Roles/NewRole'

class App extends Component {
  state = {
   candidates: [
    new Candidate('Luke Harland', 1 , "2/2/2019", "Hired"), 
    new Candidate('Alex Dunsmore', 4 , "12/1/2020", "Coderpad Pending") , 
    new Candidate('Thomas Gordon', 5 , "21/4/2016", "Hired"),
    new Candidate('Connie Leighton', 2, "26/1/2019", "Interview Pending"),
    new Candidate('Matt Ward', 0, "30/1/2020", "Interview Pending"),
    ],
    roles: [
      {name: 'Java Dev' , candidates: ['Alex Dunsmore']},
      {name: '.NET Dev' , candidates: ['Alex Dunsmore', 'Connie Leighton' , 'Matt Ward']}
    ]
  }

  removeCandidate = (candidate) => {
    const candidateIndex = this.state.candidates.findIndex(c => c.name === candidate.name);

    const newCandidates = [...this.state.candidates];
    newCandidates.splice(candidateIndex, 1);

    this.setState({
      candidates: newCandidates
    });
  }

  render() {
    return (
      <HashRouter>
      <div className="App">
        <ul className="header">
        <li>
            <NavLink exact to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink exact to="/candidates">Candidate List</NavLink>
          </li>
        </ul>
        <div className="content">
            <Route exact path="/" render={(props) => <Dashboard {...props} rolesArray={this.state.roles} /> }/>
            <Route exact path="/candidates" render={(props) => <Candidates {...props} candidatesArray={this.state.candidates} removeCandidate={this.removeCandidate}/>}/>
            <Route path="/candidates/newCandidate" render={(props) => <NewCandidate {...props} candidatesArray={this.state.candidates} /> }></Route>
            <Route exact path="/candidates/edit/:name" render={({ match }) => (
              <EditCandidate candidatesArray={this.state.candidates} candidate={this.state.candidates.find(c => c.name === match.params.name)}/>
            )} />
            <Route exact path="/roles/newRole" render={(props) => <NewRole {...props} rolesArray={this.state.roles}/>}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
