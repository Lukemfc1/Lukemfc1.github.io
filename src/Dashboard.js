import React from "react";
import Role from './Roles/Role'
import { NavLink } from "react-router-dom";

 
const home = props => {
    const rolesWithCandidates = (
        <div>
            {props.rolesArray.map((role, index) => {
                 return <Role name={role.name} candidates={role.candidates} key={index}></Role>
            })}
        </div>
    );

    return (
      <div>
        <h1>Dashboard</h1>
        {rolesWithCandidates}
        <h1><NavLink to={"/roles/newRole"}>Add new role +</NavLink></h1>
      </div>
    );
}
 
export default home;