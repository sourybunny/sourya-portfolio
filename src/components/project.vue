<template>
  <v-card
    :to="item.type === 'internal' ? { path: item.to } : null"
    :href="item.type !== 'internal' ? item.to : null"
    width="100%"
    height="100%"
    flat
    color="transparent"
    class="mb-5 transition-swing "
    :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : 'mx-4'"
  >
    <v-layout row justify-space-between wrap>
      <v-flex xs12 sm6>
        <v-responsive>
          <v-img max-width="600" :src="item.img"></v-img>
        </v-responsive>
      </v-flex>
      <v-flex xs12 sm6>
        <div class="pa-5">
          <div :class="$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline'" class=" font-weight-medium grey--text mt-5 text--darken-4">
            {{ item.name }} - {{ item.meta }}
          </div>
          <p :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body-1'" class=" my-6 font-weight-light">
            {{ item.description }}
          </p>
          <v-btn large class=" text-capitalize" outlined rounded>
            View Project
          </v-btn>

        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss">
.work-card__item:hover {
  cursor: pointer;
}
</style>
