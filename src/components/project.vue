<template>
  <v-card
    :to="item.to"
    width="100%"
    height="100%"
    flat
    class="my-4 pa-5 transition-swing "
    :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : 'mx-4'"
  >
    <v-layout row justify-space-between>
      <v-flex xs8>
        <v-card-title class="headline font-weight-bold pl-6">
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle class="title font-weight-medium pl-6 pt-1">
          {{ item.tags }}
        </v-card-subtitle>
        <v-card-text class="title font-weight-light pl-6">
          {{ item.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn large class="text-capitalize ml-3 px-3" dark rounded>
            View Project
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex xs4>
        <v-responsive>
          <v-img :src="item.img"></v-img>
        </v-responsive>
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
