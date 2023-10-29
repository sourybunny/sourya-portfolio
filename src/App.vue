<template>
  <v-app
    class="app-container"
    :class="
      $route.path !== '/plan' || $route.path !== '/streamanity'
        ? 'app-width'
        : ''
    "
  >
    <v-main class="pa-0 app-background">
      <template>
        <Header class="app-background"></Header>
        <keep-alive>
          <router-view :key="$route.fullPath"> </router-view>
        </keep-alive>
      </template>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/header";

export default {
  name: "App",

  components: {
    Header,
  },
};
</script>
<style lang="scss">
$small: 500px;
$medium: 900px;
$large: 1680px;
$background: #020010;
.layout-container {
  padding-left: 4rem;
  padding-right: 4rem;
  @media screen and (max-width: $small) {
    padding-left: 0;
    padding-right: 0;
  }
  &__inner {
    padding: 4rem;
    // &--work {
    //   padding-left:0;
    //   padding-right:0;
    // }
    @media screen and (max-width: $small) {
      padding: 1rem;
    }
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    border-right: 2px solid rgba(255, 255, 255, 0.1);
    // border-image: linear-gradient(to right, darkblue, darkorchid) 1;

    .content-title {
      font-family: "Inter";
      font-weight: 600;
      font-size: 24px;
    }
    .content-body {
      font-family: "Inter";
      font-size: 18px;
    }
  }
}
body {
  background-color: $background;
}
.app-background {
  background: $background;
}
.app-container {
  margin: 0 auto;
}
.app-width {
  max-width: 1500px;
}
.text-highlight {
  background: -webkit-linear-gradient(120deg, #a7cfdf, #37659a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.paragraph-gradient {
  background: -webkit-linear-gradient(#eee, rgb(118, 118, 118));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.title-gradient {
  background-image: radial-gradient(
    circle farthest-corner at 100% 0%,
    #607185,
    #eff3f6
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.designbytes-gradient {
  background-image: linear-gradient(120deg, #e6a147, #a2280a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // background-image: linear-gradient(143deg, #ff005c, #ffa95a);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-text-fill-color: transparent;
}
.selectedwork-gradient {
  background-image: linear-gradient(124deg, #edecb4, #e6c20f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  // background-image: linear-gradient(143deg, #49f88c, #dcb864 58%, #ffa95a);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-text-fill-color: transparent;
}
.aboutme-gradient {
  background-image: linear-gradient(120deg, #a7cfdf, #0e519e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.name-gradient {
  background-image: linear-gradient(120deg, #fff, #858585);
  color: #dbdbdb;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.portfolio-gradient {
  background-image: linear-gradient(151deg, #ff5e00, #8400ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bottom-line {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  &--light {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.inner-section {
  width: 65%;
  margin: 0 auto 1rem;
}

article {
  padding: 4rem 0;
}

@media screen and (max-width: $small) and (orientation: portrait) {
  .inner-section {
    width: 85%;
    margin: 0 auto 1rem;
  }
}
</style>
