<template>
  <div class="layout-container navbar">
    <div class="layout-container__inner px-10 py-5 ">
      <div class="d-flex white--text align-center justify-space-between">
        
        <div @click.stop="$router.push({ path: '/' })" class="d-flex align-center is-pointer"><span><Logo class="mx-4" /></span><span style="font-family:'Sacramento',cursive; font-size:1.8rem;">Sv</span></div>
        <div class="d-flex align-center">
          <v-btn plain dark class="text-capitalize" @click.stop="$router.push({ path: '/' })">
            Home
          </v-btn>
          <v-btn plain dark class="text-capitalize" @click.stop="$router.push({ path: '/about' })">
            About
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './logo.vue';
export default {
  components:{
    Logo
  }
};
</script>

<style lang="scss">
.navbar {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background: black;
}
</style>
