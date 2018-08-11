<template>
<div id="show-blogs" v-theme="'wide'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search articles">
    <div class="single-blog" v-for="article in filteredBlogs" :key="article.title">
        <router-link v-bind:to="'/blog/' + article.id">
            <h2>{{article.title | to-uppercase}}</h2>
            </router-link>
        <article>{{article.content | snippet}}</article>
    </div>
</div>
</template>

<script>
import searchMixins from '../mixins/searchMixins.js';

export default {
  data () {
    return {
        articles: [],
        search: ''
    }
  },
  mixins: [searchMixins],
  filters: {
      toUppercase(value) {
          return value.toUpperCase();
      }
  },
  created() {
      this.$http.get('https://vuejs-playlist-596c0.firebaseio.com/posts.json').then(function(data) {
          return data.json();
      }).then(function(data) {
          var blogsArray = [];
          for(let key in data) {
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.articles = blogsArray;
      });
  }
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #ccc;
}
</style>


