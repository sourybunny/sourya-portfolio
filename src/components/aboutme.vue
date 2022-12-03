<template>
  <div class="mainbg">
    <div class="layout-container about">
      <div class="layout-container__inner">
        <v-layout row wrap class="align-start justify-space-between">
          <v-flex xs12 sm9 md6 lg5 class="pt-4">
            <p
              class="font-weight-medium white--text my-6 "
              :class="$vuetify.breakpoint.mdAndUp ? ' display-3' : 'display-1'"
            >
              About me.
            </p>
            <div class="grey--text text-h5 font-weight-light">
              Yay! welcome to my space.
              <div>
                Here's a quick summary about me and what I've been up to lately.
              </div>
            </div>
            <v-btn
              large
              href="https://www.linkedin.com/in/souryav/"
              target="_blank"
              dark
              class="text-capitalize mt-6 cardbgdark"
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
    <div class="layout-container">
      <div class="layout-container__inner">
        <v-layout row xs12 wrap>
          <v-flex xs12 sm9 md6 lg6>
            <div class="grey--text">
              <p class="font-weight-light mb-3 title">
                Hi there, I’m Sourya Varanasi. I am a
                <span class="is-relative circle-sketch-highlight"
                  >data-driven</span
                >
                UX/Product Designer graduating with an Ms. HCI degree from
                Indiana University Bloomington in May, 2023.
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
              <p class="text-h5 mt-6 white--text">Currently</p>
              <p class="font-weight-light mt-4 title">
                For the last 3 years, I've been working with diverse companies
                under many roles in digital product design. This
                interdisciplinary experience taught me how design processes
                could influence product and business decisions. These insights
                allow me to use design as a strategy rather than being just
                another deliverable.
              </p>
            </div>
            <v-expansion-panels dark accordion class="mt-8 ">
              <!-- <v-expansion-panel>
                <v-expansion-panel-header>
                  What am I passionate about?
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  
                </v-expansion-panel-content>
              </v-expansion-panel> -->
              <v-expansion-panel class="cardbgdark">
                <v-expansion-panel-header class="accordionbg1">
                  What's with the tangrams and butterflies?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 accordionbg1 darken-1">
                  As a child, I spent most of my play time solving puzzles and
                  building stuff. I love transforming material to bring life to
                  them. Over the years, these problem-solving skills shaped my
                  design mindset to tweak pixels in the digital world to
                  handcraft delightful experiences. I love to work during the
                  'metamorphosis'(like a butterfly) to bring products from idea
                  to life.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="cardbgdark">
                <v-expansion-panel-header class="accordionbg1 darken-1">
                  Who am I as a person?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 accordionbg1 darken-2">
                  I have growth mindset striving to get better by learning from
                  my peers and things around me. I observe nature and draw
                  inspiration from its manifold patterns to become a better
                  designer.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="cardbgdark">
                <v-expansion-panel-header class="accordionbg1 darken-2">
                  How did I build this site?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 accordionbg1 darken-3">
                  Apart from UX Design, I love to play around with HTML and CSS
                  to create fun interactions. My software engineering background
                  taught me all about web and helped me build this site using
                  Javascript and VueJs.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="cardbgdark">
                <v-expansion-panel-header class="accordionbg1 darken-3">
                  What do I specialize in?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4 accordionbg1 darken-4">
                  There were times I put on multiple hats while working for tech
                  startups. This experience helped me master development and
                  team-working skills. I can effectively communicate my designs
                  with product owners, developers and stakeholders at all levels
                  and work iteratively by receiving feedback.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel class="cardbgdark">
                <v-expansion-panel-header class="accordionbg1 darken-4">
                  What else can I do?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pt-4  accordionbg2 darken-3">
                  I'm a self-taught artist who can work with watercolor,
                  charcoal and acrylic paintings. Occasionally, I partcipated in
                  local exhibits in my city back in India to showcase my work.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
            <v-card flat class="mt-8 black">
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
    <Contact />
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";

export default {
  data: function() {
    return {
      isActive: false,
    };
  },
  components: {
    TangramAbout,
    Contact,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
// .intro-left {
//   max-width: 500px;
// }
.about {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.highlight {
  top: -2rem;
  left: 0rem;
  width: 100%;
  // height:100%;
  padding: 0;
}
</style>
