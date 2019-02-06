import Mock from 'mockjs'

export default [
    {
        path: '/api/sys/config/blogheader',
        method: 'get',
        handle ({ body }) {
            return {
                code: 0,
                msg: 'success',
                data: Mock.mock({
                    background: "@image()"
                })
            }
        }
    },
    {
        path: '/api/sys/config/AsideTags',
        method: 'get',
        handle ({ body }) {
            return Mock.mock({
                    code: 0,
                    msg: 'success',
                    "data|10-50": ["@cname"]
                })

        }
    },
    {
        path: '/api/sys/config/AsideMusic',
        method: 'get',
        handle ({ body }) {
            return Mock.mock({
                    code: 0,
                    msg: 'success',
                    "data|10-50": [
                        {
                            title: '@csentence()',
                            artist: '@cname',
                            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                        }
                    ]
                })

        }
    }
]
