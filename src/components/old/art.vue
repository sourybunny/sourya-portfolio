<template>
  <div class="code card white lighten-4 hoverable z-depth-1">
    <div class="card-image z-depth-0">
      <img class="activator " :src="item.image|| require(`@/assets/media/default-placeholder.png`)" />
    </div>
    <!-- <div class="card-content white z-depth-0">
      <p class="card-title">{{ item.title }}</p>
    </div> -->
  </div>
</template>

<script>
  export default {
    props: ["item"],
  };
</script>

<style></style>
