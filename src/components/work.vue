<template>
  <div class="mb-10">
    <v-container>
      <div
        class="font-weight-medium mt-5 text-uppercase "
        :class="$vuetify.breakpoint.mdAndUp ? ' title' : 'subheading'"
      >
        Selected Work,
      </div>
      <div
        class="font-weight-medium white-- mb-5"
        :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'"
      >
        Product design.
      </div>
        <!-- <v-img height="50" width="64" :src="require(`@/assets/media/home/arrow.svg`)"></v-img> -->
    </v-container>
    <v-container>
      <!-- <p class="font-weight-medium display-2 mt-10">Selected Work.</p> -->
      <v-layout row wrap justify-center>
        <!-- <v-flex xs12 sm6 md6 v-for="project in projects" :key="project.id">
          <WorkCard class="work-card" :item="project" />
        </v-flex> -->
          <!-- :class="project.bg" -->
        <v-flex xs12
          class="my-8"
          v-for="project in projects"
          :key="project.id"
        >
            <Project :item="project" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WorkCard from "@/components/work-card.vue";
import Project from "@/components/project.vue";

export default {
  components: {
    WorkCard,
    Project,
  },
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
          type: 'internal'
        },
        {
          id: 2,
          name: "Piggie",
          meta: "Linking student goals to their savings.",
          tags: "Fintech | UX Design",
          description:
            "An app that links student goals to their savings and educates them on best behaviors and budgeting.",
          extra: "",
          to: "https://www.behance.net/gallery/139742913/Financial-wellbeing",
          img: require(`@/assets/media/home/piggiee-home.png`),
          bg: "piggie_blue",
          type:'external'
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
.work-card {
  box-shadow: 0px 0px 362px rgba(0, 0, 0, 0.07),
    0px 0px 80.8574px rgba(0, 0, 0, 0.0417275),
    0px 0px 24.0734px rgba(0, 0, 0, 0.0282725) !important;
}
</style>
