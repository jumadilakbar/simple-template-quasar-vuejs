<template>
  <q-page class="my-padding-x q-ml-sm q-pa-sm ">
    <div class="row  text-center">
      <div class="col-md-12 col-xs-12 ">
        <div class="text-h3 text-weight-bold text-green" style="margin-top: 100px;">
          Welcome Back !
        </div>
        <div class="text-h6 q-mt-sm">
          Sign in to continue to Green Spaces
        </div>
      </div>

    </div>
    <div class="row q-mt-sm justify-center">
      <div class="col-md-3 col-xs-12 ">
        <q-card class="bg-gradient-primary my-card q-mb-sm">
          <q-card-section class="text-center">
            <div class="text-subtitle1  q-mb-sm">Login with</div>
            <q-btn no-caps class="text-primary q-ma-xs"> <q-icon name="img:/src/assets/icon-svg/google.svg" />
              <label style="padding-left: 0.55em;" for="">Google</label>
            </q-btn>
            <q-btn no-caps class="text-primary q-ma-xs"> <q-icon name="img:/src/assets/icon-svg/github.svg" />
              <label style="padding-left: 0.55em;" for="">Github</label>
            </q-btn>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input filled v-model="name" type="email" label="Email " lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type your email']">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input filled type="password" v-model="age" label="Password " lazy-rules :rules="[
                val => val !== null && val !== '' || 'Please type your password',
              ]">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <a href=""> Forgot Password</a>
              <!-- <q-toggle v-model="accept" label="Remember me" /> -->

              <div class="text-center">
                <q-btn label="Login" type="submit" color="primary" style="width: 100%;" />
              </div>
            </q-form>

          </q-card-section>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { fasFont } from '@quasar/extras/fontawesome-v5'
export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      name: null,
      age: null,
      accept: false
    }
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    }
  },
});
</script>
