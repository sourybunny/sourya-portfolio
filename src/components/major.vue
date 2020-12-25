<template>
  <div class="card hoverable z-depth-1">
    <div class="card-image">
      <img class="activator " :src="item.image" />
      <span class="card-title">{{ item.title }}</span>
      <!-- <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> -->
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
      <div class="card-actions">
        <a target="_blank" :href="item.live" class=" waves-light waves-effect btn-small"><i class="material-icons right">open_in_new</i>View</a>
        <!-- <a href="#">View app</a> -->
        <a target="_blank" :href="item.link" class=" waves-light waves-effect btn-flat ml-5"><i class="fa fa-github material-icons right"></i>Github</a>
      </div>
    </div>
  </div>
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
        height: 13rem;
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
