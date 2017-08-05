import http from 'axios'
import window from 'window'

const protocol = window.location.protocol

export const getArticles = () => ({
  type: 'BLOG/GET_ARTICLES',
  payload: http({
    method: 'GET',
    url: `${protocol}//${GLOBAL_ENV.WP_API_SERVER}/wp-json/wp/v2/posts?_embed`,
  }),
})

export const getArticle = (slug) => ({
  type: 'BLOG/GET_ARTICLE',
  payload: http({
    method: 'GET',
    url: `${protocol}//${GLOBAL_ENV.WP_API_SERVER}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
  }),
})
