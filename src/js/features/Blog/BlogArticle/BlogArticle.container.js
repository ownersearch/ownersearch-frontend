import { connect } from 'react-redux'
import BlogArticle from './BlogArticle'

import { get } from 'lodash'
import { getArticle } from 'features/Blog/Blog.actions'

const stateToProps = ({ blog }, { routeParams }) => {
  const article = get(blog, ['articles', routeParams.articleSlug], {})
  return {
    article,
  }
}

const dispatchToProps = {
  getArticle,
}

export default connect(stateToProps, dispatchToProps)(BlogArticle)
