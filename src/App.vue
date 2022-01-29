<template>
  <v-app>
    <Header />
    
    <v-main class="pa-0">
      <template>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </template>
    </v-main>
    <template>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="grey darken-3 text-center">
            <strong class="body-2 "
              >This site is a work in progress, built with Vuetify using VueJs
              and hosted by Netlify</strong
            >

            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            <strong>2022</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import Header from "./components/header";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>
