<template>
  <div>
    <template>
      <section class=" py-16" style="height:100vh;">
        <v-container width="100%" class="px-16">
          <!-- <i class="fas fa-arrow-left fa-3x"></i> -->
          <i
            @click="$router.push({ path: '/' })"
            class="is-pointer fas fa-long-arrow-alt-left fa-3x greybg--text text--darken-3"
          ></i>
          <v-row align="center" justify="center">
            <v-col class="text-left" cols="12">
              <h3 class="font-weight-medium">Streamanity</h3>
              <h1
                class="title grey--text text--darken-2 font-weight-medium mb-4"
              >
                Designed and developed a simplified mobile-web based video
                streaming interface to help small video content creators upload
                videos and earn money from every view in BitcoinSV directly from their
                followers.
              </h1>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section class="streamanity py-14">
        <v-container width="100%" class="px-16">
          <v-layout row xs12 align="start" justify="center">
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <div>
                <h6 class="title font-weight-bold">My Role</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">
                  UX Design Engineer, Developer, Interaction Design
                </h6>
                <p class="grey--text text--darken-2 mt-2">
                  I
                  <span class="font-weight-bold grey--text text--darken-3 subtitle-1 font-weight-medium"
                    >single-handedly designed, developed and shipped </span
                  >the web and mobile interfaces for a new product offering
                  based on the company's vision for content monetization in
                  Bitcoin
                </p>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-medium">Tools</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">
                  Javascript, VueJs, Google Workbox PWA, Figma
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Duration</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">13 months</h6>
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm4>
              <div>
                <h6 class="title font-weight-bold">Team Size</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">3 members</h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Company/Client</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">
                  Keyport Labs Pvt Ltd, funded by CoinGeek
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Project Status</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">Shipped</h6>
              </div>
              <div class="mt-8">
                <h6 class="title font-weight-bold">Timeline</h6>
                <h6 class="grey--text text--darken-2 subtitle-1 font-weight-medium">
                  February 2019 - March 2020
                </h6>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="py-14">
        <v-container class="px-16">
          <v-layout row xs12 wrap>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <h6
                class="title streamanity_green--text text--darken-1 font-weight-bold"
              >
                Design Challenge
              </h6>
              <h6 class="headline font-weight-bold my-6">
                Design a video platform for content creators to help monetize
                niche viedeo content and earn money in BitcoinSV.
              </h6>
              <p
                class="mt-10 subtitle-1 font-weight-medium font-weight-medium grey--text text--darken-2"
              >
                Here I was a UX Design Engineer in a team of 3 people (1 Primary
                Manager, 1 Backend Developer, and
                <span
                  class="streamanity_green--text text--darken-1 font-weight-bold"
                  >myself -- UX Design Engineer).</span
                >
              </p>
              <p class="subtitle-1 font-weight-medium font-weight-medium">
                My main responsibility was to work on creating prototypes, build
                MVP using VueJs & Javascript, brainstorm ideas and iterate new
                solutions to improve user acquisition and engagement.
              </p>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm4 align-self-center>
              <div>
                <h4 class="text-h6 font-weight-bold"> Impact</h4>
                <p>
                  Streamanity was later acquired by RelayX.io
                </p>
                <v-btn medium class="text-capitalize" outlined rounded>
                Live Site
              </v-btn>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section class="streamanity py-8">
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs8>
              <h6 class="title">
                Streamanity is an exciting new video platform that changes the
                way content creators can make money from their work. Rather than
                wait for a corporate team to decide if you’re worthy of
                “monetization,” then rely on tiny percentages of their ad
                revenue, Streamanity is simple: post a video, set a price, and
                let the market decide. And it all works with Bitcoin BSV.
              </h6>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <h6
                class="title streamanity_green--text text--darken-1 font-weight-bold mb-6"
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
                This video gives you an overview of the product that I enjoyed
                working and showcases my work.
              </h6>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container class="px-10">
          <v-layout
            row
            wrap
            class="px-16 align-start justify-center"
            no-gutters
          >
            <v-flex xs12 sm5>
              <div class="d-flex align-center">
                <h4 class="mr-4 font-weight-bold">1000+</h4>
                <div class="title font-weight-medium">
                  <div>Signups in first</div>
                  <div>6 months</div>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm4>
              <div class="d-flex align-center">
                <h4 class="mr-4 font-weight-bold">500+</h4>
                <div class="title font-weight-medium">
                  <div>DAU</div>
                  <div>Daily Active Users</div>
                </div>
              </div>
            </v-flex>

            <v-flex xs9>
              <p class="text-right body-2 grey--text mt-2">*As of 2020</p>
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
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Key Features
              </p>

              <p class="font-weight-medium body-1">
                Revenue Share.
                <span class="grey--text text--darken-2  subtitle-1 font-weight-medium"
                  >This feature allows the ability to split BSV payments to a
                  collection of recipients. Creators who co-create content can
                  set a percentage to automatically earn their share of revenue
                  for a video.
                </span>
              </p>
              
              <p class="font-weight-medium body-1 mt-8">
                Upload.
                <span class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                  >Creators can upload videos seamlessly with this simple and
                  intuitive upload feature.</span
                >
              </p>
             <div class="mt-8 mb-3 title font-weight-medium font-italic"> To improve user engagement,</div>
              <p class="font-weight-medium body-1 mt-8">
                Video Boosting.
                <span class="grey--text text--darken-2 subtitle-1 font-weight-medium font-weight-medium"
                  >content creators, or big fans of them, can boost a video to
                  really grow their audience. This feature allows anyone to pay
                  for a video to be free for whatever the balance of the boost
                  is, and features it on the boosted page. For new audiences
                  looking for great content, this is a cool way to catch their
                  eyes.</span
                >
              </p>
              <p class="font-weight-medium body-1 my-8">
                Tipping.
                <span class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                  >Users can also tip the video creator with micropayments for
                  content they interact with.</span
                >
              </p>
              
              <p class="font-weight-medium body-1">
                Notifications.
                <span class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                  >Notifications to be informed about new video releases on Streamanity by creators you follow.</span
                >
              </p>
              <p class="font-weight-medium body-1 my-8">
                Comments.
                <span class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                  >Comments provides a way to interact directly with fans and creators.</span
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
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Images
              </p>

              <p></p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Process
              </p>

              <p>
                I worked alongside my manager to establish our process as a team,
               crafted visuals for Hi-Fi prototypes and developed MVP to build the core
                experience we needed to deliver for our users.
              </p>
              <v-img
                class="mx-auto"
                max-width="700"
                max-height="600"
                :src="require(`@/assets/media/streamanity/ddp.png`)"
              ></v-img>
             <p class="text-center caption text-capitalize"> double diamond process</p>
              <section>
                <p class="title"> User Research</p>
                <p>Talking to content creators</p>
                <p>After conducting interviews,</p>
              </section>

              <p>User Stories</p>

              <p>Wireframes/early explorations</p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
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
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
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
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
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
export default {};
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
</style>
