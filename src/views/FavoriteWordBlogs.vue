<template>
  <div class="blog-card-wrap">
      <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in favoriteBlogCards" :key="index" />
      </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue"
export default {
    name: "blogs",
    components:{BlogCard},
    computed: {
        favoriteBlogCards(){
            console.log(this.$route.params.word);
            console.log(this.$store.state.favoriteBlogWords);
            var blogIds = this.$store.state.favoriteBlogWords.get(this.$route.params.word);
            var sampleblogcards =[];
            var userBlogCards = [];

            sampleblogcards = this.$store.state.sampleBlogCards.filter((post) => {
                return blogIds.includes(post.blogId);
            });
            userBlogCards = this.$store.state.userBlogCards.filter((post) => {
                return blogIds.includes(post.blogId);
            });

            return sampleblogcards.concat(userBlogCards);
        }
    }
}
</script>

<style>

</style>