<template>
  <div class="">
    <div class="layout-container ">
      <div class="layout-container__inner">
        <section-title :is_dark="true" :title="'About me'"></section-title>
        <div class="text-h4 white--text py-8 text-center mx-auto" style="max-width: 70%;">
          From a young age, I enjoyed solving puzzles and building stuff,
          nurturing my creativity and shaping my design mindset
        </div>
        <v-layout xs12 wrap align-end>
          <v-flex xs12 sm9 md6 lg6 class="about">
            <div class="about-right">
              <TangramAbout />
            </div>
            <div class="white--text text-center text-h6 font-weight-light mt-6">
              Design, to
                  me, mirrors the graceful metamorphosis of a butterfly, where
                  ideas undergo a transformative journey to emerge as beautiful
                  and impactful products.
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs12 sm3 md7 lg4 :right-align="!$vuetify.breakpoint.mobile">
            <v-card flat class="mt-2 black">
              <v-img class="" :src="require(`@/assets/blue.png`)"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout wrap class="align-start justify-space-between">
          <!-- <v-flex xs12 sm9 md6 lg5 class="pt-4">
            <p
              class="font-weight-bold white--text my-6"
              :class="$vuetify.breakpoint.mdAndUp ? ' display-3' : 'display-1'"
            >
              About
              <span class="tangram_blue--text text--lighten-1 aboutme-gradient"
                >Me</span
              >
            </p>
            <div class="headline grey--text font-weight-light text-loop">
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
              >Let's Connect <v-icon dark> mdi-arrow-right </v-icon></v-btn
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
          </v-flex> -->
        </v-layout>
      </div>
    </div>
    <div class="layout-container bottom-line">
      <div class="layout-container__inner about">
        

        <!-- <v-btn medium class="my-8 text-capitalize" outlined rounded>
          see my resume
        </v-btn> -->
      </div>
    </div>
    <section>
      <div class="layout-container bottom-line">
        <div class="layout-container__inner">
          <v-layout row wrap>
            
            <v-flex xs12 md6>
              <v-card
                elevation-20
                dark
                class="cardbgdark my-4 mx-auto"
                max-width="580"
                min-height="280"
              >
                <v-card-title class="purple-gradient bottom-line--light">
                  Design and Me...
                </v-card-title>
                <v-card-text
                  class="pt-4 body-1 paragraph-gradient font-weight-light darken-4"
                >
                  As a designer, I embrace a growth mindset and strive to
                  continuously improve by staying abreast of the latest
                  developments in the design industry worldwide. I approach
                  design with a keen sense of observation, drawing inspiration
                  from my surroundings to fuel my creative process. I firmly
                  believe that observation leads to ideas, and ideas lead to
                  innovation—a philosophy that drives the designer in me.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card
                elevation-20
                dark
                class="cardbgdark my-4 mx-auto"
                max-width="580"
                min-height="280"
              >
                <v-card-title class="red-gradient bottom-line--light">
                  Collaboration and Communication...
                </v-card-title>
                <v-card-text
                  class="pt-4 body-1 paragraph-gradient font-weight-light darken-2"
                >
                  My experience in tech startups has allowed me to wear multiple
                  hats, fostering strong collaboration skills. I believe in the
                  power of discussions to bring valuable insights, and I
                  effectively communicate my designs with product owners,
                  developers, and stakeholders at all levels. Embracing an
                  iterative approach, I welcome feedback to continuously refine
                  and enhance my designs.
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- <v-flex xs12 md6>
              <v-card
                elevation-20
                dark
                class="cardbgdark my-4 mx-auto"
                max-width="580"
                min-height="280"
              >
                <v-card-title class="orange-gradient bottom-line--light">
                  Engineering and Design...
                </v-card-title>
                <v-card-text
                  class="pt-4 body-1 paragraph-gradient font-weight-light darken-3"
                >
                  My approach is rooted in the fusion of creativity and
                  technical expertise, where I strive to craft innovative and
                  user-centered solutions that seamlessly integrate form and
                  function. Drawing from my background in engineering, I bring a
                  unique perspective to my design process, leveraging my
                  understanding of technical constraints and possibilities to
                  inform my creative decisions.
                </v-card-text>
              </v-card>
            </v-flex> -->
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
    </section>

    <!-- <Grid /> -->
    <div class="mainbg is-relative">
      <!-- <img
      class="is-absolute" height="80%"
      :src="require(`@/assets/media/intro/grid.svg`)"
    /> -->

      <div class="layout-container">
        <div class="white--text py-16 layout-container__inner">
          <v-layout row wrap justify-space-between class="">
            <v-flex xs7>
              <img
                data-aos="slide-down"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
                data-aos-duration="500"
                width="100"
                height="100"
                class="sticker"
                :src="require(`@/assets/media/stickers/thanks.png`)"
              />

              <div class="d-flex align-center">
                <div>
                  <p class="missing-text">
                    Am I the missing piece you're looking for in your team?
                  </p>
                  <v-btn
                    large
                    href="https://www.linkedin.com/in/souryav/"
                    target="_blank"
                    dark
                    class="text-capitalize mt-4 tangram_blue"
                    >Let's Chat <v-icon dark> mdi-arrow-right </v-icon></v-btn
                  >
                </div>
                <img
                  width="50"
                  height="60"
                  :src="require(`@/assets/missing-arrow.png`)"
                />
              </div>
            </v-flex>

            <v-flex xs4>
              <img width="85%" :src="require(`@/assets/missing-tangram.png`)" />
            </v-flex>
          </v-layout>
        </div>
      </div>
      <!-- <Contact/> -->
    </div>
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";
import Grid from "./grid.vue";
import SectionTitle from "@/components/project/section-title";
import sectionOverview from "@/components/project/section-overview.vue";

export default {
  data: function () {
    return {
      isActive: false,
    };
  },
  components: {
    TangramAbout,
    Contact,
    Grid,
    SectionTitle,
    sectionOverview,
  },
};
</script>

<style lang="scss" scoped>
.missing-text {
  font-family: "Tiempos-Headline-BoldItalic", "Georgia", "Times New Roman",
    Times, serif;
  font-style: italic;
  font-size: 2.8rem;
  line-height: normal;
}
// .intro-left {
//   max-width: 500px;
// }

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

.about-button {
  border: 1px solid #8fbcff;
  // background-color: #192b27;
  // background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(transparent));
  // background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent);
  // -webkit-transition: background-color 500ms cubic-bezier(.19, 1, .22, 1);
  // transition: background-color 500ms cubic-bezier(.19, 1, .22, 1);
  // text-decoration: none;
}
</style>
