<template>
    <div class="mainbg">
      <div class="layout-container about">
        <div class="layout-container__inner">
          <section-overview :is_dark="true" :title="'Collection of my personal work, art, coded prototypes & visual design.'">
            <div>
              I'm an engineer turned designer who is driven by passion and intentionality to make things better. I love making things interactive. You can find below the craft from my mind.
            </div>
          </section-overview>
        </div>
      </div>
      <!-- <section>
        <div class="layout-container bottom-line">
          <div class="layout-container__inner">
         
          </div>
        </div>
      </section> -->
      <Grid />
      <Contact />
    </div>
  </template>
  
  <script>
  import Contact from "./contact.vue";
  import Grid from "./grid.vue";
  import sectionTitle from "@/components/project/section-title.vue";
import sectionOverview from "@/components/project/section-overview.vue";
  export default {
    data: function () {
      return {
        isActive: false,
      };
    },
    components: {
      Contact,
      Grid,
      sectionTitle,
      sectionOverview
    },
  };
  </script>
  