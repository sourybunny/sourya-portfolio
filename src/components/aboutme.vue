<template>
  <div class="mainbg">
    <div class="layout-container bottom-line about">
      <div class="layout-container__inner">
        <v-layout row wrap class="align-start justify-space-between">
          <v-flex xs12 sm9 md6 lg5 class="pt-4">
            <p
              class="font-weight-bold white--text my-6 "
              :class="$vuetify.breakpoint.mdAndUp ? ' display-3' : 'display-1'"
            >
              About <span class="tangram_blue--text text--lighten-1 aboutme-gradient">Me</span>
            </p>
            <div class="text-h5 grey--text font-weight-light">
              <!-- Yay! welcome to my space. -->
              <div>
                I'm a digital designer
                <span class="text-highlight">transforming</span> products to
                <span class="text-highlight">humanize</span> them.
              </div>
            </div>
            <v-btn
              large
              href="https://www.linkedin.com/in/souryav/"
              target="_blank"
              dark
              class="text-capitalize mt-6 tangram_blue"
              >Let's Connect
              <v-icon dark>
                mdi-arrow-right
              </v-icon></v-btn
            >
          </v-flex>
          <v-flex
            class="about-right"
            :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'"
            xs12
            sm3
            md6
            lg5
          >
            <div>
              <TangramAbout />
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div class="layout-container bottom-line">
      <div class="layout-container__inner">
        <v-layout row xs12 wrap>
          <v-flex xs12 sm9 md6 lg6>
            <div class="grey--text">
              <p class="font-weight-light mb-3 title">
                Hi there, I’m Sourya Varanasi. I am a
                <span class="is-relative text-highlight circle-sketch-highlight"
                  >data-driven UX/Product Designer </span
                >graduating with an MS. HCI degree from Indiana University
                Bloomington in May, 2023.
              </p>
              <v-btn
                target="_blank"
                :href="
                  'https://drive.google.com/file/d/1gdGL15zRp1lD_1Qd9UXsCJb0K-VYlfin/view?usp=sharing'
                "
                dark
                class="text-capitalize cardbgdark font-weight-light my-2"
              >
                View Resume
                <v-icon dark small class="ml-1">
                  mdi-file-document-outline
                </v-icon>
              </v-btn>
              <p class="text-h5 mt-6 title-gradient white--text">Currently</p>
              <p class="font-weight-light mt-4 title">
                For the last 3 years, I've been working with diverse companies
                under many roles in digital product design. This
                interdisciplinary experience taught me how design processes
                could influence product and business decisions. These insights
                allow me to use design as a strategy rather than being just
                another deliverable.
              </p>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex
            :order="$vuetify.breakpoint.xsOnly ? 1 : 2"
            xs12
            sm3
            md6
            lg4
            :right-align="!$vuetify.breakpoint.mobile"
          >
            <v-card flat class="mt-2 black">
              <v-img
                class=""
                max-width="400"
                max-height="500"
                :src="require(`@/assets/headshot-min.jpeg`)"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
       

        <!-- <v-btn medium class="my-8 text-capitalize" outlined rounded>
          see my resume
        </v-btn> -->
      </div>
    </div>
     <div class="layout-container">
          <div class="layout-container__inner">
           
              <!-- <v-card>
                <v-card-title>
                  What am I passionate about?
                </v-card-title>
                <v-card-text>
                  
                </v-card-text>
              </v-card> -->
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="600" min-height="320">
                    <v-card-title class="green-gradient bottom-line--light">
                      Metaphors and Metamorphosis...
                    </v-card-title>
                    <v-card-text
                      class="pt-4 text-h6 paragraph-gradient font-weight-light darken-1"
                    >
                      As a child, I spent most of my play time solving puzzles
                      and building stuff. I love transforming material to bring
                      life to them. These problem-solving skills
                      shaped my design mindset to tweak pixels in the digital
                      world to handcraft delightful experiences. I love to work
                      during the 'metamorphosis'(like a butterfly) to bring
                      products from idea to life.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="600" min-height="320">
                    <v-card-title class="purple-gradient bottom-line--light">
                      Design and Me...
                    </v-card-title>
                    <v-card-text
                      class="pt-4 text-h6 paragraph-gradient font-weight-light darken-4"
                    >
                      I have a growth mindset striving to get better by keeping up with everything that's happening in the design industry around the world. I observe the environment and
                      take inspiration from it to become a
                      better designer because <span class="font-italic">"observation leads to ideas and ideas lead to innovation".</span>- a philosophy that drives the designer in me.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="600" min-height="320">
                    <v-card-title class="red-gradient bottom-line--light">
                      Collaboration and Communication...
                    </v-card-title>
                    <v-card-text
                      class="pt-4 text-h6 paragraph-gradient font-weight-light darken-2"
                    >
                      There were times I put on multiple hats while working for
                      tech startups. This experience helped me master
                      collaboration skills. I believe discussions bring insights and I can effectively communicate my
                      designs with product owners, developers and stakeholders
                      at all levels to work iteratively by receiving feedback.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="600" min-height="320">
                    <v-card-title class="orange-gradient bottom-line--light">
                      Engineering and Design...
                    </v-card-title>
                    <v-card-text
                      class="pt-4 text-h6 paragraph-gradient font-weight-light darken-3"
                    >
                      Apart from UX Design, I love to play around with HTML and
                      CSS to make lively interactions. My software engineering
                      background taught me all about web and helped me build
                      this site using Javascript and VueJs.
                    </v-card-text>
                  </v-card>
                </v-flex>
                
              </v-layout>

              <!-- <v-card class="cardbgdark">
                <v-card-title class=" darken-4">
                  What else can I do?
                </v-card-title>
                <v-card-text class="pt-4  accordionbg2 darken-3">
                  I'm a self-taught artist who can work with watercolor,
                  charcoal and acrylic paintings. Occasionally, I partcipated in
                  local exhibits in my city back in India to showcase my work.
                </v-card-text>
              </v-card> -->
          </div>
        </div>
    <!-- <Grid /> -->
    <Contact />
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";
import Grid from "./grid.vue";

export default {
  data: function() {
    return {
      isActive: false,
    };
  },
  components: {
    TangramAbout,
    Contact,
    Grid,
  },
};
</script>

<style lang="scss" scoped>
// .intro-left {
//   max-width: 500px;
// }
.bottom-line {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  &--light{
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  }
}
.green-gradient {
      background-image: linear-gradient(124deg, #5dc942, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.orange-gradient {
    background-image: linear-gradient(138deg, #e5a500, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.red-gradient {
    background-image: linear-gradient(128deg, #fe335e, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.purple-gradient {
    background-image: linear-gradient(140deg, #7b79ff, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
