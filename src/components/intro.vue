<template>
  <div class="black">
    <v-container>
      <v-card flat class="black d-flex align-center" height="80vh">
      <v-layout row xs12 wrap class="mb-16 mx-auto py-16">
        <v-spacer></v-spacer>
        <v-flex xs12 sm8>
          <div>
            <p class="font-weight-bold display-3 white--text ">
              <span style="opacity:0.4;"> Hey, I'm </span>

              <span class="white--text font-weight-bold display-3">Sourya</span>
            </p>
            <p class="gradient display-2 mb-2 font-weight-bold ">
              I Design and < Code /> stuff!
            </p>

            <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
            <div class="font-weight-light mt-8 white--text title intro-left">
              <span style="opacity:0.6;">Currently a master’s student at </span>
              
            </div>
            <div class="white--text font-weight-medium title"
                >Indiana University Bloomington’s HCI program.</div
              >
          </div>
        </v-flex>
        <v-flex
          :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
          xs12
          sm4
          center-align

        >
          <h1 class="white--text">image</h1>
        </v-flex>
      </v-layout>
      <!-- <v-divider></v-divider> -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro-left {
  // max-width: 800px;
}
</style>
