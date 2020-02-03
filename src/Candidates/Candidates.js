import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import '../App.css'

class Candidates extends Component {

    handleDelete = (candidate) => {
      this.props.removeCandidate(candidate);
    }
    
    printCandidates = () => {
      const items = []
        for(const [index, value] of this.props.candidatesArray.entries()){
            items.push(
              <div className="nameWithDeleteButton" key={index}>
                <li >
                <NavLink to={"/candidates/edit/" + value.name}> {value.name} </NavLink>
                <input type="button" value="Delete" onClick={() => this.handleDelete(value)}></input>
                </li>
              </div>
              
              
            )
        }
      return items
    }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>{this.printCandidates()}</h1>
          <h1><NavLink to={"/candidates/newCandidate"}>Add new candidate +</NavLink></h1>
        </div>
        
      </HashRouter>
      
    );
  }
}
 
export default Candidates;