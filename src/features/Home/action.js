import { GET_DATA, CURRENT_PAGE } from './reducer'

export const getData = payload => ({
  type: GET_DATA,
  payload
})
export const setCurrentPage = payload => ({
  type: CURRENT_PAGE,
  payload
})
