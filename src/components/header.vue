<template>
  <div class="layout-container navbar" :class="{
    'removeBorder': $route.path == '/plan' || $route.path == '/streamanity' || $route.path == '/therm'
  }">
    <div class="layout-container__inner header"  :class=" $route.path == '/plan' || $route.path == '/streamanity' || $route.path == '/therm' ? 'py-2' : 'py-5'">
      <div class="d-flex white--text align-center justify-space-between">
        <div @click.stop="$router.push({ path: '/' })" class="d-flex align-center is-pointer">
          <span>
            <Logo class="mr-3" />
          </span><span class="name-gradient" style="font-family:'Homemade apple',cursive; font-size:1.4rem;">Sv</span>
        </div>
        <div class="d-flex align-center">
          <!-- <v-btn
            plain
            dark
            class="text-capitalize"
            @click.stop="$router.push({ path: '/' })"
          >
            Home
          </v-btn> -->
          <v-btn plain dark class="text-capitalize" @click.stop="$router.push({ path: '/about' })">
            About
          </v-btn>
          <v-btn plain dark class="text-capitalize" @click.stop="$router.push({ path: '/shots' })">
            Visuals
          </v-btn>
          <v-btn plain target="_blank" :href="'https://drive.google.com/file/d/1jHMl659Nz0ijDHgk1lbjpCal7TgA_Btd/view?usp=sharing'
            " dark class="text-capitalize">
            Resume
          </v-btn>
          <!-- <v-btn href="mailto:sourya0411@gmail.com" target="_blank" plain dark v-bind="attrs" v-on="on"
            class="text-lowercase">
            sourya0411@gmail.com
          </v-btn> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
.navbar {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.removeBorder {
  .layout-container__inner {
    border: 0;
  }
}
</style>
