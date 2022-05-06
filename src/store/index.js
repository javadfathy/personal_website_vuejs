import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedBlogs:[
            {
                imageUrl:"https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
                title:"Why develop a website?",
                dateCreate:"2022/01/23",
                content:"Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system.",
                exceptContent:"Out of the box you get access to all colors in the Material Design spec",
                id:"b1"
            },
            {
                imageUrl:"https://www.itprotoday.com/sites/itprotoday.com/files/programming.jpg",
                title:"Why develop a website?",
                dateCreate:"2022/01/22",
                content:"Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system.",
                exceptContent:"Out of the box you get access to all colors in the Material Design spec",
                id:"b2"
            },
            {
                imageUrl:"https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg",
                title:"Why develop a website?",
                dateCreate:"2022/01/21",
                content:"Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system. Out of the box you get access to all colors in the Material Design spec through sass and javascript. These values can be used within your style sheets, your component files and on actual components via the color class system.",
                exceptContent:"Out of the box you get access to all colors in the Material Design spec",
                id:"b3"
            }
        ]
    },
    // mutations:{},
    // actions:{},
    getters:{
        loadedBlogs(state){
            return state.loadedBlogs.sort((blogA, blogB) => {
                return blogA.dateCreate > blogB.dateCreate
            })
        },
        recentlyBlogs(state,getters) {
            return getters.loadedBlogs.slice(0,4);
        },
        loadedBlog(state){
            return (blogId) => {
                return state.loadedBlogs.find((blog) => {
                    return blog.id === blogId
                })
            }
        }
    }
})