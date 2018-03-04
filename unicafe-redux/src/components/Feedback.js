import React from 'react'

import Button from './Button'

const Feedback = ({increment}) => (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={increment("GOOD")} text="good" />
    <Button handleClick={increment("NEUTRAL")} text="neutral" />
    <Button handleClick={increment("BAD")} text="bad" />
  </div>
)

export default Feedback
