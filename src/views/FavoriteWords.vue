<template>
  <div>
    <h2>Select any word to see articles containing the word</h2>
    <li v-for="(word, index) in getWords" :key="index">
        <router-link class="link" :to="{name: 'FavoriteWordBlogs', params: {word} }">{{ word }}</router-link> 
    </li>
       
  </div>
</template>

<script>
export default {
    name: "favoriteWords",
    data() {
        return {            
            favoriteBlogWords: this.$store.state.favoriteBlogWords
        }
    },
    computed:{
        getWords(){
            return this.$store.state.favoriteBlogWords.keys();
        }
    }
}
</script>

<style lang="scss" scoped>
 
h2 {
  margin: 25px;
  padding-bottom: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
 
li {
  list-style-type: none;
  border-bottom: 1px solid #ccc;
  max-width: 200px;
  margin-left: 25px;
}
 
li:last-child {
  border: none;
}
 
li a {
  text-decoration: none;
  text-transform: none;
  color: #000;
  display: block;
  width: 200px;
 
  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
 
li a:hover {
  font-size: 30px;
  background: #f6f6f6;
}

</style>