import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title:'Home'
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("@/views/Blogs.vue"),
    meta:{
      title:'Blogs'
    }
  },
  {
    path: "/createPost",
    name: "CreatePost",
    component: () => import("@/views/CreatePost.vue"),
    meta:{
      title:'CreatePost'
    }
  },
  {
    path: "/favoriteWords",
    name: "FavoriteWords",
    component: () => import("@/views/FavoriteWords.vue"),
    meta:{
      title:'Favorite Words'
    }
  },
  {
    path: "/viewBlog:blogId",
    name: "ViewBlog",
    component: () => import("@/views/ViewBlog.vue"),
    meta:{
      title:'View Article Post'
    }
  },
  {
    path: "/favoriteWordBlogs:word",
    name: "FavoriteWordBlogs",
    component: () => import("@/views/FavoriteWordBlogs.vue"),
    meta:{
      title:'Favorite Word Blogs'
    }
  },
  {
    path: "/edit-blog:blogId",
    name: "EditBlog",
    component: () => import("@/views/EditBlogPost.vue"),
    meta:{
      title:'Edit Article Post'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | SenseHawk`;
  next();
})

export default router;
