import request from '@/plugin/axios'

export function BlogHeaderConfig () {
    return request({
        url: '/sys/config/blogheader',
        method: 'get'
    })
}

export function BlogAsideTagsConfig () {
    return request({
        url: '/sys/config/AsideTags',
        method: 'get'
    })
}

export function BlogAsideMusicConfig () {
    return request({
        url: '/sysconfig/read/music',
        method: 'get'
    })
}
