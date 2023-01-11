<template>
  <v-app>
    <Header class="app-background" />
    <v-main class="pa-0 app-background">
      <template>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </template>
    </v-main>
    <template>
      <v-footer dark padless>
        <v-card flat tile> </v-card>
      </v-footer>
    </template>
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
.layout-container {
  padding-left: 4rem;
  @media screen and (max-width: $small) {
    padding-left: 0;
  }
  &__inner {
    padding: 4rem;
    @media screen and (max-width: $small) {
      padding: 1rem;
    }
    border-left: 2px solid rgba(255, 255, 255, 0.1);

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

.app-background {
  background: #020010;
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
}
.selectedwork-gradient {
  background-image: linear-gradient(124deg, #edecb4, #e6c20f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
.bottom-line {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  &--light{
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  }
}
</style>
