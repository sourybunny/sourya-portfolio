<template>
  <div>
    <v-container class="my-16">
      <v-layout row xs12 wrap class="my-16 py-16">
        <v-flex xs12 sm8>
          <div>
            <p class="font-weight-bold display-3">
              Hey, I'm
              <span class="primary--text font-weight-bold display-3"
                >Sourya</span
              >
            </p>
            <p class="gradient display-3 font-weight-bold ">
              I Design and < Code /> stuff!
            </p>

            <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
            <p class="font-weight-light mt-8 title intro-left">
              Currently a master’s student at
              <strong class="primary--text font-weight-medium"
                >Indiana University Bloomington’s HCI program.</strong
              >
            </p>
          </div>
        </v-flex>
        <v-flex
          :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
          xs12
          sm4
          center-align
        >
          <h1>image</h1>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro-left {
  max-width: 600px;
}
</style>
