<template>
  <v-container fluid>
    <v-parallax
        dark
        src="@/assets/contact.jpg"
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            class="text-center"
            cols="12"
        >
          <h1 class="text-h4 font-weight-thin mb-4">
            CONTACT US
          </h1>
          <h4 class="subheading">
            ----------------------------
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-dialog v-model="dialog"
              transition="dialog-top-transition"
              max-width="600">
      <v-alert type="success">
        message send success
      </v-alert>
    </v-dialog>
    <v-layout flex wrap class="pa-6 mt-5 mb-5">
      <v-flex md6 xs12>
        <form @submit.prevent="onSubmitFrom">
          <v-card class="pa-4">
            <v-card-title>Send Message</v-card-title>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="form.first"
                  label="First name"
                  :rules="fieldRules"
                  hint="enter your first name"
                  required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                    v-model="form.last"
                    label="Last name"
                    :rules="fieldRules"
                    hint="enter your last name"
                    required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                    v-model="form.phone"
                    label="Phone"
                    :rules="fieldRules"
                    hint="enter your phone number"
                    required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                    v-model="form.email"
                    label="email"
                    :rules="emailRules"
                    hint="enter your email"
                    required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                    v-model="form.subject"
                    label="Subject message"
                    :rules="fieldRules"
                    hint="enter your subject"
                    required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                    v-model="form.message"
                    label="Message"
                    :rules="fieldRules"
                    hint="enter your message"
                    required></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="">
                <v-btn
                    class="float-right primary"
                    :disabled="!formIsValied"
                    type="submit"
                >Send</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </form>
      </v-flex>
      <v-flex md6 xs12>
        <v-layout row wrap>
          <v-flex xs12 class="pa-1">
            <v-expansion-panels popout class="pa-2">
              <v-expansion-panel v-for="item in 3" :key="item">
                <v-expansion-panel-header>
                  this faq is test!
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  text is test text is testtext is testtext is testtext is testtext is test
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <div class="pa-9">
              <v-layout flex wrap>
                <v-flex>
                  phone:
                </v-flex>
                <v-flex>
                  09123456789
                </v-flex>
              </v-layout>
              <v-layout flex wrap>
                <v-flex>
                  address:
                </v-flex>
                <v-flex>
                  Qom,Qom
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105008.93815806814!2d50.77923767058321!3d34.66658804092318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f93bb6eb88ce195%3A0xcc35bec1c2604470!2sQom%2C%20Qom%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1650801461102!5m2!1sen!2s"  width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'comHome',
  data () {
      return{
        dialog:false,
        form:{
          first:'',
          last:'',
          phone:'',
          email:'',
          subject:'',
          message:''
        },
        fieldRules: [
          v => !!v || 'this field is required!'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

      }
  },
  computed:{
    formIsValied(){
      return this.form.first !== '' && this.form.last !== '' && this.form.phone !== '' && this.form.email !== '' && this.form.subject !== '' && this.form.message !== '';
    }
  },
  methods:{
    onSubmitFrom(){
      this.dialog = true
    }
  }
}
</script>
