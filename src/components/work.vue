<template>
  <div class="black pb-16"> 
      <v-divider class="white"></v-divider>
      <v-container>

       <p class="font-weight-bold white--text font-italic display-3 my-10 " style="font-family:'Limelight' !important;">Selected Work.</p>
      </v-container>
       <v-divider class="white"></v-divider>
    <v-container>
      <!-- <p class="font-weight-medium display-2 mt-10">Selected Work.</p> -->
      <v-layout class="mt-10 mx-auto " row xs12 wrap no-gutters>
        <v-flex xs12 sm6 md6 v-for="project in projects" :key="project.id">
          <WorkCard class="work-card" :item="project" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import WorkCard from "@/components/work-card.vue";
export default {
  components: {
    WorkCard,
  },
  data: function() {
    return {
      title: "rhgj",
      projects: [
        {
          id: 1,
          name: "Streamanity",
          tags: "Social | Product,UX Design | Developed & Shipped Product",
          description:
            "Designing a video platform for Bitcoin SV users to monetize their video content and earn money",
          extra: "",
          to: "/streamanity",
          img: require(`@/assets/media/streamanity/str-display.png`),
        },
        {
          id: 2,
          name: "LuFe",
          tags: "Public Health | User Research, UX Design | Bootcamp Project",
          description:
            "Lufe is a re-imagined public toilet system that helps users to find clean and hygienic toilets easily and motivatesthem to use public toilets.",
          extra: "",
          to: "/lufe",
          img: require(`@/assets/media/streamanity/str-display.png`),
        },
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
