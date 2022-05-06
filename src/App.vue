<template>
  <v-app>
    <v-navigation-drawer
        v-model="sideMenu"
        absolute
        top
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            active-class="deep-purple--text text--accent-4"
            v-for="item in menuItems" :key="item.title"
        >
          <v-list-item router :to="item.urlItem">
              <v-list-item-action>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="sideMenu = !sideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span">JavadFathi</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
          class="pt-6 mr-3"
          v-model="$vuetify.theme.dark"
          inset
          label="dark/light"
          color="red"
          persistent-hint
      ></v-switch>
      <v-toolbar-items  class="hidden-sm-and-down" v-for="item in menuItems" :key="item.title">
        <v-btn  :to="item.urlItem">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-main>
      <router-view></router-view>
    </v-main>


    <v-bottom-navigation class="hidden-md-and-up"
        v-model="value"
        :background-color="color"
        dark
        shift
        fixed
        v-for="item in menuItems" :key="item.title"
    >
      <v-btn router to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn router to="/portfolio">
        <span>Portfolio</span>

        <v-icon>mdi-search-web</v-icon>
      </v-btn>
      <v-btn router to="/cv">
        <span>CV</span>

        <v-icon>mdi-file-account</v-icon>
      </v-btn>
      <v-btn router to="/blog">
        <span>Blog</span>

        <v-icon>mdi-post</v-icon>
      </v-btn>
      <v-btn router to="/contact">
        <span>Contact</span>

        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-divider></v-divider>
    <div class="align-center">
      <p class="text-center pt-3">This website created by javad fathi...</p>
    </div>
  </v-app>
</template>

<script>


export default {

  name: 'App',

  data: () => ({
    value:0,
    sideMenu:false,
    menuItems:[
      {icon:"mdi-phone",title:"Contact",urlItem:"/contact",backColor:"blue-grey darken-4"},
      {icon:"mdi-post",title:"Blog",urlItem:"/blog",backColor:"blue-grey darken-4"},
      {icon:"mdi-file-account",title:"CV(resume)",urlItem:"/cv",backColor:"blue-grey darken-4"},
      {icon:"mdi-search-web",title:"Portfolio",urlItem:"/portfolio",backColor:"blue-grey darken-3"},
      {icon:"mdi-home",title:"Home",urlItem:"/"}
    ]

  }),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'grey darken-4'
        case 1: return 'blue-grey darken-4'
        case 2: return 'teal darken-4'
        case 3: return 'red darken-4'
        default: return 'blue-grey'
      }
    },
  },
};
</script>
