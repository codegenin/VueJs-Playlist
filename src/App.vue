<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
</div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlog from './components/showBlog';
import header from './components/header';

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'app-header': header
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}
</style>


