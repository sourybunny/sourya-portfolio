<template>
  <div v-if="!loading">
    <template>
      <v-container fluid class="px-0 mx-0">
        <div class="hero_container is-relative" style="height:500px;">
          <div
            class="salesforce-gradient salesforce-animated-left is-absolute"
            style="height:520px;left:0;top:0;z-index:2;"
          ></div>
          <v-img
            class="hero_container-image kenburns-bottom  is-flex align-items-center jusitfy-center"
            style="left:0;top:0;width:100%;height:500px;z-index:1;"
            :src="require(`@/assets/media/salesforce/sf-top-min.png`)"
          >
          </v-img>
          <v-img
            class="is-absolute"
            style="right:0;bottom:-1.5rem;z-index:1;"
            :src="require(`@/assets/media/salesforce/astro-clap-solo-min.gif`)"
          >
          </v-img>
          <p
            class="font-weight-bold is-absolute text-center salesforce-animated-text display-4"
            style="font-family:'Playfair Display' !important;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;"
          >
            Salesforce
          </p>
        </div>
      </v-container>

      <section>
        <v-container>
          <v-layout XS12 row wrap justify-center align-start my-5>
            <v-flex xs12>
              <!-- <div
                class="d-flex align-center"
                @click.stop="$router.push({ path: '/' })"
              >
                <span class="is-pointer mr-3 d-flex align-center">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                    />
                  </svg>
                </span>
                <span class="is-pointer">Back</span>
              </div> -->
              <p class="font-weight-medium black--text display-1 mt-10">
                Increasing Salesforce's Free Trial form conversion rate
              </p>
              <p class="mb-5 mt-3">
                Salesforce is a global cloud computing company that develops CRM
                solutions and provides business software on a subscription
                basis.
              </p>
            </v-flex>
            <v-flex xs12>
               <h6 class="title soar_blue--text text--darken-1 font-weight-bold my-5">
                Overview
              </h6>
              <p>
                We collaborated with Salesforce's UX team in order to create a better
                experience for the free trial. The need was to create a "bridge" between those
                experiences: sometimes combining different attributes, while
                other times, eliminating boundaries. In other words: using the
                same ingredients, the same design principles, but applying them
                in more strategic doses.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout row justify-space-between align-start>
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm7 align-self-start>
              <div>
                <h6 class="title font-weight-bold">My Role</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  UX Designer
                </h6>
                <!-- <p class="grey--text text--darken-2 mt-2 font-weight-medium">
                  I
                  <span
                    class="font-weight-bold grey--text text--darken-3 subtitle-1 font-weight-medium"
                    >developed and shipped </span
                  >the web and mobile interfaces
                </p> -->
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Tools</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Figma
                </h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Deliverables</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Competitor Analysis . Sketches . UI Prototype . Test Plan
                </h6>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm5 align-self-start>
              <div>
                <h6 class="title font-weight-bold">Team</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Sourya(Me), Niran, Chiung Yi, Qingran
                </h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Company/Client</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Sponsored by Salesforce
                </h6>
                <!-- <p>In partnership with Indiana University</p> -->
              </div>
              <div>
                <h6 class="title font-weight-bold">Duration</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  January 2022 - March 2022 (3 months)
                </h6>
              </div>
              <!-- <div class="mt-8">
                <h6 class="title font-weight-bold">Timeline</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  January 2022 - March 2022
                </h6>
              </div> -->
            </v-flex>
          </v-layout>
        </v-container>
        <div class="salesforce-image-gradient text-right mt-n16">
          <img
            style="max-height:300px;"
            class="mt-n16"
            :src="require(`@/assets/media/salesforce/sf-nature-min.png`)"
          />
        </div>
      </section>

      <v-container fluid class="pa-0 ma-0 mt-n2">
        <div class="salesforce-gradient" style="height:500px;overflow:hidden;">
          <v-responsive>
            <v-img
              height="100%"
              style="overflow:hidden;"
              :src="require(`@/assets/media/soar/soar-3-min.png`)"
            >
            </v-img>
          </v-responsive>
        </div>
      </v-container>
      <section class="py-14">
        <v-container px-16>
          <v-layout row xs12 justify-space-between wrap>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Challenge
              </h6>
              <h4 class="grey--text text--darken-2 title font-weight- my-6">
                Currently, the mobile experience and design for students at IU
                are very outdated. It’s hard for students to find useful
                information about their enrollment, grades and contact academic
                advisors. Moreover, there are tasks that the students can do
                that are currently not accessible through mobile phone.
              </h4>
              <p class="subtitle-1 font-weight-medium">
                My main responsibility was to ideate, create prototypes using
                IU's Rivet design system, build a responsive app for mobile,
                tablet and desktop using ReactJs & Javascript.
              </p>
            </v-flex>

            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section class="soar py-14 soar-product-bg">
        <v-container px-16>
          <v-layout row align-start xs12>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Product highlight
              </h6>
            </v-flex>
            <v-flex xs12>
              <div
                style="max-width:370px;min-height:500px;"
                class="soar-video-frame mx-auto text-center"
              >
                <v-responsive>
                  <video
                    style="box-shadow:none;border-radius:1.6rem;"
                    height="92%"
                    width="95%"
                    :src="require(`@/assets/media/soar/soar-product-min.mp4`)"
                    autoplay
                    muted
                    loop
                    controls
                    class="mt-6"
                  ></video>
                </v-responsive>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section class="py-8">
        <v-container class="pt-10" px-16>
          <v-layout row align-center>
            <v-flex xs12>
              <h6 class="text-xs-h6 text-sm-h4 font-weight-light text-center">
                In the Indiana University Bloomington alone, there are over
                <span class="font-weight-medium animated-text-underline"
                  >48 thousand students </span
                >, the majority of whom use smartphone to access academic
                information.
              </h6>
            </v-flex>
            <v-flex xs12>
              <hr class="mt-10 grey--lighten-5" />
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <div class="text-center">
          <v-container>
            <p class="grey--text text--darken-2 font-weight-medium display-1">
              Why we had to solve this?
            </p>
          </v-container>
        </div>
      </section>
      <section class="soar py-14 soar-product-bg">
        <v-container class="px-16">
          <v-layout row align-start mx-auto>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Process
              </h6>
              <p class="body-1 mt-5">
                For the initial user research, I conducted guerrilla usability
                testing to understand the current problems. During the
                synthesize phase, I used affinity mapping to analyze pain points
                and determine priorities. Then I generated task flows to
                understand where in the process users were having troubles,
                created Lo-Fi sketches and Hi-Fi clickable prototypes. At the
                end, I was able to validate with users and confirm the pain
                points are solved by the redesign. The project timeline is two
                weeks. Now let’s go deeper into each step.
              </p>
            </v-flex>
            <v-flex xs12 align-self-center>
              <v-responsive>
                <v-img
                  class="text-center mx-auto my-5"
                  :src="require(`@/assets/media/salesforce/process.png`)"
                ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" py-14 soar-product-bg">
        <v-container class="px-16">
          <v-layout row align-start mx-auto>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Research
              </h6>
              <p class="body-1 mt-5">
                For the initial user research, I conducted guerrilla usability
                testing to understand the current problems. During the
                synthesize phase, I used affinity mapping to analyze pain points
                and determine priorities. Then I generated task flows to
                understand where in the process users were having troubles,
                created Lo-Fi sketches and Hi-Fi clickable prototypes. At the
                end, I was able to validate with users and confirm the pain
                points are solved by the redesign. The project timeline is two
                weeks. Now let’s go deeper into each step.
              </p>
            </v-flex>
            <v-flex xs12 align-self-center>
              <v-responsive>
                <v-img
                  class="text-center mx-auto my-5"
                  :src="require(`@/assets/media/salesforce/process.png`)"
                ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" py-14 soar-product-bg">
        <v-container class="px-16">
          <v-layout row align-start mx-auto>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Synthesis
              </h6>
              <p class="body-1 mt-5">
                For the initial user research, I conducted guerrilla usability
                testing to understand the current problems. During the
                synthesize phase, I used affinity mapping to analyze pain points
                and determine priorities. Then I generated task flows to
                understand where in the process users were having troubles,
                created Lo-Fi sketches and Hi-Fi clickable prototypes. At the
                end, I was able to validate with users and confirm the pain
                points are solved by the redesign. The project timeline is two
                weeks. Now let’s go deeper into each step.
              </p>
            </v-flex>
            <v-flex xs12 align-self-center>
              <v-responsive>
                <v-img
                  class="text-center mx-auto my-5"
                  :src="require(`@/assets/media/salesforce/process.png`)"
                ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" py-14 soar-product-bg">
        <v-container class="px-16">
          <v-layout row align-start mx-auto>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Persona
              </h6>
              <p class="body-1 mt-5">
                For the initial user research, I conducted guerrilla usability
                testing to understand the current problems. During the
                synthesize phase, I used affinity mapping to analyze pain points
                and determine priorities. Then I generated task flows to
                understand where in the process users were having troubles,
                created Lo-Fi sketches and Hi-Fi clickable prototypes. At the
                end, I was able to validate with users and confirm the pain
                points are solved by the redesign. The project timeline is two
                weeks. Now let’s go deeper into each step.
              </p>
            </v-flex>
            <v-flex xs12 align-self-center>
              <v-responsive>
                <v-img
                  class="text-center mx-auto my-5"
                  :src="require(`@/assets/media/salesforce/process.png`)"
                ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" py-14 soar-product-bg">
        <v-container class="px-16">
          <v-layout row align-start mx-auto>
            <v-flex xs12>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Ideation
              </h6>
              <p class="body-1 mt-5">
                For the initial user research, I conducted guerrilla usability
                testing to understand the current problems. During the
                synthesize phase, I used affinity mapping to analyze pain points
                and determine priorities. Then I generated task flows to
                understand where in the process users were having troubles,
                created Lo-Fi sketches and Hi-Fi clickable prototypes. At the
                end, I was able to validate with users and confirm the pain
                points are solved by the redesign. The project timeline is two
                weeks. Now let’s go deeper into each step.
              </p>
            </v-flex>
            <v-flex xs12 align-self-center>
              <v-responsive>
                <v-img
                  class="text-center mx-auto my-5"
                  :src="require(`@/assets/media/salesforce/process.png`)"
                ></v-img>
              </v-responsive>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false,
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
};
</script>

