<template>
  <div>
    <template>
      <section class="greybg py-16" style="height:100vh;">
        <v-container width="100%" class="px-16">
          <v-row align="center" justify="center">
            <v-col class="text-left" cols="12">
              <h6>Problem Statement</h6>
              <h1 class="display-2 font-weight-medium mb-4">
                Developed an analytics solution for an enterprise product to
                better understand the user journey and user experience on the
                web.
              </h1>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section class="streamanity py-10">
        <v-container width="100%" class="px-16">
          <v-layout row xs12 align="start" justify="center">
            <v-flex xs12 sm7>
              <div>
                <h6 class="title">My Role</h6>
                <h6>UX Design Engineer, Developer, Interaction Design</h6>
                <p>
                  I
                  <span class="font-weight-bold"
                    >single-handedly designed, developed and shipped </span
                  >the web and mobile interfaces for a new product offering
                  based on the company's vision for content monetization in
                  Bitcoin
                </p>
              </div>
              <div class="my-8">
                <h6 class="title">Tools</h6>
                <h6>Javascript, VueJs, Google Workbox PWA, Figma</h6>
              </div>
              <div>
                <h6 class="title">Duration</h6>
                <h6>13 months</h6>
              </div>
            </v-flex>
            <v-flex xs12 sm5>
              <div>
                <h6 class="title">Team Size</h6>
                <h6>3 members</h6>
              </div>
              <div class="my-8">
                <h6 class="title">Company/Client</h6>
                <h6>Keyport Labs Pvt Ltd, funded by CoinGeek</h6>
              </div>
              <div>
                <h6 class="title">Project Status</h6>
                <h6>Shipped</h6>
              </div>
              <div class="mt-8">
                <h6 class="title">Timeline</h6>
                <h6>February 2019- March 2020</h6>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="py-10">
        <v-container class="px-16">
          <v-layout row xs12 wrap>
            <v-flex xs12 sm8>
              <h6
                class="subheading streamanity_green--text text--darken-1 font-weight-bold"
              >
                Overview
              </h6>
              <h6 class="headline my-6">
                Designing a video platform for Bitcoin SV users to monetize
                their video content and earn money
              </h6>
              <p class="my-10 subheading">
                Here I was a UX Design Engineer in a team of 3 people (1 Primary
                Manager, 1 Backend Developer, and
                <span
                  class="streamanity_green--text text--darken-1 font-weight-bold"
                  >myself -- UX Design Engineer).</span
                >
              </p>
              <p class="subheading font-weight-bold">
                My main responsibility was to work on Javascript to integrate
                Adobe Analytics and Decibel Analytics and making sure that the
                data from the user end would populate on the Analytics dashboard
                to track user journey and generate heatmaps.
              </p>
            </v-flex>
            <v-flex xs12 sm4> </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="streamanity">
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs8>
              <h6 class="title">
                Keyport Labs Pvt Ltd is a startup funded by CoinGeek that
                provides video streaming webapp as well as a mobile application
                f
              </h6>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs8>
              <h6
                class="subheading streamanity_green--text text--darken-1 font-weight-bold mb-6"
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
            <v-flex xs12 sm6>
              <div class="d-flex align-center">
                <h4 class="mr-4">1000+</h4>
                <div>
                  <div>Signups in first</div>
                  <div>6 months</div>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm3>
              <div class="d-flex align-center">
                <h4 class="mr-4">500+</h4>
                <div>
                  <div>DAU</div>
                  <div>Daily Active Users</div>
                </div>
              </div>
            </v-flex>

            <v-flex xs9>
              <p class="text-right grey--text mt-2">*As of 2020</p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
          <p class="subheading streamanity_green--text text--darken-1 font-weight-bold ">The Design Challenge</p>
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
