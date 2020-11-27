<template>
    <div><h1>{{ category_id }}</h1></div>
</template>

<script>
    export default {
        name: "PostsComponent",
        props: ['category_id'],
    }
</script>

<style scoped>

</style>
