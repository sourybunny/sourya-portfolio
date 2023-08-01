<template>
  <div class="my-2 section-title">
    <p class="">{{ title }}</p>
    <hr  v-if="is_underline">
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    is_underline: {
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 16px;
  line-height: 21px;
  font-weight: 600;
  // margin-bottom: .5rem;
}
</style>