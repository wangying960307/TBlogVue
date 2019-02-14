<template>
    <div>
        <el-row :gutter="20">
            <el-col :lg="18">
                <!--<blog-header style="background-color: rgba(255, 255, 255, 0.9);"></blog-header>-->
                <!--<br>-->
                <blog-content style="background-color: rgba(255, 255, 255, 0.9);"></blog-content>
            </el-col>
            <el-col :lg="6">
                <blog-aside style="background-color: rgba(255, 255, 255, 0.9);"></blog-aside>
            </el-col>
        </el-row>
        <blog-footer></blog-footer>
    </div>
</template>

<script>
    import BlogHeader from '../components/BlogHeader'
    import BlogAside from '../components/BlogAside'
    import BlogContent from '../components/BlogContent'
    import BlogFooter from '../components/BlogFooter'
    export default {
        name: 'Index',
        components: { BlogFooter, BlogContent, BlogAside, BlogHeader }
    }
</script>

<style scoped>

</style>
