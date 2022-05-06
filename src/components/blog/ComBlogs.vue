<template>
  <v-container>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-layout wrap row class="mt-6">
      <v-flex class="pa-2" xs12 sm6 md4 lg3  v-for="blog in blogs" :key="blog.id">
        <v-card class="mx-auto" max-width="300">
          <v-img
              :src="blog.imageUrl"
              height="200px"
              class="white--text align-end"
              >
            <v-card-title>
              {{ blog.title }}
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            {{ blog.dataCreate }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>
              {{ blog.exceptContent }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
<!--            <v-btn color="purple darken-4">-->
<!--              Share-->
<!--            </v-btn>-->
            <v-dialog
                transition="dialog-bottom-transition"
                max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="purple darken-4"
                    v-bind="attrs"
                    v-on="on"
                >Share</v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar
                      color="purple darken-4"
                  >Share to : </v-toolbar>
                  <v-card-text class="pt-3 text-center">
                    <a :href="'https://api.whatsapp.com/send?text='+blog.title" class="text-decoration-none ma-2">
                      <v-icon color="green darken-1" large>mdi-whatsapp</v-icon>
                    </a>
                    <a :href="'https://api.whatsapp.com/send?text='+blog.title" class="text-decoration-none ma-2">
                      <v-icon color="blue lighten-1" large>mdi-twitter</v-icon>
                    </a>
                    <a :href="'https://api.whatsapp.com/send?text='+blog.title" class="text-decoration-none ma-2">
                      <v-icon color="pink darken-1" large>mdi-instagram</v-icon>
                    </a>
                    <a :href="'https://api.whatsapp.com/send?text='+blog.title" class="text-decoration-none ma-2">
                      <v-icon color="white" large>mdi-facebook</v-icon>
                    </a>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn
                        text
                        @click="dialog.value = false"
                    >Cancel</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>





            <v-btn color="blue darken-1" :to="'blog/'+blog.id">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>

    <div class="text-center mt-10">
      <v-pagination
          v-model="page"
          :length="3"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  computed:{
    blogs(){
      return this.$store.getters.loadedBlogs
    }
  },
  name: 'comHome',
  data(){
    return{
      page:1,
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Blog',
          disabled: true,
          href: 'breadcrumbs_link_1',
        }
      ]
    }
  }

}
</script>
