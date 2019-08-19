export const GET_DATA = '[Home] Get Data'
export const CURRENT_PAGE = '[Home] Current Page'
const INITIAL_STATE = {
  images: {},
  page: 1
}

export default function(state = INITIAL_STATE, { type, payload } = {}) {
  const actionFactory = {
    [GET_DATA]: {
      ...state,
      images: payload
    },

    [CURRENT_PAGE]: {
      ...state,
      page: payload
    }
  }
  const homeReducer = actionFactory[type] || state
  return homeReducer
}
