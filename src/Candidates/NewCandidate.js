import React, {useState} from 'react'
import Candidate from './Candidate';

const newCandidate = props => {
    const [newCandidateState, setCandidate] = useState({
        candidate: new Candidate("",0,null,"")
    })

    const handleNameChange = event => {
        const candidate = {...newCandidateState.candidate}
        candidate.name = event.target.value
        setCandidate({candidate:candidate})
    }

    const handleYearsChange = event => {
        const candidate = {...newCandidateState.candidate}
        candidate.yearsOfExperiance = event.target.value
        setCandidate({candidate:candidate})
    }

    const handleStatusChange = event => {
        const candidate = {...newCandidateState.candidate}
        candidate.status = event.target.value
        setCandidate({candidate:candidate})
    }

    const handleSubmit = event => {
        const candidate = {...newCandidateState.candidate}
        candidate.dateAdded = Date.now()
        setCandidate({candidate:candidate})
        props.candidatesArray.push(candidate)
        event.preventDefault()
        props.history.push("/candidates")
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>New Candidate</h1>
                <label>
                    Name:
                    <input type="text" value={newCandidateState.candidate.name} onChange={handleNameChange}></input>
                </label>
                <label>
                    Years of Experiance:
                    <input type="number" value={newCandidateState.candidate.yearsOfExperiance} onChange={handleYearsChange}></input>
                </label>
                <label>
                    Status:
                    <input type="text" value={newCandidateState.candidate.status} onChange={handleStatusChange}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default newCandidate;
 