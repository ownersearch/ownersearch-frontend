import { connect } from 'react-redux'
import BlogIndex from './BlogIndex'
import { values } from 'lodash'

import { getArticles } from 'features/Blog/Blog.actions'

const stateToProps = ({ blog }) => ({
  articles: values(blog.articles),
})

const dispatchToProps = {
  getArticles,
}

export default connect(stateToProps, dispatchToProps)(BlogIndex)
