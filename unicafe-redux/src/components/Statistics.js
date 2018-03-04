import React from 'react'

import Statistic from './Statistic'

const Statistics = ({good, neutral, bad}) => {
  const sum = good+bad+neutral
  const average = (good - bad)/(sum) ||  0
  const positives = ((good / sum) * 100 || 0) +" %"
  if (good === 0 && neutral === 0 && bad === 0) {
    return (<div></div>)
  }
  return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="average" value={average} />
            <Statistic text="positives" value={positives} />
          </tbody>
        </table>
      </div>
  )
}

export default Statistics
