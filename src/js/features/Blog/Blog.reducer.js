import i from 'icepick'
import { keyBy } from 'lodash'

const initialState = {
  articles: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BLOG/GET_ARTICLES_PENDING':
      return state
    case 'BLOG/GET_ARTICLES_FULFILLED':
      return i.assoc(state, 'articles', keyBy(action.payload.data, 'slug'))
    case 'BLOG/GET_ARTICLE_FULFILLED':
      return i.assocIn(state, ['articles', action.payload.data[0].slug], action.payload.data[0])   
    default:
      return state
  }
}
