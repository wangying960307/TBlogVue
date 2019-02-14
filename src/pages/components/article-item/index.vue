<template>
    <div>
        <el-card >
            <h2>{{item.title}}</h2>
            <d2-markdown :source="item.content"></d2-markdown>
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
                    <el-button type="success" @click="$router.push('/article-item/view/' + item.id)">查看</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import GraySmall from '../gray-small/index'
    import D2Markdown from '../d2-markdown/index'
    export default {
        name: 'ArticleItem',
        components: { D2Markdown, GraySmall },
        props: {
            item: {
                type: Object,
                default: () => {
                    return {
                        title: '',
                        star_num: 0,
                        content: ''
                    }
                }
            }
        },
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
