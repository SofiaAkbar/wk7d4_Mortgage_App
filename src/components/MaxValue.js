import React from 'react'

const MaxValue = ({jointSalary, deposit, expenses}) => {

    const maxValue = (jointSalary) => {
        return ((jointSalary * 4.5) + parseInt(deposit)) - expenses
    }

    // const maxValueDeposit = (jointSalary, deposit) => {
    //     return (jointSalary * 4.5) + parseInt(deposit)
    // }

    return (
        <div>
            <p>Max value: {maxValue(jointSalary)}</p>
            {/* <p>Max value with deposit: {maxValueDeposit(jointSalary, deposit)}</p> */}
        </div>
    )
}

export default MaxValue
