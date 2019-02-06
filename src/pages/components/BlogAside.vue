<template>
    <el-card>
        <el-card>
            <aplayer
                    v-if="musics.length > 0"
                    :music="musics[0]"
                    :list="musics"
                    listMaxHeight="200px"
            ></aplayer>
        </el-card>
        <br>
        <el-card class="tags">
            <el-tag @click="$router.push('/search/' + tag)"
                    class="tag"
                    v-for="(tag,key) in tags" :key="key"
                    :type="randTagType()">{{tag}}
            </el-tag>
        </el-card>
        <br>
        <el-card>
            <small style="text-align: center;color: pink">
                <!--<div style="text-align: center">浅唱 vae</div>-->
                <pre>
阳光暖暖的 时光慢慢的
我是蔚蓝的
在静好的岁月边缘张望着
你能感应的 项链断掉了
爱情渐远着
泪水在草地上和露水吻着
徘徊在海岸线
日出会在几点
三三两两在离别 承诺不兑现
我说Vae
你要清醒 别再轻易掉眼泪
我说Vae
是是非非 你要勇敢去面对
我说Vae
该放就放 别让自己那么累
无所谓
自由自在的飞 让梦纯粹 静候轮回
                </pre>
            </small>
        </el-card>
    </el-card>
</template>

<script>

    import Aplayer from 'vue-aplayer'
    import { BlogAsideMusicConfig, BlogAsideTagsConfig } from '../../api/sys.config'

    export default {
        name: 'BlogAside',
        components: {
            Aplayer
        },
        data () {
            return {
                musics: [],
                tags: []
            }
        },
        created () {
            BlogAsideTagsConfig().then(
                res => {
                    this.tags = res
                }
            )

            BlogAsideMusicConfig().then(
                res => {
                    this.musics = res
                }
            )
        },
        methods: {
            randTagType () {
                let items = ['success', '', 'danger', 'warning', 'info']
                return items[Math.floor(Math.random() * items.length)]
            }
        }
    }
</script>

<style scoped>
    .tags {
        padding: 10px;
        /*border: #64b5bf dashed 1px;*/
        text-align: center;
    }

    .tag {
        margin: 2px;
    }
</style>