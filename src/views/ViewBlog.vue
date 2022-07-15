<template>
  <div class="post-view">
      <div class="container quillWrapper" v-if="currentBlog">
          <h2>{{this.currentBlog[0].blogTitle}}</h2>
          <h4>Posted on: {{this.currentBlog[0].blogDate}}</h4>
          <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
          <SelectText @highlight="onHighlight">
            <div class="post-contene ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
          </SelectText>
      </div>
  </div>
</template>

<script>
import SelectText from "../components/SelectText.vue"
export default {
    data(){
        return {
            currentBlog:null,
        }
    },
    components:{SelectText},
    methods: {

        onHighlight (text) {
            var payload = {word: text, blogId: this.currentBlog[0].blogId}
            this.$store.commit('addFavoriteBlogWords', payload);
            console.log('highlight:', text);
        }
    },
    mounted(){
        console.log("route ID");
        console.log(this.$route.params.blogId);
        console.log(this.$store.state.sampleBlogCards);
        this.currentBlog = this.$store.state.userBlogCards.filter((post) => {
            return post.blogId === this.$route.params.blogId;
        });
        if(this.currentBlog.length == 0){
            this.currentBlog = this.$store.state.sampleBlogCards.filter((post) => {
                return post.blogId === this.$route.params.blogId;
            });            
        }
        console.log(this.currentBlog);

    }    
}
</script>

<style lang="scss">
.post-view {
    min-height: 100%;

    .container{
        max-width: 1000px;
        padding: 60px 25px;
    }

    .ql-editor {
        padding: 0;
    }

    h2 {
        margin-bottom: 16px;
        font-weight: 300;
        font-size: 32px;
    }

    img{
        width: 100%;
        margin-bottom: 32px;
    }

    h4{
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
}
</style>