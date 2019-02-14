<template>
    <el-card>
        <!--<div class="header-main" :style="{backgroundImage:'url('+ background +')'}">-->
        <div class="header-main" :style="{backgroundImage:'url('+ background +')'}">
            <div style="text-align: center">
                <br>
                <br>
                <h3>GtGuiZhou的博客</h3>
                欢迎你来观看我的小小博客，来了请给我留留言，蟹蟹O(∩_∩)O～
            </div>
        </div>
    </el-card>
</template>

<script>
    import { BlogHeaderConfig } from '../../api/sys.config'
    export default {
        name: 'BlogHeader',
        data () {
            return {
                background: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549440544414&di=b052a09a92ba8444ec29296583a66b1c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201503%2F27%2F20150327133759_Zu8wF.jpeg',
            }
        },
        created () {
            BlogHeaderConfig().then(
                res => {
                    // this.background = res.background
                }
            )
        }
    }
</script>

<style scoped>
    .header-main{
        color: white;
        height: 300px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        /*filter: blur(2px);*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>