import React from 'react'

const MaxValue = ({jointSalary}) => {

    const maxValue = (jointSalary) => {
        return jointSalary * 4.5
    }

    return (
        <div>
            <p>Max value: {maxValue(jointSalary)}</p>
        </div>
    )
}

export default MaxValue
