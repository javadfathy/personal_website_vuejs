<template>
  <v-container>
    <v-layout row wrap class="mt-3 blue-grey darken-4">
      <v-flex class="xs12 sm7">
        <v-carousel
            class="pa-1"
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
        >
          <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
          >
            <v-sheet
                :color="colors[i]"
                height="100%"
            >
              <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
              >
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex class="xs12 sm5">
        <div>
          <h2 class="blue-grey--text text--lighten-1 pt-5 pl-5">web development</h2>
          <p class="blue-grey--text text--lighten-2 pt-2 pl-5">this text is test this text is test this text is
            test </p>
          <v-divider></v-divider>
          <v-layout class="pl-3 pa-3">
            <p class="pr-3 blue-grey--text text--darken-1">Hard:</p>
            <v-progress-linear
                value="50"
                color="red"
                height="20"
            ></v-progress-linear>



          </v-layout>
          <div>
            <div class="">

              <v-chip-group
                  column
              >
                <span class="pa-2 blue-grey--text text--darken-1">lang us: </span>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <br>
    <v-layout row wrap class="mt-3 blue-grey darken-4">
      <v-flex class="xs12 sm7">
        <v-carousel
            class="pa-1"
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
        >
          <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
          >
            <v-sheet
                :color="colors[i]"
                height="100%"
            >
              <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
              >
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex class="xs12 sm5">
        <div>
          <h2 class="blue-grey--text text--lighten-1 pt-5 pl-5">web development</h2>
          <p class="blue-grey--text text--lighten-2 pt-2 pl-5">this text is test this text is test this text is
            test </p>
          <v-divider></v-divider>
          <v-layout class="pl-3 pa-3">
            <p class="pr-3 blue-grey--text text--darken-1">Hard:</p>
            <v-progress-linear
                value="50"
                color="red"
                height="20"
            ></v-progress-linear>



          </v-layout>
          <div>
            <div class="">

              <v-chip-group
                  column
              >
                <span class="pa-2 blue-grey--text text--darken-1">lang us: </span>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
                <v-chip>
                  html
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'comHome',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  }

}
</script>
