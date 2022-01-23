<template>
  <v-card @click="$router.push({path: item.to})"
    flat
    max-width="560"
    class="my-4 transition-swing work-card__item"
    :class="$vuetify.breakpoint.xsOnly ? 'mx-auto' : 'mx-4'"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      max-height="440px"
      :min-height="$vuetify.breakpoint.mdAndUp ? '420px' : ''"
    ></v-img>

    <v-card-title class="headline font-weight-bold pl-6">
      {{ item.name }}
    </v-card-title>

    <v-card-subtitle class="title font-weight-medium pl-6 pt-1">
      {{ item.tags }}
    </v-card-subtitle>
    <v-card-text class="title font-weight-light pl-6">
      {{ item.description }}
    </v-card-text>
    <v-card-actions> </v-card-actions>
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
