<template>
  <div class="mainbg">
    <v-container>
      <v-card flat class="mainbg d-flex align-center " height="100vh">
        <v-layout row xs12 wrap class="mb-16 mx-auto align-center py-16">
          <v-spacer></v-spacer>
          <v-flex xs12 sm7>
            <!-- <div
              class="white--text mb-4 text-uppercase subheading"
              style="opacity:0.6;"
            >
              Hello / Namastey
            </div> -->
            <div class="">
              <p class="font-weight-medium display-4 white--text ">
                <span>
                  I'm
                </span>

                <span class="white--text font-weight-medium display-4"
                  >Sourya.</span
                >
              </p>
              <!-- style="font-family:'Playfair Display' !important;" -->
              <p class="my-6 slidee-up">
                <span class="gradient text-shine display-3 font-weight-medium"
                  >I design and < build />
                </span>
                <span
                  style="opacity:0.6;"
                  class="white--text display-3 font-weight-medium mb-3"
                  >products that delight and inspire people.</span
                >
              </p>

              <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
              <div class="fadee-in">
                <div
                  class="font-weight-light mt-11 white--text title intro-left"
                >
                  <span style="opacity:0.6;"
                    >Currently a master’s student at
                  </span>
                </div>
                <div class="white--text font-weight-medium title">
                  Indiana University Bloomington’s HCI program.
                </div>
                <div class="text-left mt-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mr-2 darken-3"
                        fab
                        dark
                        small
                        color="grey"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon dark>
                          mdi-linkedin
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Linkedin</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mx-2 darken-3"
                        fab
                        dark
                        small
                        color="grey"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon dark>
                          mdi-mail
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Email</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mx-2 darken-3"
                        fab
                        dark
                        small
                        color="grey"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <i class="fab fa-2x fa-behance-square"></i>
                      </v-btn>
                    </template>
                    <span>Behance</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        class="mx-2 darken-3"
                        fab
                        dark
                        small
                        color="grey"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon dark>
                          mdi-instagram
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Instagram</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex
            :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
            xs12
            sm5
            center-align
          >
          </v-flex>
        </v-layout>
      </v-card>
      <div class="text-center" >
        <v-btn class="darken-3" style="margin-top:-10rem;" fab dark small color="transparent">
          <v-icon dark>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.intro-left {
  // max-width: 800px;
}
.has-stroke {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

#motion-demo {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  offset-rotate: auto;
  animation: 3.5s move 1.5s 1 forwards ease-in-out;
  offset-path: path("M5,16 q20,95 360,104 q237,17 248,228");
  // clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%, 25% 50%);
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

.text-animatebg {
  background-position: left;
  background-size: 0% 100%;
  background-image: linear-gradient(blue, red);
  transition: all 500ms ease-in-out;
  &:hover {
    background-size: 100% 100%;
  }
}
</style>
