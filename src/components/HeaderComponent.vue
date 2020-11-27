<template>
    <div>
        <h2>Categories:</h2>
        <ul>
            <router-link @click.native="setActiveCategoryId(category.id)" v-for="category in headerCategories"
                         active-class="active-category" :key="category.title" :to="`/category/${category.slug}`">{{
                category.title }}
            </router-link>
        </ul>
        <PostsComponent />
    </div>
</template>

<script>
    import axios from 'axios';
    import PostsComponent from "./PostsComponent";

    export default {
        name: "HeaderComponent",
        components: {PostsComponent},
        data() {
            return {
                activeCategoryId: null,
                headerCategories: null,
            };
        },
        methods: {
            setActiveCategoryId(id) {
                console.log(id);
                this.activeCategoryId = id;
            }
        },
        beforeMount() {
            //todo проверка если корень сайта или пустой масив с категориями

            axios
                .get('https://blog.lpage.cc/api/v2/categories')
                .then(response => {
                        this.headerCategories = response.data.data
                        let categorySlug = this.$route.path.split('/').reverse()[0];
                        this.activeCategoryId = this.headerCategories.find(el => el.slug === categorySlug).id
                        this.$root.$emit('change-active-category', this.activeCategoryId)
                    }
                );
        }
    }
</script>

<style scoped>
    .active-category {
        font-weight: bold;
    }
</style>
