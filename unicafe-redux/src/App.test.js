import deepFreeze from 'deep-freeze'
import feedbackReducer from './feedbackReducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  it('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = feedbackReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = feedbackReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      neutral: 0,
      bad: 0
    })
  })
  it('neutral is incremented', () => {
    const action = {
      type: 'NEUTRAL'
    }
    const state = initialState

    deepFreeze(state)
    const newState = feedbackReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 1,
      bad: 0
    })
  })
  it('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = feedbackReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      neutral: 0,
      bad: 1
    })
  })
})
