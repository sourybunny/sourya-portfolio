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
<style lang="scss">
.layout-container {
  padding-left: 4rem;
  &__inner {
    padding: 4rem;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    .content-title {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 24px;
    }
    .content-body {
      font-family: 'Inter';
      font-size: 18px;
    }
  }
}
</style>