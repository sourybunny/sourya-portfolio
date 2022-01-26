<template>
  <v-app>
    <v-app-bar flat app color="black" dark class="" hide-on-scroll>
      <v-container class="d-flex align-center">
        <span @click="$router.push({ path: '/' })" class="white--text is-pointer headline font-weight-medium">
          Sourya Varanasi
        </span>
        <v-spacer></v-spacer>

        <v-btn depressed @click="$router.push({ path: '/projects' })" text>
          <span class="mr-2 text-capitalize body-1">Projects</span>
        </v-btn>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2 text-capitalize body-1">Extras</span>
        </v-btn>
        <v-btn @click="$router.push({path:'/'})"
          href="#about"
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
    <v-main>
      <router-view>
        <Home class="px-3 px-sm-6" />
      </router-view>
    </v-main>
    <template>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="primary text-center">
            <strong class="body-2 "
              >This site is a work in progress, built with Vuetify using VueJs and hosted by Netlify</strong
            >

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
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

