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
        <v-card flat tile>
         
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
