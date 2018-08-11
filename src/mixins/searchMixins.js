export default {
    computed: {
        filteredBlogs: function(){
            return this.articles.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}