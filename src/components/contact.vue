<template>
<div>
       <v-divider class="white"></v-divider>

  <v-divider class="white"></v-divider>
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .6
        }"
        transition="fade-transition"
      >
    <v-container fluid class=" black white--text py-16 px-10 center-align" width="100%" :class="$vuetify.breakpoint.mdAndUp?'display-2':'display-2'">
      <p class="font-weight-bold  text-center ">
        To know more about me or my work, 
        <p class="font-weight-bold">reach out to me at   <span class="font-weight-bold gradient" ><a href="mailto:sourya0411@gmail.com">sovarana@iu.edu</a></span></p>
      
      </p>

    </v-container>
     
</v-lazy>
</div>
</template>

<script>
export default {};
</script>

<style></style>
