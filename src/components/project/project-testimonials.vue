<template>
    <div class="project-testimonials d-flex flex-column align-center justify-center">
        <div class="project-testimonials--content text-center">
            <slot></slot>
        </div>
        <p class="project-testimonials--title text-center">
            {{ title }}
        </p>
    </div>
  </template>
  
  <script>
  export default {
  props: {
      title:''
  }
  }
  </script>
  <style lang="scss" scoped>
  .project-testimonials {
      padding: 2rem;
      margin: auto;
      &--title {
          font-size: 18px;
          line-height: 21px;
          font-weight: 300;
          margin-bottom: .2rem;
          margin-top: 1rem;
      }
      &--content {
          font-size: 36px;
          line-height: 48px;
          font-weight: 300;
      }
  }
  </style>