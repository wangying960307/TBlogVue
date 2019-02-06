<template>
    <div>
        <el-row :gutter="20">
            <el-col :lg="18">
                <blog-header></blog-header>
            </el-col>
            <el-col :lg="6">
                <blog-aside></blog-aside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import BlogHeader from '../components/BlogHeader'
    import BlogAside from '../components/BlogAside'
    export default {
        name: 'Index',
        components: { BlogAside, BlogHeader }
    }
</script>

<style scoped>

</style>