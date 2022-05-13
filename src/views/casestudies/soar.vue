<template>
  <div v-if="!loading">
    <template>
      <v-container fluid class="px-0 mx-0">
        <div class="hero_container is-relative" style="height:500px;">
          <div
            class="soar-gradient soar-animated-left is-absolute"
            style="height:500px;left:0;top:0;z-index:2;"
          ></div>
          <v-img
            class="hero_container-image is-flex align-items-center jusitfy-center"
            style="left:0;top:0;width:100%;height:500px;object-fit:cover;z-index:1;"
            :src="require(`@/assets/media/soar/soar-brand-min.jpeg`)"
          >
          </v-img>
          <p
            class="font-weight-bold is-absolute text-center white--text display-4"
            style="font-family:'Playfair Display' !important;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;"
          >
            SOAR
          </p>
        </div>
      </v-container>

      <section class="pb-10">
        <v-container>
          <v-layout XS12 row wrap justify-center align-start class="my-10">
            <v-flex xs12 sm4>
              <div
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
              </div>
              <p
                class="font-weight-bold black--text display-2 pl-2"
                style="font-family:'Playfair Display' !important;"
              >
                For academic success
              </p>
            </v-flex>
            <v-flex xs12 sm6>
              <h1 class="subtitle-1 font-weight-medium">
                SOAR is an IU app developed under Enterprise Student Systems
                division of Indiana University. The app is one of the most
                essential go-to platforms for students to view a plethora of
                personal academic information that can assist them in academic
                success at IU, including notes left for students by advisors and
                other staff.
              </h1>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container>
          <v-layout row xs12 justify-center align-start class="my-10">
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm6>
              <div>
                <h6 class="title font-weight-bold">My Role</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  UX Design Engineer, Developer, Interaction Designer
                </h6>
                <p class="grey--text text--darken-2 mt-2 font-weight-medium">
                  I
                  <span
                    class="font-weight-bold grey--text text--darken-3 subtitle-1 font-weight-medium"
                    >developed and shipped </span
                  >the web and mobile interfaces
                </p>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Tools</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Figma, Javascript, ReactJs
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Duration</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  January 2022 - March 2022 (3 months)
                </h6>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
            <v-flex xs12 sm4>
              <div>
                <h6 class="title font-weight-bold">Team</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Sr UX Designer, Product Manager, UX Engineer(me), Backend
                  developer
                </h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Company/Client</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Enterprise Student Systems, Indiana University
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Project Status</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Shipped
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
      </section>
      <v-container fluid class="px-0 mx-0">
        <div class="soar-gradient" style="height:500px;overflow:hidden;">
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
      <section class=" py-14">
        <v-container>
          <v-layout row xs12 wrap>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Background
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
            <v-spacer></v-spacer>
            <v-flex xs12 sm4 align-self-center>
              <div>
                <h4 class="headline font-weight-medium mb-5">Impact</h4>
                <p>
                  SOAR is used by 100000+ students across Indiana University.
                </p>
                <a
                  class="text-decoration-none"
                  href="https://streamanity.com/"
                  target="_blank"
                >
                  <!-- <v-btn medium class="text-capitalize" outlined rounded>
                    Live Site
                  </v-btn> -->
                </a>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section class="soar py-14 soar-product-bg">
        <v-container>
          <v-layout row align-start xs12>
            <v-flex xs12 offset-sm1>
              <h6 class="title soar_blue--text text--darken-1 font-weight-bold">
                Product highlight
              </h6>
            </v-flex>
            <v-flex xs12 sm12>
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
        <v-container class="py-10">
          <v-layout row align-center justify-center>
            <v-flex xs10>
              <h6 class="text-xs-h6 text-sm-h4 font-weight-light text-center">
                In the Indiana University Bloomington alone, there are over
                <span class="font-weight-medium animated-text-underline"
                  >48 thousand students </span
                >, the majority of whom use smartphone to access academic
                information.
              </h6>
            </v-flex>
            <v-flex xs10>
              <hr class="mt-10 grey--lighten-5" />
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <div class="text-center">
          <v-container>
            <p
              class="grey--text text--darken-2 font-weight-medium display-3"
              style="font-family:'Playfair Display' !important;"
            >
              Why we had to solve this?
            </p>
          </v-container>
        </div>
        <v-container class="py-16 px-16" width="100%">
          <v-layout row align-start justify-center wrap>
            <v-flex xs12>
              <p class="title soar_blue--text text--darken-1 font-weight-bold">
                Research
              </p>
            </v-flex>
            <v-flex xs12 sm5>
              <p class="subtitle-1 font-weight-medium">
                To begin with, the current SOAR app is outdated. We conducted a
                survey which had over 500 respondents to understand whether students are able to find
                information they need quickly. Based on the survey, we found out
                students try to access their academic information on mobile more
                than they do on desktop. With increasing consumption of the
                information on the mobile compared to desktop, several IU apps
                have been made mobile-friendly and it is now imperative for us
                to provide consistent experience on mobile for SOAR.
              </p>
            </v-flex>
            <v-flex xs12 sm7>
              <div class="mx-5">
                <v-responsive>
                  <v-img
                    width="100%"
                    height="100%"
                    :src="require(`@/assets/media/soar/soar_survey.png`)"
                  ></v-img>
                </v-responsive>
                <div class="caption text-center ">Survey form</div>
              </div>
            </v-flex>
            <v-flex xs12 sm5>
              <div class="d-flex align-center my-16">
                <h4 class="mr-4 display-2 font-weight-bold soar_crimson--text">
                  72%
                </h4>
                <div class="title font-weight-medium">
                  <div>students tried to open the site on mobile</div>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm7>
              <div class="d-flex align-center my-16">
                <h4 class="mr-4 display-2 font-weight-bold soar_crimson--text">
                  100%
                </h4>
                <div class="title font-weight-medium">
                  <div>
                    students failed to access the information through mobile
                  </div>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 class="mt-10">
              <p class="title soar_blue--text text--darken-1 font-weight-bold">
                Opportunities and difficulties in existing application ?
              </p>
              <div
                class="soar-shadow mb-15"
                style="height:600px;overflow:scroll;"
              >
                <v-responsive>
                  <v-img
                    width="100%"
                    height="100%"
                    :src="require(`@/assets/media/soar/soar_old-min.png`)"
                  ></v-img>
                </v-responsive>
                <div class="caption text-center">Current SOAR application</div>
              </div>
              <div></div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="soar">
        <v-container>
          <v-layout row x12 align-start>
            <v-flex xs12>
                <div class="soar_blue--text text--darken-1">
                  While working on the Webview version of SOAR,
                  implementing the information architecture (IA) for mobile with
                  infinite scrolling was essential to a good user experience. The most
                  important challenge is the visual layout of information on smaller
                  screen devices or how the user will assess meaning and direction
                  given the information presented to them.
                </div>
            </v-flex>
            <v-flex xs12 sm5>
               <v-responsive>
                  <v-img
                    :src="require(`@/assets/media/soar/home.png`)"
                  ></v-img>
                </v-responsive>
            </v-flex>
            </v-layout>
          
        </v-container>
      </section>
      <section>
        <v-container class="py-16 px-16">
          <v-layout row x12 align-start>
            <v-flex xs12>
              <p class="title soar_blue--text text--darken-1 font-weight-bold ">
                Design Outcome
              </p>
            </v-flex>
            <v-flex xs12 sm5>
              <div class="body-1">Home page</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="soar_blue lighten-1"
                ></div>
                <p class="ma-5">
                  Quick access to important information regarding enrollment,
                  grades and academic advisors and links to external apps is
                  displayed on the home page.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="soar_blue lighten-1"
                ></div>
                <p class="ma-5">
                  Secondary level information is abstracted to focus on most
                  essential information.
                </p>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm3>
              <video
                height="100%"
                width="100%"
                :src="require(`@/assets/media/soar/soar_home.mp4`)"
                autoplay
                muted
                loop
                class="mx-16 card-shadow"
              ></video>
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout>
        </v-container>
      </section>
      <section class="soar">
        <v-container class="py-16 px-16">
          <v-layout row align-start justify-space-between>
            <v-flex xs12 sm3>
              <video
                height="100%"
                width="100%"
                :src="require(`@/assets/media/soar/soar_academics.mp4`)"
                autoplay
                muted
                loop
                class="mx-16 card-shadow"
              ></video>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm5>
              <div class="body-1">Academics page</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="soar_blue lighten-1"
                ></div>
                <p class="ma-5">
                  Students can view billing information, class schedule,
                  appointment details, milestones and demographic details .
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="soar_blue lighten-1"
                ></div>
                <p class="ma-5">
                  Information is broken down into chunks with the most important
                  information arranged on top.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="">
        <v-container class="py-16 ">
          <v-layout row align-start justify-space-between>
            <v-flex xs12 sm5>
              <div class="body-1">Notes history page</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="soar_blue lighten-1"
                ></div>
                <p class="ma-5">
                  List of notes in order of most recent notes by academic
                  advisors. Detailed note is displayed under the accordion.
                </p>
              </v-card>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm3>
              <video
                height="100%"
                width="100%"
                :src="require(`@/assets/media/soar/soar_notes.mp4`)"
                autoplay
                muted
                loop
                class="mx-16 card-shadow"
              ></video>
            </v-flex>
            <v-spacer></v-spacer>
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
.soar-gradient {
  background: #990001;
  color: white;
}
.soar-animated-left {
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
.hero_container-image {
  filter: blur(1px);
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
</style>
