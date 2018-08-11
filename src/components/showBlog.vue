<template>
<div id="show-blogs" v-theme="'narrow'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search articles">
    <div class="single-blog" v-for="article in filteredBlogs" :key="article.title">
        <h2 v-rainbow>{{article.title | to-uppercase}}</h2>
        <article>{{article.body | snippet}}</article>
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
  computed: {
      
  },
  filters: {
      toUppercase(value) {
          return value.toUpperCase();
      }
  },
  directives: {
      'rainbow': {
          bind(el, binding, vnode) {
            el.style.color = '#' + Math.random().toString().slice(2, 8);
        }
      }
  },
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
          this.articles = data.body.slice(0, 9);
      }) 
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


