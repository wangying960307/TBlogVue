import request from '@/plugin/axios'

export function ArticleIndex (page) {
  return request({
    url: '/article/index',
    method: 'get',
    params: page
  })
}

export function ArticleRead (id) {
  return request({
    url: '/article/read/' + id,
    method: 'get',
  })
}

/**
 * 点赞
 * @param id
 * @constructor
 */
export function ArticleStar (id) {
  return request({
    url: '/article/star/' + id,
    method: 'get',
  })
}


export function ArticleGetGroupTree() {
  return request({
    url: '/article/getGroupTree',
    method: 'get',
  })
}
