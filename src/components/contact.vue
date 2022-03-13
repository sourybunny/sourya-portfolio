<template>
  <div class="black">
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.6,
      }"
      transition="fade-transition"
    >
      <v-container
        class="  white--text py-16 px-10 center-align"
        width="100%"
        :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      >
        <div class="font-weight-bold  text-center ">
          To know more about me or my work,
          <p class="font-weight-bold">
            reach out to me at
            <span class="font-weight-bold gradient"
              ><a href="mailto:sovarana@iu.edu">sovarana@iu.edu</a></span
            >
          </p>
        </div>
      </v-container>
    </v-lazy>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: true,
    };
  },
};
</script>

<style></style>
