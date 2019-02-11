# TBlog前端

## 简介
该博客是个人在课余时间基于vuejs、element-ui、d2admin、thinkphp框架进行开发，在此先感谢以上开源项目的无私奉献，
如果我的项目对你有用，劳驾给我一个star吧，如果有招开发的公司劳烦联系邮箱gtguizhou@qq.com。
~~~
|-- 文章模块（完成）
| |-- 增、删、查、改（完成）
| |-- 点赞功能 （完成）
| |-- 从内容中抽取标签
| |-- 文章分组
| |-- 自定义标签
|
|-- 文件模块
| |-- 上传文件（当前可上传：图片）
| |-- 下载文件（完成50%）
| |-- 文件管理
| |-- 文件分组
|
|-- 音乐模块
| 
|-- 微博模块（对外隐藏）
| |-- 增、删、查、改（完成）
| |-- 从内容中抽取标签
| |-- 自定义标签
|
~~~

## 博客关联开源项目
[博客前端](https://github.com/GtGuiZhou/TBlogVue)
[博客管理前端](https://github.com/GtGuiZhou/TBlogAdminVue)
[博客后台(php)](https://github.com/GtGuiZhou/TBlog)

## 2019年02月12日00:44:48
因为vue.config.js是从d2admin那边copy过来的，今天才发现他自己导入了自己定义的scss文件，平时用不到的时候没关系，
今天因为使用了d2admin的markdown发现scss出现问题，才发现没有把d2admin根目录下的assets/style/public.scss文件也拷贝过来
导致无法使用markdown引起的编译错误
~~~
//vue.config.js关于scss的配置
css: {
        loaderOptions: {
            // 设置 scss 公用变量文件
            sass: {
                data: `@import '~@/assets/style/public.scss';`
            }
        }
    },
~~~
