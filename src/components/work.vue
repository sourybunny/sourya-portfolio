<template>
  <div class="" id="work">
    <section class="layout-container mainbg">
      <div class="layout-container__inner">
        <!-- <div class="text-h5 white--text font-weight-light mb-6">Selected Work</div> -->
        <div  class="text-h4 white--text font-weight-bold ">
          Explore my best
          <span
            class="font-weight-bold tangram_yellow--text selectedwork-gradient"
            >work</span
          >
        </div>

        <!-- <div class="text-h3 white--text font-weight-bold mb-8"> Selected <span class="font-weight-bold yellow--text">Work</span></div> -->
        <!-- <div
          class="white--text  d-flex align-center "
          :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'"
        >
          <div class="streamanity-dot mr-4"></div>
          Streamanity
        </div> -->

        <!-- <div class="body-2 white--text ">
          <v-chip dark class="ml-0 cardbgdark">
            2018-2019
          </v-chip>
          <v-chip dark class="mx-1 cardbgdark">
            Responsive design
          </v-chip>
          <v-chip dark class="cardbgdark">
            Shipped
          </v-chip>
        </div> -->
      </div>
    </section>
    <section
      @click.stop="$router.push('/streamanity')"
      class="layout-container pointer streamanity-container workcard"
    >
      <div class="">
        <v-layout justify-space-between wrap>
          <v-flex
            xs12
            sm7
            md8
            class="streamanity-container--left layout-container__inner"
          >
            <v-responsive>
              <v-img
                :src="
                  require(`@/assets/media/streamanity/streamanity-landing.png`)
                "
              ></v-img>
            </v-responsive>
          </v-flex>
          <v-flex
            xs12
            sm5
            md4
            class="streamanity-container--right workcard_right pa-10"
          >
            <!-- <section class="flex-column justify-end"> -->
            <div>
              <div style="opacity:0.5;" class="mt-2">
                <v-img
                  class="mr-2"
                  style="float:left;"
                  contain
                  width="24"
                  height="24"
                  :src="require(`@/assets/str-logo.png`)"
                ></v-img>
                <div>Streamanity</div>
              </div>
              <div class="text-h5 mt-4">
                Designing a video streaming and revenue sharing platform for
                content creators.
              </div>
              <!-- <p class="body-1  my-5 ">
                  Helping bitcoin based content creators monetize their videos and
                  earn money directy from their followers.
                </p> -->
            </div>
            <div class="align-end justify-end">
              <v-btn
                dark
                plain
                block
                large
                class="my-4 green--text bottom-line--light d-flex justify-space-between text--lighten-4 title text-capitalize font-weight-medium pa-0"
                @click.stop="$router.push('/streamanity')"
              >
                View Case Study
                <v-icon class="ml-2" dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
              <p class="body-1">
                Helping bitcoin based content creators monetize their videos and
                earn money directly from their followers.
              </p>
            </div>
            <!-- </section> -->
          </v-flex>
        </v-layout>
      </div>
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
          <v-chip dark class="ma-2 ml-0 cardbgdark">
            2021-2022
          </v-chip>
          <v-chip dark class="ma-2 cardbgdark">
            Enterprise web app
          </v-chip>
            <v-chip dark class="ma-2 cardbgdark">
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
.workcard_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.streamanity-container {
  background: #579c70;

  &--left {
    background: #579c70;
  }
  &--right {
    color: #a8dbbb;
    background: #1e2922;
    // background: rgb(0,0,0);
    background: linear-gradient(
      124deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgb(22, 48, 32) 100%
    );
    // background-image: linear-gradient(135deg, rgba(0, 81, 194, 0.1), rgba(45, 129, 247, 0.1));
  }
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
