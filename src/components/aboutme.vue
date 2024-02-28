<template>
  <div class="white mx-auto">
    <div class="layout-container mx-auto" style="max-width: 90%">
      <div class="layout-container__inner">
        <section-title :is_dark="false" :title="'my journey in numbers'"></section-title>
        <div class="my-8">
          <div class="d-flex flex-wrap align-start text-center justify-space-between">
            <div style="width:auto;">
              <p class="font-weight-bold display-2">4+</p>
              <p class="text-capitalize ">Years of Design Experience</p>
            </div>
            
            <div class="vertical-line"></div>
            <!-- <img :src="require(`@/assets/Line.png`)" /> -->
            <div style="width:auto;">
              <p class="font-weight-bold display-2">$50M+</p>
              <p class="text-capitalize">Million cost savings and revenue generation</p>
            </div>
            <div class="vertical-line"></div>

            <div style="width:auto;">
              <p class="font-weight-bold display-2">6</p>
              <p class="text-capitalize">High Priority Projects</p>
            </div>
          </div>
        </div>
        <!-- <div
          class="text-h5 font-weight-light py-8 text-center mx-auto"
          style="max-width: 80%"
        >
          From a young age, I enjoyed solving puzzles and building stuff,
          nurturing my creativity and shaping my design mindset
        </div> -->
        <!-- <div class="d-flex justify-center about">
          <TangramAbout />
        </div> -->
        
        <div class="about-card about black white--text text-center pa-1 mt-6">
          <v-row wrap align-lg="center" justify-sm="center">
            <v-col cols="12" xs="6"  md="7" >
              <div class="pa-4">
                <p
                  class="text-h6  text-left font-weight-light opacity-8"
                  style="max-width: 85%"

                >
                  To me, design mirrors the graceful metamorphosis of a
                  butterfly, where ideas undergo a transformative journey to
                  emerge as beautiful & humanized products.
                </p>
                <p class="quote-text text-left mt-1">
                  And, great teams shape greater products
                </p>
              </div>
            </v-col>
            <v-col cols="12"  xs="6" md="3">
              <TangramAbout style="transform: scale(0.5)" />

            
            </v-col>
          </v-row>
        </div>
        <section-title :is_dark="false" :title="'my evolution as a designer'"></section-title>

        <img width="100%" class="my-8"
                :src="require(`@/assets/gamesproblems.png`)"
              />
            
                <div
          class="text-h6 font-weight-light  text-center mx-auto"
          style="max-width: 90%"
        >
        From a young age, I enjoyed solving puzzles and building
                  stuff, nurturing my creativity and shaping my design mindset.
                  Tangrams, Catan, Chess, Lego are some of my favorites.
        </div>
        
        <img width="100%" class="my-8" :src="require(`@/assets/cards.png`)" />
        <!-- <section-title :is_dark="false" :title="'my values and superpowers'"></section-title> -->
      </div>
    </div>



    <!-- <Grid /> -->
    <div class="mainbg is-relative">
      <!-- <img
      class="is-absolute" height="80%"
      :src="require(`@/assets/media/intro/grid.svg`)"
    /> -->

      <div class="layout-container black">
        <div
          class="white--text py-16 layout-container__inner mx-auto"
          style="max-width: 90%"
        >
          <v-layout row wrap justify-space-between align-center class="">
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
                    I'm the missing piece you're looking for in your team
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
              <img width="70%" :src="require(`@/assets/missing-tangram.png`)" />
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";
import Grid from "./grid.vue";
import SectionTitle from "@/components/project/section-title";
import sectionOverview from "@/components/project/section-overview.vue";
import sectionHighlight from "@/components/project/section-highlight.vue";
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
    sectionHighlight,
  },
};
</script>

<style lang="scss" scoped>
.missing-text {
  font-family: "Tiempos-Headline-BoldItalic", "Georgia", "Times New Roman",
    Times, serif;
  font-style: italic;
  font-size: 2.2rem;
  line-height: normal;
}
.quote-text {
  font-family: "Tiempos-Headline-BoldItalic", "Georgia", "Times New Roman",
    Times, serif;
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 500;
  // line-height: normal;
}
.vertical-line {
  width: 1px;
  height:8rem;
  background: #d0d0d0;
  // margin: 0 1rem;
}
.about-card {
  border-radius: 1rem;
  // background: linear-gradient(279deg, #8a68fe 38.47%, #9cf7ff 107.16%);
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
