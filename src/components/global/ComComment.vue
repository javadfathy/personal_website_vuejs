<template>
  <v-container>
    <form class=" pa-6">
      <h4 class="grey--text text--darken-1">Add Comment</h4>
      <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          prepend-inner-icon="mdi-account"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
          hint="please enter your name"
      ></v-text-field>
      <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          prepend-inner-icon="mdi-email"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          hint="please enter your email"
      ></v-text-field>
        <v-textarea
            v-model="message"
            :error-messages="messageErrors"
            required
            prepend-inner-icon="mdi-comment"
            class="mx-2"
            label="Comment"
            hint="please enter your comment"
            rows="1"
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
        ></v-textarea>

      <v-btn
          class="mr-4"
          @click="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </v-container>
</template>

<style>

</style>


<script>
import {validationMixin} from 'vuelidate'
import {required, maxLength, email} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: {required, maxLength: maxLength(10)},
    email: {required, email},
    message: {required},
  },

  data: () => ({
    name: '',
    email: '',
    message: '',
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('Message  is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.message=''
    },
  },
}
</script>