<template>
  <v-container class="mt-16">
   <div>
      <i
      @click="$router.push({ path: '/' })"
      class="is-pointer fas fa-long-arrow-alt-left fa-3x greybg--text text--darken-3"
    ></i>

    <div class="text-h3">Side Projects</div>
   </div>
    <v-layout xs12 class="align-center justify-center">
      <v-flex xs12 class="align-center justify-center">
        <ProjectListItem
          class="my-16"
          :item="project"
          v-for="project in projects"
          :key="project"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProjectListItem from "@/components/project-list-item";
export default {
  components: {
    ProjectListItem,
  },
  data: function() {
    return {
      projects: [
        {
          id: 1,
          name: "Arcadia",
          description:
            "COVID-19 Virtual design challenge with John Hopkins University.",
          to: "/arcadia",
        },
        {
          id: 2,
          name: "Arcadia",
          description:
            "COVID-19 Virtual design challenge with John Hopkins University.",
          to: "/arcadia",
        },
        {
          id: 3,
          name: "Arcadia",
          description:
            "COVID-19 Virtual design challenge with John Hopkins University.",
          to: "/arcadia",
        },
        {
          id: 4,
          name: "Arcadia",
          description:
            "COVID-19 Virtual design challenge with John Hopkins University.",
          to: "/arcadia",
        },
      ],
    };
  },
};
</script>

<style></style>
