import ComHome from "@/components/ComHome";
import ComPortfolio from "@/components/ComPortfolio";
import ComCv from "@/components/CvRes";
import ComBlogs from "@/components/blog/ComBlogs";
import NewBlog from "@/components/blog/NewBlog";
import Blog from "@/components/blog/ComBlog";
import ComContact from "@/components/ComContact";
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',name:'comHome',component:ComHome},
        {path:'/portfolio',name:'comPortfolio',component:ComPortfolio},
        {path:'/cv',name:'comCv',component:ComCv},
        {path:'/blog',name:'comBlogs',component:ComBlogs},
        {path:'/blog/new',name:'comBlogs',component:NewBlog},
        {path:'/blog/:id',name:'comBlog', props:true,component:Blog},
        {path:'/contact',name:'comContact',component:ComContact},
    ],
    mode:"history"
})
