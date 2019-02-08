<template>
    <div>
        <el-card >
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
                    <el-button type="success" @click="$router.push('/article-item/view/' + item.id)">查看</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'ArticleItem',
        props: {
            item: {
                type: Object,
                default: () => {
                    return {
                        title: '',
                        star_num: 0,
                        cover: '',
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