<style>
.responsive-video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 -> 9/16x100 */
  overflow: hidden;
}
.video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.salesforce-gradient {
  background: #00a1df;
  color: white;
}
.salesforce-animated-left {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-animation: reveal 1.2s forwards;
  -webkit-animation-delay: 1s;
  animation: reveal 1.2s forwards;
  animation-delay: 1s;
}
@keyframes reveal {
  100% {
    left: -100%;
  }
}
.salesforce-animated-text {
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-animation: colorchange 0.5s forwards;
  -webkit-animation-delay: 1s;
  animation: colorchange 0.5s forwards;
  animation-delay: 1s;
  color: white;
}
@keyframes colorchange {
  0% {
    color: white;
  }
  100% {
    color: #0d9dda;
  }
}
.hero_container-image {
  /* filter: blur(2px); */
}
.animated-text-underline {
  /* position: absolute; */
  /* z-index: -1;
    left: 0;
    bottom: 0.08em; */
  height: 0.2rem;
  background: #f2f7fb;
}
.soar-video-frame {
  border-radius: 2.5rem;
  /* background: transparent; */
  z-index: 10;
  /* box-shadow: 25px 25px 50px rgba(9,148,255,0.25),
    -10px -10px 30px rgba(9,148,255,0.1),
    inset -5px -5px 15px rgba(9,148,255,0.5); */
  box-shadow: 0 35px 68px 0 rgba(188, 184, 191, 0.42),
    inset 0 -8px 16px 0 #b4b2b7;
  /* box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111; */
}
.soar-shadow {
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
.soar-product-bg {
  /* clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%); */
}
</style>
// AEE0A5 // AAD8D3
<style lang="scss" scoped>
.card-shadow {
  box-shadow: 0px 0px 362px rgba(0, 0, 0, 0.07),
    0px 0px 80.8574px rgba(0, 0, 0, 0.0417275),
    0px 0px 24.0734px rgba(0, 0, 0, 0.0282725) !important;
}
// .salesforce-image-gradient {

// }
.kenburns-bottom {
  -webkit-animation: kenburns-bottom 5s ease-out both;
  animation: kenburns-bottom 5s ease-out both;
}

@keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1.25) translateY(0);
    transform: scale(1.25) translateY(0);
    -webkit-transform-origin: 50% 84%;
    transform-origin: 50% 84%;
    filter: blur(3px);
  }
  100% {
    -webkit-transform: scale(1) translateY(15px);
    transform: scale(1) translateY(15px);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
    filter: blur(0px);
  }
}
@-webkit-keyframes kenburns-bottom {
  0% {
    -webkit-transform: scale(1.25) translateY(0);
    transform: scale(1.25) translateY(0);
    -webkit-transform-origin: 50% 84%;
    transform-origin: 50% 84%;
  }
  100% {
    -webkit-transform: scale(1) translateY(15px);
    transform: scale(1) translateY(15px);
    -webkit-transform-origin: bottom;
    transform-origin: bottom;
  }
}
@media screen and (min-width: 1264px) {
  .container {
    max-width: 900px;
  }
  .container--fluid {
    max-width: 100%;
  }
}
</style>
