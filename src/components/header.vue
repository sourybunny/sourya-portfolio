<template>
  <div class="layout-container navbar">
    <div class="layout-container__inner px-10 py-5 ">
      <div class="d-flex white--text align-center justify-space-between">
        <div class="d-flex align-center black--text ml-6 justify-center font-weight-bold display-2" style="background:#fff;width:40px;height:40px;font-family:'';">SV</div>
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
export default {};
</script>

<style lang="scss">
.navbar {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  background: black;
}
</style>
