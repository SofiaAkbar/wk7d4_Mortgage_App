import React, {useState} from 'react';
import MaxValue from "./MaxValue"

const Form = () => {

    const [person1Salary, setPerson1Salary] = useState("");
    const [person2Salary, setPerson2Salary] = useState("");
    const [jointSalary, setJointSalary] = useState(0);



    const handlePerson1SalaryChange = (event) => {
        setPerson1Salary(event.target.value);
    }
    const handlePerson2SalaryChange = (event) => {
        setPerson2Salary(event.target.value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
        
        console.log("form submitted");

        if (!person1Salary || !person2Salary){
            return
        }
        setJointSalary(parseInt(person1Salary) + parseInt(person2Salary));
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <label for='person1-salary' ></label>
                    <input 
                        id="person1-salary"
                        type='text'
                        placeholder='Person 1 Annual Salary'
                        value={person1Salary}
                        onChange={handlePerson1SalaryChange}
                        required
                    />
                    <label for='person2-salary' ></label>
                    <input 
                        id="person2-salary"
                        type='text'
                        placeholder='Person 2 Annual Salary'
                        onChange={handlePerson2SalaryChange}
                        value={person2Salary}
                    />
                    <input type='submit' value="Calculate"/>
                </fieldset>
            </form>


            <p>P1 salary = {person1Salary}</p>
            <p>p2 salary = {person2Salary}</p>
            <p>joint salary = {jointSalary}</p>

            <MaxValue jointSalary = {jointSalary} />
        </div>
    )
}

export default Form;
