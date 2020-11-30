<template>
    <div>
        <ul v-for="post in posts" :key="post.id">
            <PostComponent :post="post"/>
        </ul>
    </div>
</template>


<script>
    import axios from 'axios';
    import PostComponent from "./PostComponent";

    export default {
        name: "PostsComponent",
        components: {PostComponent},

        data() {
            return {
                posts: this.getPosts(),
                category_id: null
            };
        },
        methods: {
            getPostsByCategoryId(id) {
                axios
                    .get('https://blog.lpage.cc/api/v2/categories/' + id)
                    .then(response => {
                            this.posts = response.data.posts
                        }
                    );
            },
            getPosts() {

                axios
                    .get('https://blog.lpage.cc/api/v2/posts')
                    .then(response => {
                            this.posts = response.data.data
                        }
                    );

            }
        },
        mounted() {
            //todo проверка если корень сайта или пустой масив с категориями
            this.$root.$on('change-active-category', $event => {
                this.category_id = $event;
                this.getPostsByCategoryId(this.category_id)
            })
        }
    }
</script>

<style scoped>

</style>
