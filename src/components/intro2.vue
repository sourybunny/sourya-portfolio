<template>
  <!-- <div class="white is-relative">
    <img width="100%"
      class="is-absolute fill-height" height="100%"
      :src="require(`@/assets/media/intro/lines.svg`)"
    />
    <div
      class="d-flex align-start justify-space-between pt-16"
      :style="'margin:0;'"
    >
      <div class="leftside is-relative mt-12">
        <div class="headline black--text" style="max-width: 250px">
          Hi,
          <br />
          I'm Sourya.
        </div>
        <img
          style="left: -50px; top: 80px"
          class="is-absolute"
          :src="require(`@/assets/media/intro/curve-arrow.svg`)"
        />
        <div class="mt-14 ml-8 text-h4">
          I design modern,<br />
          thoughtful and <br />functional <br />products.
        </div>
      </div>
      <div class="rightside">
        <img
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="500"
          class=""
          :src="require(`@/assets/media/intro/me.png`)"
        />
      </div>
    </div>
  </div> -->

  <div class="white layout-container is-relative">
    <v-row wrap no-gutters>
      <v-col cols="12" md="6">
        <div class="layout-container__inner pb-0">
          <div>
            <sectionTitle :title="'👋 Hey, I am Sourya'"></sectionTitle>
            <div class="text-h5 font-weight-light mt-4">
              UX designer with a background in front-end engineering and
              interaction design. I have experience across wide range of
              startups solving complex problems at scale. Previously
              <span class="company-names font-weight-light"
                >@Ushur, Sensehawk & IBM</span
              >
            </div>
            <!-- <div class="text-h7 font-weight-medium mt-8 pb-4">
              Ready to dive in? Skip the fluff and explore my work below. 🚀✨
            </div> -->
          </div>
        </div>
      </v-col>
      <!-- <div class="rightside is-absolute">
        <img
          data-aos-once="true"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-duration="300"
          class=""
          :src="require(`@/assets/media/intro/me.png`)"
        />
      </div> -->
      <!-- <v-col cols="12" md="5">
        <div class="pt-16">
          <img
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="500"
            class=""
            width="50%"
            :src="require(`@/assets/media/intro/Subject.png`)"
          />
        </div>
      </v-col> -->
    </v-row>
    <div class="layout-container__inner py-0">
      <v-row wrap no-gutters>
        <v-col cols="12" md="6">
          <div class="d-flex align-start text-left mt-12">
            <div style="max-width: 15rem">
              <div class="font-weight-bold text-h3">$50M+</div>
              <div class="text-capitalize">
                Million cost savings and revenue generation
              </div>
            </div>

            <div style="max-width: 20rem">
              <div class="font-weight-bold text-h3">150k+</div>
              <div class="text-capitalize ">
                Customers designed for in telecom, insurance, solar & education
              </div>
            </div>
          </div>
          <div class="linebar mt-14 mb-2"></div>
          <div class="text-h7 font-weight-medium">
              Ready to dive in? Skip the fluff and explore my work below. 🚀✨
            </div>
          <!-- <div class="d-flex align-start ">
            <div>
              <div>sourya0411@gmail.com</div>
              <div>resume</div>
            </div>
            <div class="ml-13">
              <div>About</div>
              <div>linkedin</div>
            </div>
          </div> -->
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
          <div class="rightside">
            <img
              data-aos-once="true"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-duration="300"
              class=""
              style="max-width: 300px"
              :src="require(`@/assets/media/intro/Subject.png`)"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
import Tangram from "./tangram.vue";
import SectionTitle from "@/components/project/section-title";
import sectionOverview from "@/components/project/section-overview.vue";
export default {
  components: {
    Tangram,
    SectionTitle,
    sectionOverview,
  },
};
</script>
  
  <style lang="scss">
.vertical-line {
  width: 1px;
  height: 8rem;
  background: #d0d0d0;
  // margin: 0 1rem;
}
.linebar {
  height: 1px;
  flex: 1 0 0;
  background: black;
}
.leftside {
  margin-left: 18rem;
}
.rightside {
  right: 0;
  bottom: 0;

  img {
    max-width: 600px;
    width: auto;
  }
}
.company-names {
  font-family: "Tiempos-Text-Italic", "Georgia", "Times New Roman", Times, serif;
  font-style: italic;
}
@media screen and (max-width: 500px) and (orientation: portrait) {
  .leftside {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  .rightside {
    display: none;
  }
}
.intro-left {
  // max-width: 800px;
}
.v-application .mainbg {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
.intro {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.has-stroke {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.link-text {
  color: rgb(126, 151, 198);
}
#motion-demo {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  offset-rotate: auto;
  animation: 3.5s move 1.5s 1 forwards ease-in-out;
  offset-path: path("M5,16 q20,95 360,104 q237,17 248,228");
  // clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%, 25% 50%);
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

.text-animatebg {
  background-position: left;
  background-size: 0% 100%;
  background-image: linear-gradient(blue, red);
  transition: all 500ms ease-in-out;
  &:hover {
    background-size: 100% 100%;
  }
}

.intro-right {
  .my-story {
    position: absolute;
    top: 5%;
    left: 10%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
  .my-work {
    position: absolute;
    top: 40%;
    left: 2%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
  .my-process {
    position: absolute;
    top: 28%;
    left: 5%;
    transition: all 1.5s;
    visibility: hidden;
    opacity: 0;
  }
}
</style>
  