<template>
  <div class="white layout-container">
    <div class="layout-container__inner">
      <sectionTitle :title="'Kind words about me'"></sectionTitle>
      <v-row wrap align-md="start" justify-md="space-between" class="mt-8">
        <v-col md="3">
          <div>
            <v-card flat class="rounded-lg pa-6 fill-height t-1">
              <h1 class="t-1--text">Adaptable</h1>
              <p class="testimonial-text opacity-8 mt-4 font-weight-light">
                Sourya drove solutions from 0-to-1
                <span class="font-weight-medium"
                  >negotiating requirements, coordinating feasibility
                  discussions</span
                >, and routinely impressing others in orbit of the product team.
              </p>
              <div class="mt-16">
                <div class="d-flex align-center">
                  <img
                    class="mr-2"
                    width="36"
                    height="36"
                    :src="require(`@/assets/media/testimonials/gagan.png`)"
                    alt=""
                  />
                  <div class="body-2 opacity-7">
                    <div>Gagan Hothi</div>
                    <div>Head of Product Exp</div>
                  </div>
                </div>

                <img
                  width="60"
                  class="mt-4"
                  :src="require(`@/assets/media/testimonials/ushur.png`)"
                  alt=""
                />
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col>
          <v-card flat class="rounded-lg pa-6 t-2">
            <h1 class="t-2--text">Good Listener</h1>
            <v-row align-sm="end">
              <v-col sm="8">
                <div class="testimonial-text opacity-8 mt-4 font-weight-light">
                  Sourya
                  <span class="font-weight-medium"
                    >appreciates and absorbs feedback </span
                  >from all, regardless of their role, and utilizes it in her
                  designs. Her work was impeccable
                </div>
              </v-col>
              <v-col>
                <div class="mt-13">
                <div class="d-flex align-center">
                  <img
                    class="mr-2"
                    width="36"
                    height="36"
                    :src="require(`@/assets/media/testimonials/kris.png`)"
                    alt=""
                  />
                  <div class="body-2 opacity-7">
                    <div>Kris Nicola</div>
                    <div>Product Owner</div>
                  </div>
                </div>

                <img
                  width="150"
                  class="mt-4"
                  :src="require(`@/assets/media/testimonials/iu.png`)"
                  alt=""
                />
              </div>
              </v-col>
            </v-row>
          </v-card>
          <v-card flat class="rounded-lg pa-6 mt-6 t-3">
            <h1 class="t-3--text">Problem Solver</h1>
            <v-row align-sm="end" >
              <v-col cols="12" sm="8">
                <div class="testimonial-text opacity-8 mt-4 font-weight-light">
                  Sourya's passion for design and her attention to detail are
                  truly inspiring. She is a true
                  <span class="font-weight-medium"
                    >problem solver and a key asset</span
                  >
                  to any team.
                </div>
              </v-col>
              <v-col>
                <div class="mt-13">

                <div class="d-flex align-center">
                  <img
                    class="mr-2"
                    width="36"
                    height="36"
                    :src="require(`@/assets/media/testimonials/prajwal.png`)"
                    alt=""
                  />
                  <div class="body-2 opacity-7">
                    <div>Prajwal B</div>
                    <div>UI Developer</div>
                  </div>
                </div>

                <img
                  width="120"
                  class="mt-4"
                  :src="require(`@/assets/media/testimonials/sh.png`)"
                  alt=""
                />
            </div>

              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card flat class="rounded-lg pa-6 t-4">
            <h1 class="t-4--text">Collaborative</h1>
            <p class="testimonial-text opacity-8 mt-4 font-weight-light">
              Sourya took the UX lead role in her final project with us and we
              couldn’t be more
              <span class="font-weight-medium"
                >pleased with her collaborative nature
              </span>
              and her UX research and design skills.
            </p>
            <div class="mt-14">
              <div class="d-flex align-center">
                <img class="mr-2"
                  width="36"
                  height="36"
                  :src="require(`@/assets/media/testimonials/christie.png`)"
                  alt=""
                />
                <div class="body-2 opacity-7">
                  <div>Christie Heitcamp</div>
                  <div>Sr. UX Designer</div>
                </div>
              </div>

              <img
                width="150"
                class="mt-4"
                :src="require(`@/assets/media/testimonials/iu.png`)"
                alt=""
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
      
    </div>
  </div>
</template>
    
<script>
import SectionTitle from "@/components/project/section-title.vue";
export default {
  components: {
    SectionTitle,
  },
};
</script>
    
<style lang="scss">
.testimonial-text {
  font-size: 1.2rem;
}
.t-1 {
  border-radius: 16px;
  color: #6c4b38;

  //   background: linear-gradient(331deg, #0d0566 -10.93%, #180bb3 126.94%);
  background: linear-gradient(154deg, #f4f0dc 1.36%, #f2ecc9 96.11%);
  &--text,
  .testimonial-text {
    color: #6c4b38;
  }
}
.t-2 {
  color: #4d3699;
  border-radius: 16px;
  background: linear-gradient(96deg, #f5f3fb 6.98%, #e9e6fa 93.58%);
  &--text,
  .testimonial-text {
    color: #4d3699;
  }
}
.t-3 {
  &--text,
  .testimonial-text {
    color: #327397;
  }
  border-radius: 16px;
  background: linear-gradient(96deg, #edf8fa 6.98%, #daedfa 93.58%);
}
.t-4 {
  &--text,
  .testimonial-text {
    color: #515a53;
  }
  border-radius: 16px;
  background: linear-gradient(154deg, #eefff1 9.56%, #e2fce6 91.59%);
}
</style>
    