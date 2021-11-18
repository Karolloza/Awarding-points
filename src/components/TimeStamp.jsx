import React, { useEffect, useState } from 'react'
import { pointsCounter, timePeriods } from '../utils'

const TimeStamp = ({ period, data }) => {
    const [score, setScore] = useState(null)

    const handleScores = () => {
            const filteredByPeriod = data?.transactions.filter(transaction => (transaction.date >= timePeriods[period].start && transaction.date <= timePeriods[period].end) )
            const sum = filteredByPeriod?.reduce((prevVal, currVal) => {
                return prevVal + pointsCounter(currVal.worthTotal)
            },0)

            setScore(sum)
    }

    const handleTimeStamp = () => {
        switch(period) {
            case "q1":
                return 'from 1 Janurary to 31 March'
            case "q2":
                return 'from 1 April to 30 June'
            case "q3":
                return 'from 1 July to 30 September'
            case "q4":
                return 'from 1 October to 31 December'
            case "total":
                return 'full Year'
            default:
                return "select period"   
        }
    }

    useEffect(() => {
        handleScores()
    },[data, period])

    return (
    <div>
        {handleTimeStamp()}
        <div>Score: {score}</div> 
    </div>)
}

export default TimeStamp