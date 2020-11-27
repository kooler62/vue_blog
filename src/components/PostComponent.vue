<template>
    <div>
        id - {{ post.id }}
        title {{ post.title }}
        img {{ post.img }}
    </div>
</template>

<script>
    export default {
        name: "PostComponent",
        props:['post']
    }
</script>

<style scoped>

</style>
