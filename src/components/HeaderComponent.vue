<template>
    <div>
        <h2>Categories:</h2>
        <ul>
            <li v-for="category in headerCategories.data.data" :key="category.title">{{ category.title }}</li>
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
                .then(response => (this.headerCategories = response));
        }
    }
</script>

<style scoped>

</style>
