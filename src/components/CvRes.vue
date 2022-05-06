<template>
  <v-container>
    <v-layout row wrap class="mt-4 mb-4">
      <v-flex lg3 class="blue accent-3">
        <div>
          <v-img src="@/assets/me.jpg" class="ma-4 rounded-xl" style="border: 5px solid white">
          </v-img>
          <v-divider></v-divider>
          <div>
            <v-layout flex column class="pa-4">
              <v-flex>
                <v-row>
                  <v-col><h4>Contact Information</h4></v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <p>
                      <v-icon small>mdi-map-marker</v-icon>
                      Qom, Qom
                    </p>
                    <p>
                      <v-icon small>mdi-phone</v-icon>
                      09210516286
                    </p>
                    <p>
                      <v-icon small>mdi-email</v-icon>
                      javadwebdeveloper@gmail.com
                    </p>
                  </v-col>
                </v-row>
              </v-flex>
              <v-divider></v-divider>
              <v-flex>
                <v-row>
                  <v-col><h4>Personal Information</h4></v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-row>
                      <v-col>
                        Age:
                      </v-col>
                      <v-col class="text-right">20</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Marital Status:
                      </v-col>
                      <v-col class="text-right">Single</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Gender:
                      </v-col>
                      <v-col class="text-right">Male</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Military:
                      </v-col>
                      <v-col class="text-right">Academic Exemption</v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col><h4>Job Information</h4></v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-row>
                      <v-col>
                        Condition Employment:
                      </v-col>
                      <v-col class="text-right">-</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Job Type:
                      </v-col>
                      <v-col class="text-right">-</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Expected salary:
                      </v-col>
                      <v-col class="text-right">-</v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        Social Networks:
                      </v-col>
                      <v-col class="text-right">-</v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
      <v-flex lg9 class="white">
        <div class="ma-8">
          <h1 class="black--text">Javad Fathi</h1>
          <h3 class="grey--text text--darken-3">Web developer - Front end - Programmer</h3>
        </div>

        <v-tabs
            v-model="tab"
            background-color="blue accent-3"
            active-class="blue darken-4"
            lefted

            icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            About Me
            <v-icon>mdi-information-variant</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            History Work
            <v-icon>mdi-history</v-icon>
          </v-tab>

          <v-tab href="#tab-3">
            Education
            <v-icon>mdi-account-school-outline</v-icon>
          </v-tab>

          <v-tab href="#tab-4">
            Technical Skills
            <v-icon>mdi-language-javascript</v-icon>
          </v-tab>

          <v-tab href="#tab-5">
            Certificates
            <v-icon>mdi-certificate</v-icon>
          </v-tab>

          <v-tab href="#tab-6">
            Soft skills
            <v-icon>mdi-account-multiple</v-icon>
          </v-tab>

          <v-tab href="#tab-7">
            Language
            <v-icon>mdi-web</v-icon>
          </v-tab>

          <v-tab href="#tab-8">
            Other Projects
            <v-icon>mdi-github</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="ma-1 pa-3 blue accent-2">
          <v-tab-item value="tab-1" key="1">
            <p>
              Software Student - Three years of experience in the field of web (Front & Beck) - Design & Commissioning more than
              5 dedicated website templates - Lover of Learning
            </p>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-timeline>
              <v-timeline-item color="blue-grey" small>
                <template v-slot:opposite>
                  <span class="headline font-weight-bold blue-grey--text text--darken-4">
                    2019
                  </span>
                </template>
                <div class="py-4">
                  <h2 class="headline font-weight-light mb-4 blue-grey--text text--darken-4">
                    WebSite Madareno
                  </h2>
                  <div>
                    <p>
                      this text is test this text is testthis text is testthis text is testthis text is testthis text is test
                    </p>
                    <v-btn class="blue-grey--text text--darken-4 blue-grey">See More</v-btn>
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item color="blue-grey" small>
                <template v-slot:opposite>
                  <span class="headline font-weight-bold green--text text--darken-4">
                    2020
                  </span>
                </template>
                <div class="py-4">
                  <h2 class="headline font-weight-light mb-4 green--text text--darken-4">
                    WebSite Madareno
                  </h2>
                  <div>
                    <p>
                      this text is test this text is testthis text is testthis text is testthis text is testthis text is test
                    </p>
                    <v-btn class="green--text text--darken-4 green">See More</v-btn>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item color="blue-grey" small>
                <template v-slot:opposite>
                  <span class="headline font-weight-bold red--text text--darken-4">
                    2021
                  </span>
                </template>
                <div class="py-4">
                  <h2 class="headline font-weight-light mb-4 red--text text--darken-4">
                    WebSite Madareno
                  </h2>
                  <div>
                    <p>
                      this text is test this text is testthis text is testthis text is testthis text is testthis text is test
                    </p>
                    <v-btn class="red--text text--darken-4 red">See More</v-btn>
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item color="blue-grey" small>
                <template v-slot:opposite>
                  <span class="headline font-weight-bold blue-grey--text text--darken-4">
                    2022
                  </span>
                </template>
                <div class="py-4">
                  <h2 class="headline font-weight-light mb-4 blue-grey--text text--darken-4">
                    WebSite Madareno
                  </h2>
                  <div>
                    <p>
                      this text is test this text is testthis text is testthis text is testthis text is testthis text is test
                    </p>
                    <v-btn class="blue-grey--text text--darken-4 blue-grey">See More</v-btn>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-tab-item>
          <v-tab-item value="tab-3">
            ffff
          </v-tab-item>
          <v-tab-item value="tab-4">
            ffff
          </v-tab-item>
          <v-tab-item value="tab-5">
            ffff
          </v-tab-item>
          <v-tab-item value="tab-6">
            ffff
          </v-tab-item>
          <v-tab-item value="tab-7">
            ffff
          </v-tab-item>
          <v-tab-item value="tab-8">
            ffff
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'comHome',
  data(){
    return{
      // cv:[
      //   {id:'',title:'',content:''}
      // ],
      tab: null,
     // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ],
    }
  }

}
</script>
