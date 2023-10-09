<template>
  <div class="mainbg layout-container intro">
    <div class="layout-container__inner">
      <!-- <v-card flat class="mainbg d-flex align-center py-6"> -->
      <v-layout wrap class="align-center justify-space-between py-6">
        <v-flex xs12 sm9 md8 lg7>
          <div class="">
            <div class="font-weight-medium white--text text-h3" >
                <span class="font-italic"> Hello! </span>
                <span> I'm </span>

                <span>Sourya,</span>
              </div>
            <div class="my-8 slidee-up">
              <span
                style="white-space: nowrap; line-height: 115%"
                class="gradient text-shine font-weight-medium"
                :class="
                  $vuetify.breakpoint.lgAndUp
                    ? 'display-3'
                    : $vuetify.breakpoint.mdAndUp
                    ? 'display-2'
                    : 'display-1'
                "
                >I design and < build />
              </span>
              <div
                :class="
                  $vuetify.breakpoint.lgAndUp
                    ? 'display-3'
                    : $vuetify.breakpoint.mdAndUp
                    ? 'display-2'
                    : 'display-1'
                "
                style="opacity: 0.6; line-height: 115%"
                class="white--text font-weight-medium"
              >
                products that delight <br v-if="$vuetify.breakpoint.smAndUp" />
                and inspire people.
              </div>
            </div>

            <!-- <p>I am a developer turned designer building experiences that bring joy</p> -->
            <div class="fadee-in">
              <!-- <div class="font-weight-light mt-10 white--text title intro-left">
                <span
                  style="opacity:0.6;"
                  :class="$vuetify.breakpoint.mdAndUp ? '' : 'body-1'"
                  >Currently a master’s student at
                </span>
              </div>
              <div
                class="white--text font-weight-medium"
                :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1'"
              >
                Indiana University Bloomington’s HCI program.
              </div> -->
              
              <div class="font-weight-light title white--text" style="opacity: 0.6">
                Passionate about visual craft and AI/ML interaction design.
              </div>
              <div
                class="white--text font-weight-light"
                :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1'"
              >
                <span style="opacity: 0.6">Currently </span> UX Designer
                <a
                  href="https://ushur.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >@Ushur - AI SaaS</a
                >
              </div>
              <div
                class="white--text font-weight-light"
                :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1'"
              >
                <span
                  class="font-weight-light"
                  :class="$vuetify.breakpoint.mdAndUp ? '' : 'body-1'"
                  style="opacity: 0.6"
                  >MS HCI </span
                >@Indiana University Bloomington.
                <!-- <div class="font-weight-light"
                  :class="$vuetify.breakpoint.mdAndUp ? '' : 'body-1'"
                  
                  ><span style="opacity:0.6;">Previously </span>
                <span>
                  <a 
                    href="https://uits.iu.edu/about/our-people/org-structure/enterprise-systems"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@UITS IUB</a
                  ></span
                >,
                <span>
                  <a
                    href="https://www.richs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@Rich's</a
                  ></span
                >,
                <span>
                  <a 
                    href="https://www.sensehawk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@Sensehawk</a
                  ></span
                >,
                <span>
                  <a 
                    href="https://streamanity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@Streamanity</a
                  ></span
                >.
              </div> -->
              </div>

              <!-- <div
                class="white--text"
                :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1'"
              >
                
              </div> -->
              <div class="text-left mt-5">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      href="https://www.linkedin.com/in/souryav/"
                      target="_blank"
                      class="mr-2"
                      fab
                      dark
                      small
                      color="cardbgdark"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon dark> mdi-linkedin </v-icon>
                    </v-btn>
                  </template>
                  <span>Linkedin</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      href="mailto:sourya0411@gmail.com"
                      target="_blank"
                      class="mx-2"
                      fab
                      dark
                      small
                      color="cardbgdark"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon dark> mdi-mail </v-icon>
                    </v-btn>
                  </template>
                  <span>Email</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      href="https://www.behance.net/sourya"
                      target="_blank"
                      class="mx-2 white--text"
                      fab
                      dark
                      small
                      color="cardbgdark"
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
                      href="https://www.instagram.com/sourya_sketches/"
                      target="_blank"
                      class="mx-2"
                      fab
                      dark
                      small
                      color="cardbgdark"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon dark> mdi-instagram </v-icon>
                    </v-btn>
                  </template>
                  <span>Instagram</span>
                </v-tooltip>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex
          class="intro-right"
          :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
          xs12
          sm3
          md4
          lg5
        >
          <div class="is-relative">
            <Tangram />
            <v-card
              dark
              width="230"
              class="px-3 rounded-xl is-absolute my-story cardbgdark"
              elevation="12"
              @click="$router.push('/about')"
            >
              <div class="d-flex align-center">
                <v-avatar size="44px" color="surface-variant">
                  <v-img
                    alt="Avatar"
                    :src="require('../assets/headshot-min.jpeg')"
                  ></v-img>
                </v-avatar>
                <div class="pa-3">
                  <div class="h5 font-weight-medium">My Story</div>
                  <div class="grey--text">Product Designer</div>
                </div>
              </div>
            </v-card>
            <!-- <v-card
                dark
                max-width="120"
                class="rounded-xl is-absolute my-work cardbgdark"
                elevation="12"
              >
                <v-btn
                  @click="$vuetify.goTo('#work', options)"
                  plain
                  rounded
                  class="h5 text-capitalize px-4 font-weight-medium pa-2"
                  >My Work</v-btn
                >
              </v-card>
              <v-card
                dark
                max-width="140"
                class=" rounded-xl is-absolute my-process cardbgdark"
                elevation="12"
              >
                <v-btn
                  rounded
                  plain
                  class="h5 text-capitalize font-weight-medium px-4"
                  >My Process</v-btn
                >
              </v-card> -->
          </div>
        </v-flex>
      </v-layout>
      <!-- </v-card> -->
      <!-- <div class="text-center" v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn class="darken-3" style="margin-top:-10rem;" fab dark small color="transparent">
          <v-icon dark>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </div> -->
    </div>
  </div>
</template>

<script>
import Tangram from "./tangram.vue";
export default {
  components: {
    Tangram,
  },
};
</script>

<style lang="scss">
.intro-left {
  // max-width: 800px;
}
.v-application .mainbg {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
.intro {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.has-stroke {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.link-text {
  color: rgb(126, 151, 198);
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

.intro-right {
  .my-story {
    position: absolute;
    top: 5%;
    left: 10%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
  .my-work {
    position: absolute;
    top: 40%;
    left: 2%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
  .my-process {
    position: absolute;
    top: 28%;
    left: 5%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
