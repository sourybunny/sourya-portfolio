<template>
  <div class="black">
    <v-container>
      <v-card flat class="black d-flex align-center" height="100vh">
        <v-layout row xs12 wrap class="mb-16 mx-auto py-16">
          <v-spacer></v-spacer>
          <v-flex xs12 sm7>
            <div class="white--text mb-4 text-uppercase body-2" style="opacity:0.6;">Hello / Namastey</div>
            <div>
              <p class="font-weight-medium display-4 white--text ">
                <span style="opacity:0.4;font-family:'Limelight' !important;"> I'm </span>

                <span class="white--text font-weight-medium display-4" style="font-family:'Limelight' !important;"
                  >Sourya.</span
                >
              </p>
              <p class="my-6">
                <span class="gradient display-3 font-weight-medium">I design and < build /> products </span> <span style="opacity:0.6;" class="white--text display-3 font-weight-medium mb-3">that delight and inspire people.</span>
              </p>

              <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
              <div class="font-weight-light mt-11 white--text title intro-left">
                <span style="opacity:0.6;"
                  >Currently a master’s student at
                </span>
              </div>
              <div class="white--text font-weight-medium title">
                Indiana University Bloomington’s HCI program.
              </div>
            </div>
          </v-flex>
          <v-flex
            :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
            xs12
            sm5
            center-align
          >
            <h1 class="white--text">image</h1>
          </v-flex>
        </v-layout>
        <!-- <v-divider></v-divider> -->
      </v-card>
      <!-- <v-divider class="py-1 grey" style="opacity:0.4;"></v-divider> -->
    </v-container>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" >
.intro-left {
  // max-width: 800px;
}
.has-stroke {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>
