import { createAction, createReducer } from 'redux-act'

export const add = createAction('ADD')

const initialState = []

export default createReducer({
  [add]: (state, payload) => [...state, ...payload]
}, initialState)
