<template>
  <div class="code card white lighten-4 hoverable z-depth-1">
    <div class="card-image z-depth-0">
      <img class="activator " :src="item.image|| require(`@/assets/media/default-placeholder.png`)" />
      <div>
        <a
          data-tooltip="github"
          data-position="bottom"
          class="btn-floating halfway-fab tooltipped fab-button-like waves-effect black white-text waves-light grey darken-3 z-depth-4"
          :href="item.link"
          target="_blank"
          ><i class="fa fa-github"></i
        ></a>
        <a
          data-tooltip="view app"
          data-position="bottom"
          class="btn-floating halfway-fab waves-effect tooltipped grey  white-text waves-light z-depth-4"
          :href="item.live"
          target="_blank"
          @click="Materialize.toast('hey, thanks for viewing  :)', 4000, 'rounded')"
          ><i class="material-icons">open_in_new</i></a
        >
      </div>
    </div>
    <div class="card-content white z-depth-0">
      <p class="card-title">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["item"],
  };
</script>

<style lang="scss">
  .code {
    border-radius: 1rem;
    .card-content {
      margin-bottom: 0.8rem;
      height: 5rem;
    }
    .card-image img {
      min-height: 10rem;
      border-radius: 1rem !important;
    }
  }
</style>
