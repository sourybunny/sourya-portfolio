<template>
  <div class="accordion">
    <header  @click="is_open = !is_open">
        <slot>
        <div class="accordion-title">
            <p class="">{{ title }}</p>
        </div>
        </slot>
    </header>
    <hr class="greybg my-0 py-0" v-if="!is_open" />
    <main v-if="is_open" class="accordion-content">
        <slot name='main'></slot>
    </main>
    <hr class="greybg my-0 py-0" v-if="is_open" />
  </div>
</template>
  
  <script>
export default {
  props: {
    title: "",
    is_underline: {
      default: true,
    },
    is_open: {
      default: false,
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.accordion {
  padding: 0.5rem;

  &:hover {
    background: #f8fafd;
  }
  .accordion-title {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    // margin-bottom: .5rem;
  }
}
</style>