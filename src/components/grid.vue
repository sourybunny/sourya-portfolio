<template>
  <div class="mainbg">
    <div
      class="layout-container bottom-line"
      style="border-top: 2px solid rgba(255, 255, 255, 0.1)"
    >
      <div
        class="white--text py-16 px-10 center-align layout-container__inner"
        width="100%"
      >
        <div class="grid">
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-3"
            :src="require(`@/assets/media/visuals/sf.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/sensehawk.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/iub.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-3"
            :src="require(`@/assets/media/visuals/str.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/iu.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/bootcamp.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/dice.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-3"
            :src="require(`@/assets/media/visuals/coralconversations.gif`)"
          ></v-img>
          
          <v-img
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/gestures.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/augmented.png`)"
          ></v-img>
          

          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-3"
            :src="require(`@/assets/media/visuals/math.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/cake.png`)"
          ></v-img>

          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/js-calculator.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-3"
            :src="require(`@/assets/media/visuals/sh.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/coral.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/toc-tac-toe.png`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/simon.gif`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/pomodoro.gif`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-2"
            :src="require(`@/assets/media/visuals/journey.png`)"
          ></v-img>
          <v-img
            style="cursor: zoom-in; width: 100%; height: 100%"
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/weather.gif`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/art2.jpg`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/art3.jpg`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/art5.jpg`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/watercolor.png`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/acrylic.png`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/charcoal.png`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/visuals/mural.png`)"
          ></v-img>
          <v-img
            class="grid-item w-1"
            :src="require(`@/assets/media/art6.jpg`)"
          ></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.grid {
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) !important;
  // max-width: 1200px;
  .grid-item {
    width: 100%;
    height: 100%;
  }
}
.w-1 {
  grid-column: auto/span 1;
}
.w-2 {
  grid-column: auto/span 2;
}
.w-3 {
  grid-column: auto/span 3;
}
.w-4 {
  grid-column: auto/span 4;
}

img {
  vertical-align: top;
  border-style: none;
}
@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>