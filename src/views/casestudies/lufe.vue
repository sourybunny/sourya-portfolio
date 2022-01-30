<template>
  <div v-if="!loading">
    <template>
      <section class="lufi-gradient py-10" style="height:100vh;">
        <v-container width="100%" class="py-14">
          <!-- <i class="fas fa-arrow-left fa-3x"></i> -->
          <div
            class="d-flex align-center"
            @click.stop="$router.push({ path: '/' })"
          >
            <i
              class="is-pointer fas fa-long-arrow-alt-left mr-3 fa-3x greybg--text text--darken-3"
            ></i>
            <span>Back</span>
          </div>
          <v-layout row wrap class="my-5" align-start>
            <v-flex xs12 sm4>
              <p
                class="font-weight-bold black--text display-2 pl-2"
                style="font-family:'Limelight' !important;"
              >
                Lufi
              </p>
            </v-flex>
            <v-flex xs12 sm6>
              <h1 class="title grey--text text--darken-2 font-weight-medium">
                Lufi is a “re-imagined public toilet system” that helps users to
                find clean and hygienic toilets easily and motivates them to use
                public toilets.
              </h1>
            </v-flex>
            <v-flex xs12 class="py-8">
              <v-dialog v-model="dialog" width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    v-bind="attrs"
                    width="100%"
                    height="100%"
                    :src="
                      require(`@/assets/media/streamanity/streamanity-main.png`)
                    "
                  ></v-img>
                  <!-- v-on="on" -->
                  <!-- @click="dialog = !dialog" -->
                  <p class="text-center caption ">
                    <!-- Click to view fullscreen image -->
                  </p>
                </template>
                <v-img
                  width=""
                  height="100%"
                  :src="
                    require(`@/assets/media/streamanity/streamanity-main.png`)
                  "
                ></v-img>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="pb-10">
        <div class=" text-center">
          <v-divider class="black"></v-divider>
          <v-container>
            <p
              class="font-weight-bold black--text font-italic display-3 my-10"
              style="font-family:'Limelight' !important;"
            >
              A Brief Overview
            </p>
          </v-container>
          <v-divider class="black"></v-divider>
        </div>
        <v-container width="100%" class="px-16">
          <v-layout row xs12 align="start" justify="center" class="my-10">
            <v-spacer></v-spacer>
            <!-- <v-flex xs12>
              <h6
                class="title my-5 lufi_blue--text text--darken-1 font-weight-bold"
              >
                Overview
              </h6>
            </v-flex> -->
            <v-flex xs12 sm6>
              <div>
                <h6 class="title font-weight-bold">My Role</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  User Research, UX Design, Visual Design
                </h6>
                <p class="grey--text text--darken-2 mt-2 font-weight-medium">
                  I led the design of the app
                  <span
                    class="font-weight-bold grey--text text--darken-3 subtitle-1 font-weight-medium"
                  >
                    to bring a behavioural change </span
                  >in the public while using public toilets and change the
                  misconception that public toilets are unclean.
                </p>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Tools</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Miro Board, Figma
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Duration</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  6 weeks
                </h6>
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm4>
              <div>
                <h6 class="title font-weight-bold">Team Size</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  4 members
                </h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Location</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Bangalore, India
                </h6>
              </div>

              <div class="mt-8">
                <h6 class="title font-weight-bold">Timeline</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  February 2019 - March 2020
                </h6>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" lufi py-14">
        <v-container class="px-16">
          <v-layout row xs12 wrap>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <h6 class="title lufi_blue--text text--darken-1 font-weight-bold">
                Design Challenge
              </h6>
              <h4 class="headline font-weight-medium my-6">
                How might we help autistic adults achieve independence when
                riding public transit?
              </h4>

              <p class="subtitle-1 font-weight-medium font-weight-medium">
                The goal of this project was to successfully guide young
                autistic adults in public transportation. Here, I led my team in
                the design response which was informed by our formative
                research. Our team looked at 'how to promote public
                transportation usage for the autistic users' who are
                inexperienced riders. By providing them location-based guidance,
                real-time transit etiquette, and help via community engagement.
              </p>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm4 align-self-center>
              <div>
                <p>
                  Design for Behavioral Change
                </p>
                <v-btn medium class="text-capitalize" outlined rounded>
                  Design Document
                </v-btn>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>

      <section class="">
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <h6
                class="title lufi_blue--text text--darken-1 font-weight-bold mb-6"
              >
                Product Highlight
              </h6>
              <div class="responsive-video">
                <iframe
                  class="video"
                  src="https://www.youtube.com/embed/-wJA764p8KQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <h6 class="body-1 caption text-center grey--text text--darken-1">
                Final Video of our Concept App.
              </h6>
              <p>
                Before calling out the design process, research findings and
                designs following are the key features of Infinite Transit.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container class="py-16">
          <v-layout class="px-10 mx-auto" row justify-center align-center>
            <!-- <v-spacer></v-spacer> -->

            <v-flex xs12 sm8>
              <v-card flat max-width="700">
                <p
                  class="title lufi_blue--text text--darken-1 font-weight-bold "
                >
                  Key Features
                </p>

                <p class="font-weight-medium body-1">
                  Search.
                  <span
                    class="grey--text text--darken-2  subtitle-1 font-weight-medium"
                    >This feature allows the ability to split BSV payments to a
                    collection of recipients. Creators who co-create content can
                    set a percentage to automatically earn their share of
                    revenue for a video.
                  </span>
                </p>

                <p class="font-weight-medium body-1 mt-8">
                  Booking.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Creators can upload videos seamlessly with this simple and
                    intuitive upload feature.</span
                  >
                </p>
                <!-- <div class="mt-8 mb-3 title font-weight-medium font-italic">
                  To improve user engagement,
                </div> -->
                <p class="font-weight-medium body-1 mt-8">
                  Reminders.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium font-weight-medium"
                    >content creators, or big fans of them, can boost a video to
                    really grow their audience. This feature allows anyone to
                    pay for a video to be free for whatever the balance of the
                    boost is, and features it on the boosted page. For new
                    audiences looking for great content, this is a cool way to
                    catch their eyes.</span
                  >
                </p>
                <p class="font-weight-medium body-1 my-8">
                  Toilet request.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Users can also tip the video creator with micropayments for
                    content they interact with.</span
                  >
                </p>

                <p class="font-weight-medium body-1">
                  Rewards.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Notifications to be informed about new video releases on
                    Streamanity by creators you follow.</span
                  >
                </p>
              </v-card>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Design Solution
              </p>
              <v-flex>
                To answer the question of taxes being boring, we came up with a
                very new form of taxes in a form of the mobile app. More than
                solving a problem this project was an opportunity to explore
                another form and redefine taxes because there are very few
                mobile apps that exist in the taxes space. The app is designed
                keeping in focus the following things : Engage the younger
                target audience and to motivate people to file their taxes on
                their own. automate user journeys with APIs provided by the
                Income Tax Department We broke down longer user journeys and we
                show them insights after users add the information We wanted to
                experiment with the design so we went bold and dark mode
              </v-flex>
              <p></p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Design Outcome
              </p>
              <v-flex>
                images
              </v-flex>
              <p></p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <div class=" text-center">
          <v-divider class="black"></v-divider>
          <v-container>
            <p
              class="font-weight-bold black--text font-italic display-3 my-10"
              style="font-family:'Limelight' !important;"
            >
              My Design Process
            </p>
          </v-container>
          <v-divider class="black"></v-divider>
        </div>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Process
              </p>

              <p>
                I worked alongside my manager to establish our process as a
                team, crafted visuals for Hi-Fi prototypes and developed an MVP
                to build the core experience we needed to deliver for our users.
              </p>
              <v-img
                class="mx-auto"
                width="100%"
                :src="require(`@/assets/media/lufe/lufe-process.png`)"
              ></v-img>
              <p class="text-center caption my-5 text-capitalize">
                User Centered Design
              </p>

              <section>
              </section>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Stakeholder Interview
              </p>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:15px;height:'100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  To bring a behavioural change in the public while using public
                  toilets and provide clean restrooms across the country.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow d-flex mx-4">
                <div
                  style="width:15px;height:'100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  Change the common belief that public toilets are unclean.
                  Generate revenue to maintain toilets.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:15px;heightL'100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  To make people find and use clean & safe restrooms with ease.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Background Study
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <v-card class="card-shadow pa-10 mt-10">
                <p>
                  Public toilets are unclean in India The available number of
                  toilets are inadequate for a populous country Security in and
                  around a toilet is inadequate especially for women People are
                  forced to go for open urination due to bad maintenance It is
                  hard to find toilets while travelling
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="lufi py-8">
        <v-container width="100%" class="py-16 ">
          <v-layout class="px-10" row align="center" justfy="center">
            <v-spacer></v-spacer>
            <v-flex xs12 sm5>
              <h6 class="title lufi_blue--text text--darken-1 font-weight-bold">
                Research Opportunity
              </h6>
              <div class="my-5">
                We gathered our research reflecting this problem space
              </div>

              <div>
                More than 3.5 million Americans live with Autism Spectrum
                Disorder.
              </div>
              <div class="my-4">
                In the coming decade, half-million people with Autism Spectrum
                Disorder will enter adulthood.
              </div>
              <div>
                Autistic people have the same travel demands as everyone has.
                There are limited resources for Autistic people in regards to
                <div class="mt-4">public transportation.</div>
                <div>Paratransit​ Transportation</div>
                <div>Training Relatives Driving</div>
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm5>
              image
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="lufi py-8">
        <v-container width="100%" class="py-16 ">
          <v-layout class="px-10" row align="center" justfy="center">
            <v-spacer></v-spacer>
            <v-flex xs12 sm5>
              <h6 class="title lufi_blue--text text--darken-1 font-weight-bold">
                Insights
              </h6>
              <div class="my-5">
                We gathered our research reflecting this problem space
              </div>

              <div>
                More than 3.5 million Americans live with Autism Spectrum
                Disorder.
              </div>
              <div class="my-4">
                In the coming decade, half-million people with Autism Spectrum
                Disorder will enter adulthood.
              </div>
              <div>
                Autistic people have the same travel demands as everyone has.
                There are limited resources for Autistic people in regards to
                <div class="mt-4">public transportation.</div>
                <div>Paratransit​ Transportation</div>
                <div>Training Relatives Driving</div>
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm5>
              image
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                User Stories
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  Autistic people have the same travel demands as everyone has.
                  There are limited resources for Autistic people in regards to
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8>
              <v-card class="card-shadow d-flex">
                <div
                  style="width:0.5rem;height='100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  Autistic people have the same travel demands as everyone has.
                  There are limited resources for Autistic people in regards to
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm8>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="lufi_blue lighten-1"
                ></div>
                <p class="ma-10">
                  Autistic people have the same travel demands as everyone has.
                  There are limited resources for Autistic people in regards to
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      
      
      <section class=" lufi py-14">
        <v-container class="px-16">
          <v-layout row xs12 wrap>
            <v-flex xs12>
              <h6 class="title lufi_blue--text text--darken-1 font-weight-bold">
                Problem Statement
              </h6>
              <h4 class="headline font-weight-medium my-6">
                Toilets are unhygienic and not maintained properly. Toilets are
                not accessible to disabled and elders. Difficult to locate
                toilets while travelling.
              </h4>
            </v-flex>

            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Design Explorations
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <v-card class="card-shadow pa-10 mt-10">
                <p>
                  Autistic people have the same travel demands as everyone has.
                  There are limited resources for Autistic people in regards to
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Design System
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Reflections
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p class="title lufi_blue--text text--darken-1 font-weight-bold ">
                Impact & Takeaways
              </p>
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
.lufi-gradient {
  background: linear-gradient(142.01deg, #e1eff3 12.04%, #cddaee 69.38%);
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
