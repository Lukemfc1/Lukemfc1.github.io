import React from 'react'
import {
    NavLink
  } from "react-router-dom";
  
const role = (props) => {
    const candidatesOfRole = (
        <div>
            <ul>
                {props.candidates.map((candidate, index) => {
                    return  <li key={index}>
                                <NavLink to={"/candidates/edit/" + candidate}> {candidate} </NavLink>
                            </li>
                        
                })}
            </ul>
        </div>
    )
    return(
        <div>
            <h1>{props.name}</h1>
            {candidatesOfRole}
        </div>
    )
}

export default role;