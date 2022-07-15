<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCard from "../components/BlogCard.vue"
export default {
  name: "Home",
  components: {BlogPost, BlogCard},
  data(){
    return{
      welcomeScreen:{
        title:"Welcome!",
        blogPost:"Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post",
        welcomeScreen:true,
        photo:"coding"
      },
      sampleBlogPost: [
        {
          title: "Best article of the week",
          blogHTML: "Nasa's latest Mars craft nears landing for unprecedented seismic mission",
          blogCoverPhoto: "nasa",
        },
        {
          title: "Isro satellite launch: Geo Eye over Indian Ocean, internet connectivity in J&K, NE",
          blogHTML: "Indian Space Research Organisation (Isro) on Wednesday launched high throughput communication satellite GSAT-29 from the Satish Dhawan Space Centre",
          blogCoverPhoto: "designed-for-everyone",
        }          
      ]      
    }    
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
