<template>
  <v-container v-if="even" class="py-12">
    <v-card :color="primary" flat class="rounded-lg mx-auto" max-width="900">
      <div class="d-flex flex-no-wrap align-start " >
          <v-img class="rounded-lg"  max-height="400" max-width="500" :src="require(`@/assets/media/me/me.jpeg`)"></v-img>
        <div class="pl-4">
          <v-card-title class="text-h3 font-weight-bold" v-text="item.name"></v-card-title>
          <v-card-subtitle class="title font-weight-medium mt-4" v-text="item.description"></v-card-subtitle>
          <v-card-actions>
            <v-btn medium class="ml-2 mt-5 text-capitalize" outlined rounded>
              View Details
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-container>
  <v-container v-else class="py-12">
    <v-card :color="primary" flat class="rounded-lg mx-auto" max-width="900">
      <div class="d-flex flex-no-wrap align-start " >
          <div >
          <v-card-title class="text-h3 font-weight-bold" v-text="item.name"></v-card-title>
          <v-card-subtitle class="title font-weight-medium mt-4" v-text="item.description"></v-card-subtitle>
          <v-card-actions>
            <v-btn medium class="ml-2 mt-5 text-capitalize" outlined rounded>
              View Details
            </v-btn>
          </v-card-actions>
        </div>
        <!-- <v-avatar class="ma-3"  tile> -->
          <v-img class="rounded-lg"  max-height="400" max-width="500" :src="require(`@/assets/media/me/me.jpeg`)"></v-img>
        <!-- </v-avatar> -->
        
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["item"],
  computed: {
      even(){
          return this.item.id % 2 ==0;
      }
  }
};
</script>

<style></style>
