<template>
  <div class="black"> 
      <v-container>
       <p class="font-weight-medium white--text  " :class="$vuetify.breakpoint.mdAndUp ? ' display-2' : 'display-1'">Selected Work.</p>
      </v-container>
    <v-container>
      <!-- <p class="font-weight-medium display-2 mt-10">Selected Work.</p> -->
      <v-layout class="mt-10" row xs12 wrap no-gutters>
        <!-- <v-flex xs12 sm6 md6 v-for="project in projects" :key="project.id">
          <WorkCard class="work-card" :item="project" />
        </v-flex> -->
        <v-flex xs12 class="my-5" :class="project.bg"  v-for="project in projects" :key="project.id">

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
          tags: "Social | Product, UX Design, Leadership | Developed & Shipped Product",
          description:
            "Designing a video platform for Bitcoin SV users to monetize their video content and earn money.",
          extra: "",
          to: "/streamanity",
          img: require(`@/assets/media/streamanity/streamanity-home.png`),
          bg: 'streamanity_green',
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
