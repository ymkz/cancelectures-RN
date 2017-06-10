import { createAction, createReducer } from 'redux-act'

export const update = createAction('UPDATE')

const initialState = {
  culture: true,
  law: true,
  education: true,
  humanity: true,
  medic: true,
  engineering: true,
  biology: true,
  master: true
}

export default createReducer({
  [update]: (state, payload) => Object.assign({}, state, {
    [payload.group]: payload.status
  })
}, initialState)
