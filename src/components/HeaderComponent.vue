<template>
    <div>
        <h2>Categories:</h2>
        <ul>
            <router-link v-for="category in headerCategories" :key="category.title" :to="`category/${category.slug}`">{{ category.title }}</router-link>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "HeaderComponent",
        data() {
            return {
                headerCategories: null
            };
        },
        mounted() {
            axios
                .get('https://blog.lpage.cc/api/v2/categories')
                .then(response => (this.headerCategories = response.data.data));
        }
    }
</script>

<style scoped>

</style>
