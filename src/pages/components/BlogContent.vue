<template>
    <el-card>
        <div v-for="(item,key) in items" :key="key">
            <article-item
                    :item="item"
            ></article-item>
            <br>
        </div>
        <el-pagination-plus
                style="justify-content: center"
                :page="page"
                @refresh="loadItems"
                @change="pageChange"
        ></el-pagination-plus>
    </el-card>
</template>

<script>
    import { ArticleIndex, ArticleStar } from '../../api/page.article'
    import ElPaginationPlus from '../components/el-pagination-plus/index'
    import ArticleItem from './article-item/index'

    export default {
        name: 'BlogContent',
        components: { ArticleItem, ElPaginationPlus },
        data () {
            return {
                loading: false,
                items: [],
                page: {
                    index: 1,
                    total: 0,
                    size: 10
                }
            }
        },
        created () {
            this.loadItems()
        },
        methods: {
            pageChange (index, size) {
                this.page.index = index
                this.page.size = size
                this.loadItems()
            },
            loadItems () {
                ArticleIndex(this.page).then(
                    res => {
                        this.items = res.list
                        this.page = res.page
                    }
                )
            },
            onStar (item) {
                ArticleStar(item.id).then(
                    () => {

                    }
                )
            }
        }
    }
</script>

<style scoped>
    .article-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /*// 限制快级元素的文本行数*/
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
</style>
