import React,{useState} from "react";

 
const newRole = props => {
    const [newRoleState, setRole] = useState({
        role: {name: "", candidates: []}
    })

    const handleNameChange = event => {
        const role = {...newRoleState.role}
        role.name = event.target.value
        setRole({role:role})
    }

    const handleSubmit = event => {
        const role = newRoleState.role
        props.rolesArray.push(role)
        event.preventDefault()
        props.history.push("/")
    }
    const handleCandidatesChange = event => {
        const role = {...newRoleState.role}
        const candidates = event.target.value.split(',')
        role.candidates = candidates
        setRole({role:role})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>New Role</h1>
                <label>
                    Name:
                    <input type="text" value={newRoleState.role.name} onChange={handleNameChange}></input>
                </label>
                <label>
                    Candidates(Comma seperated):
                    <input type="text" value={newRoleState.role.candidates} onChange={handleCandidatesChange}></input>
                </label>
                
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
 
export default newRole;