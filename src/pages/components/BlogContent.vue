<template>
    <el-card>
        <div v-for="(item,key) in items" :key="key">
            <el-card>
                <h2>{{item.title}}</h2>
                <el-row>
                    <el-col :lg="4" >
                        <img v-if="item.cover" :src="item.cover" width="150px">
                    </el-col>
                    <el-col :lg="18" >
                        <span class="article-content"
                              v-html="item.content">
                        </span>
                    </el-col>
                </el-row>

                <el-row >
                    <el-col :lg="18" >
                        <gray-small>创建时间{{item.update_time}}</gray-small>
                    </el-col>
                    <el-col :lg="6"  style="text-align: right">
                        <el-tag type="warning" @click="onStar(item)">
                            <i class="el-icon-star-on"></i>
                            {{item.star_num}}个赞
                        </el-tag>
                        &nbsp;
                        <el-button type="success" @click="$router.push('/article/view/' + item.id)">查看</el-button>
                    </el-col>
                </el-row>
            </el-card>
            <br>
            <el-pagination-plus
                    style="justify-content: center"
                    :page="page"
                    @refresh="loadItems"
                    @change="pageChange"
            ></el-pagination-plus>
        </div>
    </el-card>
</template>

<script>
    import { ArticleIndex, ArticleStar } from '../../api/page.article'
    import ElPaginationPlus from '../components/el-pagination-plus/index'
    import GraySmall from '../components/gray-small/index'

    export default {
        name: 'BlogContent',
        components: { GraySmall, ElPaginationPlus },
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
