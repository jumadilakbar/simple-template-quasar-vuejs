<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated style="background-image: linear-gradient(to left,#1679AB,#5DEBD7);">
      <q-toolbar style="height: 70px;">
        <div class="row full-width my-padding-x">
          <q-toolbar-title class="text-h4 text-weight-bold">
            Green S.
          </q-toolbar-title>

          <div class="row">
            <q-tabs v-model="tab" shrink align="left" no-caps active-color="red-4" active-class="my-active-class"
              indicator-color="transparent" class="gt-xs">
              <q-route-tab to="/" name="Home" label="Home" />
              <q-route-tab to="/pricing" name="Pricing" label="Pricing" />
              <q-route-tab to="/service" name="Service" label="Service" />
              <q-route-tab to="/login" name="Login" label="Login" />
              <q-route-tab to="/register" name="Register" label="Register" />
            </q-tabs>

            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" class="lt-sm" />

          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" side="right">
      <q-list class="q-pl-md q-pt-md">

        <q-item class="align-x-cross row justify-end" active-class="my-menu-link">

          <q-btn dense round unelevated icon="close" @click="toggleLeftDrawer" size="xl" />
        </q-item>


        <q-item exact clickable v-ripple to="/" class="q-mt-xl text-subtitle1">
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/pricing" class="text-subtitle1">
          <q-item-section>Pricing</q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/service" class="text-subtitle1">
          <q-item-section>Service</q-item-section>
        </q-item>

        <q-item exact clickable v-ripple to="/login" class="text-subtitle1">
          <q-item-section>Login</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="register" class="text-subtitle1">
          <q-item-section>Register</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <div style="margin-top: 10px;"> -->
    <q-footer class="bg-gradient-dark" style="position: absolute">
      <q-toolbar>
        <q-toolbar-title class="text-grey">@Green Space</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- </div> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      tab: ref('tab1')
    }
  }
})
</script>
<style lang="scss">
.my-padding-x {
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
