import React, {useState}  from "react";
import '../App.css';
import {useHistory} from 'react-router-dom'


const EditCandidate = ({ candidate, candidatesArray,props }) => {
    const history = useHistory()
    const [candidatesState, setCandidates] = useState({
            candidate: candidate
        }
    )

    const changeYearsOfExperiance = (event) => {
        const candidate = {...candidatesState.candidate}
        candidate.yearsOfExperiance = event.target.value
        setCandidates({candidate:candidate})
    }
    
    const changeDateAdded = (event) => {
        const candidate = {...candidatesState.candidate}
        candidate.dateAdded = event.target.value
        setCandidates({candidate:candidate})
    }

    const changeStatus = (event) => {
        const candidate = {...candidatesState.candidate}
        candidate.status = event.target.value
        setCandidates({candidate:candidate})
    }

    const handleSubmit = event => {
        const candidate = {...candidatesState.candidate}
        const index = candidatesArray.findIndex(c => c.name === candidate.name)
        candidatesArray[index] = candidate
        event.preventDefault()
        history.push('/candidates')
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1>{candidate.name}</h1>
                <label>Years of Experiance</label>
                <input type='text' value={candidatesState.candidate.yearsOfExperiance} onChange={changeYearsOfExperiance}></input>
                <label>Date Added</label>
                <input type='text' value={candidatesState.candidate.dateAdded.toString()} onChange={changeDateAdded}></input>
                <label>Status</label>
                <input type='text' value={candidatesState.candidate.status} onChange={changeStatus}></input>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}
 
export default EditCandidate;