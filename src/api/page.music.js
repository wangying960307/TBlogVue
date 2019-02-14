import request from '@/plugin/axios'

export function MusicIndex () {
  return request({
    url: '/sysconfig/read/music',
    method: 'get'
  })
}
