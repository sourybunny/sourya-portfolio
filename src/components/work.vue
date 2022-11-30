<template>
  <div class="" id="work">
    <section class="layout-container mainbg">
      <div class="layout-container__inner py-10">
        <div
          class="white--text  d-flex align-center "
          :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'"
        >
        <div class="streamanity-dot mr-4"></div>
          Streamanity 
        </div>
        <div
          class="body-2 white--text "
        >
          <v-chip dark class="ma-2 ml-0 grey darken-4">
            2018-2019
          </v-chip>
          <v-chip dark class="ma-2 grey darken-4">
            Responsive mobile-web app
          </v-chip>
            <v-chip dark class="ma-2 grey darken-4">
            Shipped product
          </v-chip>
        </div>
      </div>
    </section>
    <section class="layout-container streamanity-container">
      <section class="layout-container__inner">
        <div class="content-container">
          <v-layout row justify-space-between wrap>
            <v-flex xs12 sm9>
              <v-responsive>
                <v-img
                  :src="
                    require(`@/assets/media/streamanity/streamanity-landing.png`)
                  "
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm3>
              <div class="pt-10">
                <div class="content-title white--text">
                  Streamanity
                </div>
                <p class="content-body white--text my-5 ">
                  Bitcoin based video streaming and content monetization
                  platform for small-scale content creators to earn money
                  directly from their followers.
                </p>
                <v-btn
                  large
                  class="mt-6 text-capitalize"
                  @click="$router.push('/streamanity')"
                >
                  CASE STUDY
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </section>
    </section>

     <!-- <section class="layout-container mainbg">
      <div class="layout-container__inner py-10">
        <div
          class="white--text"
          :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'"
        >
          Indiana University 
        </div>
        <div
          class="body-2 white--text "
        >
          <v-chip dark class="ma-2 ml-0 grey darken-4">
            2021-2022
          </v-chip>
          <v-chip dark class="ma-2 grey darken-4">
            Enterprise web app
          </v-chip>
            <v-chip dark class="ma-2 grey darken-4">
            Shipped feature
          </v-chip>
        </div>
      </div>
    </section>
    <section class="layout-container courseplan-container">
      <section class="layout-container__inner">
        <div class="content-container">
          <v-layout row justify-space-between wrap>
            <v-flex xs12 sm9>
              <v-responsive>
                <v-img
                  :src="
                    require(`@/assets/media/streamanity/streamanity-landing.png`)
                  "
                ></v-img>
              </v-responsive>
            </v-flex>
            <v-flex xs12 sm3>
              <div class="pt-10">
                <div class="content-title white--text">
                  Course Planner Review
                </div>
                <p class="content-body white--text my-5 ">
                  Bitcoin based video streaming and content monetization
                  platform for small-scale content creators to earn money
                  directly from their followers.
                </p>
                <v-btn
                  large
                  class="mt-6 text-capitalize"
                  @click="$router.to('/streamanity')"
                >
                  CASE STUDY
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </section>
    </section> -->
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      title: "rhgj",
      projects: [
        {
          id: 1,
          name: "Streamanity",
          meta: "Content monetization in Bitcoin",
          tags:
            "Social | Product, UX Design, Leadership | Developed & Shipped Product",
          description:
            "Designing a video platform for Bitcoin SV users to monetize their video content and earn money.",
          extra: "",
          to: "/streamanity",
          img: require(`@/assets/media/home/stream-home.png`),
          bg: "streamanity_green",
          type: "internal",
          client: "Keyport Labs Pvt Ltd",
        },
        {
          id: 2,
          name: "SOAR",
          meta: "Student academic advising app",
          tags: "Product, UX Design, Leadership | Developed & Shipped Product",
          description:
            "Designing Indiana University's student academic advising app (SOAR) for a mobile-first experience",
          extra: "",
          to: "/soar",
          img: require(`@/assets/media/home/soar-home.png`),
          bg: "streamanity_green",
          type: "internal",
          client: "Indiana University: Enterprise Student Systems",
        },
        {
          id: 3,
          name: "Piggie",
          meta: "Linking student goals to their savings.",
          tags: "Fintech | UX Design",
          description:
            "An app that links student goals to their savings and educates them on best behaviors and budgeting.",
          extra: "",
          to: "https://www.behance.net/gallery/139742913/Financial-wellbeing",
          img: require(`@/assets/media/home/piggiee-home.png`),
          bg: "piggie_blue",
          type: "external",
          client: "Academic Project",
        },
        // {
        //   id: 2,
        //   name: "LuFe",
        //   tags: "Public Health | User Research, UX Design | Bootcamp Project",
        //   description:
        //     "Lufe is a re-imagined public toilet system that helps users to find clean and hygienic toilets easily and motivatesthem to use public toilets.",
        //   extra: "",
        //   to: "/lufe",
        //   img: require(`@/assets/media/streamanity/streamanity-home.png`),
        //   bg: 'lufi_blue'
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
// .work-card {
//   box-shadow: 0px 0px 362px rgba(0, 0, 0, 0.07),
//     0px 0px 80.8574px rgba(0, 0, 0, 0.0417275),
//     0px 0px 24.0734px rgba(0, 0, 0, 0.0282725) !important;
// }
.streamanity-container {
  // background: #579C70;
  background: #489b65;
}

.courseplan-container {
  background: #da6144;
}
.streamanity-dot {
  width: 1.5rem;
  height: 1.5rem;
  // border-radius: 50%;
  background: #489b65;
  // left:-0.7%;
  // top: 35%;
}
</style>
