<template>
  <v-app>
    <v-app-bar flat app color="nav" class="">
      <v-container class="d-flex align-center">
        <h4 @click="$router.push({path:'/'})" class="black--text is-pointer">Sourya Varanasi</h4>
        <v-spacer></v-spacer>

        <v-btn
         @click="$router.push({path:'/projects'})"
          text
        >
          <span class="mr-2 text-capitalize body-1">Work</span>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2 text-capitalize body-1">Extras</span>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2 text-capitalize body-1">About</span>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2 text-capitalize body-1">Resume</span>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="px-3 px-sm-6">
      <router-view>
        <Home />
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home";

export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.v-application {
  font-family: "OpenSans";
}
</style>
