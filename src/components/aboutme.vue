<template>
  <div class="black pt-14">
    <!-- <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.6,
      }"
      min-height="500"
      transition="fade-transition"
    > -->
      <v-container>
         <p class="font-weight-medium white--text  " :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'">About me.</p>
      </v-container>
      <v-container class="mt-5">
        <!-- <p class="font-weight-bold display-2">About Me.</p> -->
        <v-layout row xs12 wrap>
          <v-flex xs12 md6>
            <div class="pl-3 slate--text">
              <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
              <p class="font-weight-light mt-8 title">
                Hello again, I’m Sourya. I am a
                <strong class="white--text font-weight-medium"
                  >UX Generalist</strong
                >
                pursiung my
                <strong class="white--text font-weight-medium"
                  >Masters degree in Human-Computer Interaction Design</strong
                >
                at Indiana University Bloomington. Having a
                <strong class="white--text font-weight-medium"
                  >Bachelors degree in Computer Science Engineering</strong
                >, I learnt to convert my design solutions into functional
                prototypes.
              </p>
              <p class="font-weight-light mt-4 title">
                Over the past 4 years, I’ve worked in multiple roles at
                <strong class="white--text font-weight-medium">
                  IBM, Keyport Labs and Sensehawk Inc</strong
                >
                that helped me accrue a breadth of skills in the overall
                user-interface design of software applications.
              </p>
              <p class="font-weight-light mt-4 title">
                Working with the startup industry, as a
                <strong class="white--text font-weight-medium"
                  >UX designer, UX Engineer & Front-end developer</strong
                >, taught me how design processes could influence product and
                business decisions. These insights allow me to
                <strong class="white--text font-weight-medium"
                  >use design as a strategy rather than being just another
                  deliverable.</strong
                >
              </p>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex
            :order="$vuetify.breakpoint.xsOnly ? 1 : 2"
            xs12
            md5
            :right-align="!$vuetify.breakpoint.mobile"
          >
            <v-card flat class="mt-8 black">
              <v-img
                class=""
                max-width="400"
                max-height="500"
                :src="require(`@/assets/media/me/me.jpeg`)"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-btn medium class="my-8 text-capitalize" outlined rounded>
          see my resume
        </v-btn>
        <v-divider></v-divider>
      </v-container>
    <!-- </v-lazy> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.intro-left {
  max-width: 500px;
}
</style>
