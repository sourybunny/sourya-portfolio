<template>
    <div class="project-header" data-aos="fade-up" data-aos-delay="400"  data-aos-duration="2000">
      <p class="project-title">{{ title }}</p>
      <p class="project-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: '',
      description: ''
    }
  }
  </script>
  
<style lang="scss" scoped>
.project-header {
}
  .project-title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    margin-top: 1rem;
  }
  .project-description {
    font-size: 40px;
    line-height: 54px;
    font-weight: 300;
  }
  @media screen and (max-width: 500px) and (orientation: portrait) {
  .project-title {
    font-size: 32px;
    line-height: 42px;
  }
  .project-description {
    font-size: 32px;
    line-height: 44px;
  }
}
  </style>