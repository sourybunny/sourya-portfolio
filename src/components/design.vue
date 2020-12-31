<template>
  <div class="card  hoverable z-depth-1">
    <div class="card-image">
      <img class="activator " :src="item.image || require(`@/assets/media/default-placeholder.png`)" />
      <span class="card-title grey-text text-darken-4">{{ item.title }}</span>
    </div>
    <div class="card-content">
        <div class="mb-5">
        <span  v-for="tag in item.tags" :key="tag">
          <div class="chip">{{ tag }}</div>
        </span>
      </div>
      <p>
        {{ item.desc }}
      </p>
    </div>
    <div class="card-action">
      <a target="_blank" :href="item.live" class="blue-text text-darken-2">View Case Study</a>
    </div>
  </div>
  <!-- <div class="card hoverable z-depth-1">
    <div class="card-image">
      <img class="activator " :src="item.image|| require(`@/assets/media/default-placeholder.png`)" />
      <span class="card-title">{{ item.title }}</span>
    </div>
    <div class="card-content">
      <p>
        {{ item.desc }}
      </p>
      <div class="card-actions">
        <a target="_blank" :href="item.live" class=" waves-light waves-effect btn-small"><i class="material-icons right">open_in_new</i>View</a>
      </div>
    </div>
  </div> -->
</template>

<script>
  export default {
    props: ["item"],
  };
</script>

<style lang="scss">
  .major {
    .card {
      width: 24rem;
      border-radius: 1rem;
      .card-image img {
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
        // height: 13rem;
      }
      .card-action {
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;

      }
      .card-actions {
        margin-top: 1rem;
        .btn,
        .btn-small {
          background: #4a21fc;
          color: white;
          border-radius: 0.2rem;
        }
      }
    }
  }
</style>
