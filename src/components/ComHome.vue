<template>
  <div>
    <v-parallax
        dark
        src="@/assets/header-parallex.png"
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h4 font-weight-bold mb-4 grey--text text--darken-4">
            I'm Javad fathi
          </h1>
          <h4 class="subheading grey--text text--darken-3 font-weight-medium">
            Welcome my website!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <h2 class="text-center xs12 blue-grey--text text--darken-4">Recently Blog</h2>
      <h3 class="text-center xs12 blue-grey--text text--darken-2 ma-3">The latest portfolio in the field of site
        design</h3>
      <v-lazy>
        <v-layout row wrap>
          <v-flex class="xs12 sm6 md4 lg3" style="padding: 10px" v-for="blog in recentlyBlog" :key="blog.id">
            <v-card
                class="mx-auto"
                max-width="400"
            >
              <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="blog.imageUrl"
              >
                <v-card-title>
                  <router-link class="text-decoration-none white--text" :to="'/blog/'+blog.id" tag="a">{{
                      blog.title
                    }}
                  </router-link>
                </v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                {{ blog.dateCreate }}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>
                  {{ blog.exceptContent }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                    color="orange"
                    text
                >
                  Share
                </v-btn>

                <v-btn
                    color="orange"
                    text
                    :to="'/blog/'+blog.id"
                >
                  Read
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-lazy>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    recentlyBlog() {
      return this.$store.getters.recentlyBlogs
    }
  },
  name: 'comHome',


}
</script>
