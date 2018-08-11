<template>
<div id="add-blog">
  <h2>Add a New Blog Post</h2>
  <form action="" v-if="!submitted">
    <label for="">Blog Title:</label>
    <input type="text" required v-model.lazy="blog.title">
    <label for="">Blog Content:</label>
    <textarea name="content" id="content" cols="30" rows="10" v-model.lazy="blog.content"></textarea>
    <div id="checkboxes">
      <label for="">Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="blog.categories">
      <label for="">Wizards</label>
      <input type="checkbox" value="wizards" v-model="blog.categories">
      <label for="">Mario</label>
      <input type="checkbox" value="marios" v-model="blog.categories">
      <label for="">Cheese</label>
      <input type="checkbox" value="cheese" v-model="blog.categories">
    </div>
    <label for="">Author</label>
    <select name="author" id="author" v-model="blog.author">
      <option v-for="author in authors" :key="author">{{author}}</option>
    </select>
    <button v-on:click.prevent="btnAddBlog()">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>
        {{blog.content}}
      </p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: "",
        content: "",
        author: "",
        categories: []
      },
      authors: ['The Ninja','The Wizard', 'Vue Magician'],
      submitted: false
    }
  },
  methods: {
    btnAddBlog: function() {
      this.$http.post('https://vuejs-playlist-596c0.firebaseio.com/posts.json', this.blog).then(function(data) {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea, select {
  display: block;
  width: 100%;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>


