<template>
  <v-container>
    <v-breadcrumbs>
      <template>
        <v-breadcrumbs-item href="/">
          HOME
        </v-breadcrumbs-item>
        <v-breadcrumbs-item href="/blog">
          BLOG
        </v-breadcrumbs-item>
        <v-breadcrumbs-item :href="'/blog/'+blog.id" disabled>
          {{ blog.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-layout row wrap class="pa-8">
      <v-flex xs12>
        <h1 class="pt-3 pb-3">
          {{ blog.title }}
        </h1>
        <v-img
              :src="blog.imageUrl"
              height="500px"
              class="white--text align-end mt-2 mb-5"
        >
        </v-img>
        <p class="grey--text">{{ blog.dateCreate }} - Write by javadfathi</p>
        <v-divider></v-divider>
        <div>
          <p>
          {{ blog.content }}
          </p>
        </div>
        <app-comment></app-comment>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Comment from '@/components/global/ComComment'
export default {
  props:['id'],
  computed:{
    blog(){
      return this.$store.getters.loadedBlog(this.id);
    }
  },
  name: 'comHome',
  components:{
    appComment: Comment
  },
  data(){
    return{
    }
  }
}
</script>
