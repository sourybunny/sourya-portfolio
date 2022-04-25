<template>
  <div v-if="!loading">
    <template>
      <section class="streamanity-gradient py-10">
        <v-container class="py-14">
          <!-- <i class="fas fa-arrow-left fa-3x"></i> -->
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
            <!-- <i
              class="is-pointer fas fa-long-arrow-alt-left mr-3 fa-3x greybg--text text--darken-3"
            ></i> -->
            <span class="is-pointer">Back</span>
          </div>
          <v-layout row wrap class="my-5" align-start>
            <v-flex xs12 sm4>
              <p
                class="font-weight-bold black--text display-2 pl-2"
                style="font-family:'Playfair Display' !important;"
              >
                Streamanity
              </p>
            </v-flex>
            <v-flex xs12 sm7>
              <h1 class="title grey--text text--darken-2 font-weight-medium">
                A ad-free mobile-web based video streaming platform to help
                small video content creators upload videos and earn money from
                every view in BitcoinSV directly from their followers.
              </h1>
            </v-flex>
            <v-flex xs12 class="py-8">
              <v-dialog v-model="dialog" width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    v-bind="attrs"
                    :src="
                      require(`@/assets/media/streamanity/streamanity-main.png`)
                    "
                  ></v-img>
                  <p class="text-center caption "></p>
                </template>
                <v-img
                  width="100%"
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
          <v-container>
            <p
              class="grey--text text--darken-2 font-weight-medium display-3 my-10"
              style="font-family:'Playfair Display' !important;"
            >
              A Brief Overview
            </p>
          </v-container>
        </div>
        <v-container width="100%" class="px-16">
          <v-layout row xs12 align="start" justify="center" class="my-10">
            <v-spacer></v-spacer>
            <!-- <v-flex xs12>
              <h6
                class="title my-5 streamanity_green--text text--darken-1 font-weight-bold"
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
                  UX Design Engineer, Developer, Interaction Designer
                </h6>
                <p class="grey--text text--darken-2 mt-2 font-weight-medium">
                  I
                  <span
                    class="font-weight-bold grey--text text--darken-3 subtitle-1 font-weight-medium"
                    >single-handedly designed, developed and shipped </span
                  >the web and mobile interfaces for a new product offering
                  based on the company's vision for content monetization in
                  Bitcoin.
                </p>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Tools</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Figma, Javascript, VueJs, Google Workbox PWA
                </h6>
              </div>
              <div>
                <h6 class="title font-weight-bold">Duration</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  13 months
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
                  3 members
                </h6>
              </div>
              <div class="my-8">
                <h6 class="title font-weight-bold">Company/Client</h6>
                <h6
                  class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                >
                  Keyport Labs Pvt Ltd, funded by CoinGeek
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
      <section class=" streamanity py-14">
        <v-container class="px-16">
          <v-layout row xs12 wrap>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6>
              <h6
                class="title streamanity_green--text text--darken-1 font-weight-bold"
              >
                Design Challenge
              </h6>
              <h4 class="headline font-weight-medium my-6">
                Design a video platform for content creators to help monetize
                niche video content and earn money in BitcoinSV.
              </h4>
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
                <h4 class="headline font-weight-medium">Impact</h4>
                <p>
                  Streamanity was later acquired by RelayX.io
                </p>
                <a
                  class="text-decoration-none"
                  href="https://streamanity.com/"
                  target="_blank"
                >
                  <v-btn medium class="text-capitalize" outlined rounded>
                    Live Site
                  </v-btn>
                </a>
              </div>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <section class=" py-8">
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
      <section class="streamanity">
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
                  <span
                    class="grey--text text--darken-2  subtitle-1 font-weight-medium"
                    >This feature allows the ability to split BSV payments to a
                    collection of recipients. Creators who co-create content can
                    set a percentage to automatically earn their share of
                    revenue for a video.
                  </span>
                </p>

                <p class="font-weight-medium body-1 mt-8">
                  Upload.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Creators can upload videos seamlessly with this simple and
                    intuitive upload feature.</span
                  >
                </p>
                <div class="mt-8 mb-3 title font-weight-medium font-italic">
                  To improve user engagement,
                </div>
                <p class="font-weight-medium body-1 mt-8">
                  Video Boosting.
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
                  Tipping.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Users can also tip the video creator with micropayments for
                    content they interact with.</span
                  >
                </p>

                <p class="font-weight-medium body-1">
                  Notifications.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Notifications to be informed about new video releases on
                    Streamanity by creators you follow.</span
                  >
                </p>
                <p class="font-weight-medium body-1 my-8">
                  Comments.
                  <span
                    class="grey--text text--darken-2 subtitle-1 font-weight-medium"
                    >Comments provides a way to interact directly with fans and
                    creators.</span
                  >
                </p>
              </v-card>
            </v-flex>
            <!-- <v-spacer></v-spacer> -->
          </v-layout>
        </v-container>
      </section>
      <!-- <section class="streamanity">
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Design Solution
              </p>
              
              <p></p>
            </v-flex>
          </v-layout>
        </v-container>
      </section> -->
      <section class="">
        <v-container> </v-container>
        <v-container class="py-16 ">
          <v-layout row align-start justify-space-between>
            <v-flex xs12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Design Outcome
              </p>
            </v-flex>
            <v-flex xs12 sm3>
              <div class="body-1">Discover Content & Creators</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Viewers can discover content easily by selecting from Top
                  videos, favorite creators and Discover new creators tabs.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Powerful and seamless Search experience that shows both videos
                  and channels by creators.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Viewers can follow or unfollow creators in single click.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm9>
              <video
                height="100%"
                width="100%"
                :src="
                  require(`@/assets/media/streamanity/discover_desktop.mp4`)
                "
                autoplay
                muted
                loop
                class="mx-10"
              ></video>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="streamanity">
        <v-container class="py-16 ">
          <v-layout row align-start justify-space-between>
            <v-flex xs12 sm7>
              <video
                style="border-radius:35px;"
                height="100%"
                width="100%"
                :src="require(`@/assets/media/streamanity/upload_tab.mp4`)"
                autoplay
                muted
                loop
                class="mx-10"
              ></video>
            </v-flex>
            <v-flex xs12 sm4>
              <div class="body-1">Video Upload and Revenue Share</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Users can upload video and select thumbnails on the go from
                  video or set a custom thumbnail. Faster upload process by
                  enabling fields while video uploads.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Creators can set a price for their content before publishing
                  and earn money by pay-per-view.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Creators can share their revenue with other co-creators by
                  entering their paymail information.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="">
        <v-container class="py-16 ">
          <v-layout row align-start justify-space-between>
            <v-flex xs12 sm3>
              <div class="body-1">Video Boost & Comments</div>

              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Viewers can engage with creators using comments and tagging.
                  They can also Tip the creator as a token of appreciation.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  After watching a brief preview, viewers can pay for genuine
                  content using their Moneybutton/Relayx wallet and watch the
                  full video.
                </p>
              </v-card>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-5">
                  Fans can boost their favorite content creator's video by
                  paying a small price to increase the reach of the video and
                  let other users watch it for free.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm9>
              <video
                height="100%"
                width="100%"
                :src="require(`@/assets/media/streamanity/boostt_desktop.mp4`)"
                autoplay
                muted
                loop
                class="mx-10"
              ></video>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <div class=" text-center">
          <v-container>
            <p
              class="grey--text text--darken-2 font-weight-medium display-3 my-10"
              style="font-family:'Playfair Display' !important;"
            >
              My Design Process
            </p>
          </v-container>
        </div>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Process
              </p>

              <p>
                I worked alongside my manager to establish our process as a
                team, crafted visuals for Hi-Fi prototypes and developed an MVP
                to build the core experience we needed to deliver for our users.
              </p>
              <v-img
                class="mx-auto"
                max-width="100%"
                max-height="100%"
                :src="require(`@/assets/media/streamanity/ddp.png`)"
              ></v-img>
              <p class="text-center caption text-capitalize">
                double diamond process
              </p>

              <section>
                <p
                  class="title streamanity_green--text text--darken-1 font-weight-bold"
                >
                  User Research
                </p>
                <p>
                  A series of in-depth interviews were then conducted on 5
                  participants to further identify pain points, frustrations,
                  needs, and desires with existing products to determine how
                  Streamanity could improve this experience.
                </p>
              </section>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="streamanity py-8">
        <v-container width="100%">
          <v-layout class="px-10" row align-start justify-space-between>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Research Opportunity
              </p>
            </v-flex>
            <v-flex xs12 sm6>
              <div>
                We gathered our research reflecting this problem space by
                conducting survey with creators in cryptocurrency domain.
              </div>

              <div class="my-5">
                80% of content creators are unhappy with Youtube's monetization
                policies and revenue share.
              </div>
              <div>
                Crypto content creators face <strong>difficulty in increasing the reach </strong>
                of their content.
              </div>
              <div class="my-5">
                Creators want to <strong>engage with their fans directly and earn money</strong>
                with their content.
              </div>
              <div>
                Users feel <strong>Youtube is overcrowded </strong>and distracting with ads, they
                want to have a platform specific to crypto
              </div>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm4>
              <v-img
                :src="require(`@/assets/media/streamanity/research.jpg`)"
              ></v-img>
              <div class="text-caption grey--text text-center">
                <a href='https://www.freepik.com/vectors/frame'>Frame vector created by rawpixel.com - www.freepik.com</a>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class=" py-8">
        <v-container width="100%" class="py-16">
          <v-layout class="px-10" row align-start justify-center>
            <v-flex xs12>
              <h6
                class="title  mb-10  streamanity_green--text text--darken-1 font-weight-bold"
              >
                Key Takeaways
              </h6>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow mx-4">
                <div
                  style="width:100%;height:5px;"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="pa-5 text-center">
                  What products exist to discover, share and monetize content?
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow  mx-4">
                <div
                  style="width:100%;height:5px;"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="pa-5 text-center">
                  What are users current pain points with existing products?
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow mx-4">
                <div
                  style="width:100%;height:5px;"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="pa-5  text-center">
                  Which features are essential to monetize videos?
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow mx-4">
                <div
                  style="width:100%;height:5px;"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="pa-5 text-center">
                  What are the users needs and pain points?
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card class="card-shadow  mx-4">
                <div
                  style="width:100%;height:5px;"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="pa-5  text-center">
                  What are the existing mental models of users?
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-start justify-space-between>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Market Research
              </p>
            </v-flex>
            <v-flex xs12 sm5>
              <p>
                We did a broad sweep of companies to compare, touching different
                industries and business types across a number of different
                business sizes.
              </p>
              <p>
                This graph plots brands/companies in relation to Streamanity
                from an innovation standpoint as well as in business similarity.
              </p>
              <p class="title font-weight-bold ">
                Insights
              </p>
              <p>
                Companies like Patreon follow a <strong>subscription model. But, the
                conversion rate could be as low as 0.5%</strong>, which means that only
                0.5% of the subscriber base would want to purchase a monthly
                subscription. This <strong>doesn't benefit the creators.</strong>
              </p>
              <p>
                Monthly subscriptions didn't make sense If one likes more than
                2–3 creators, as his commitment would be more than his Netflix
                bill.
              </p>
              <p>
                Youtube released Prime to get rid of advertisements by by asking
                users to pay monthly subscription fee. It would payout to
                creators based on how many minutes of the video was watched with
                a premium subscription. We thought that this would put a limit
                on the creators who have the potential to earn more because of
                the inability to set the price of the video by themselves.
              </p>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="pa-10 mx-auto">
                <v-img
                  class="mx-auto"
                  max-width="100%"
                  max-height="100%"
                  :src="require(`@/assets/media/streamanity/comp.png`)"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-start justify-center>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                The Problem
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <p>
                With Streamanity, we were trying to solve the monetization
                problem that YouTube creators face. Our hypothesis was that
                <strong>creators on YouTube don't make much money to support themselves.</strong>
                YouTube’s ad revenue is pathetic. Patreon was one way in which
                creators could monetize their work.
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Hypothesis & Solution
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <p>
                What if there was a way for creators to put a <strong>low cost paywall
                for his videos and users would pay only for what they watch.</strong> We
                wanted to take it as far as paying by the seconds watched. Since
                the value that someone gets from an average youtube video is
                low, we needed a payment method that can transact low-value
                payments with very low transaction fees.
              </p>
              <p>
                We thought with such a low cost paywall we could get to a
                conversion of 5%. <strong>With a conversion rate of 5% and a video cost
                of $ 0.10, a creator would make 10x the money from a single
                video</strong> when compared to what he would make from YouTube in a
                month.
              </p>

              <p>
                We believed that there will be enough people who would watch the
                video by paying since the amount involved is small and since it
                is <strong>not a monthly commitment.</strong>
              </p>
              <p>
                <strong>To incentivize conversions, we wanted the platform to be
                ad-free.</strong> So, it was an ad-free platform, where the fans would
                pay small amounts of money to watch videos uploaded by their
                favorite creators.
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Validation
              </p>
            </v-flex>
            <v-flex xs12 sm8>
              <p>
                We wanted to go one step further, we spoke with all the major
                creators in the Bitcoin Cash ecosystem at that time and got
                their feedback. Since they were all bitcoiners, they wanted to
                see new things being tried using Bitcoin. All of them said nice
                things about the idea. We took this as the initial validation of
                the idea.
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <section class="streamanity">
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-space-between>
            <v-flex xs12 sm8>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                User Stories
              </p>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-10">
                  As a content creator, I want to be able to <strong>earn money</strong> and
                  share my revenue with co-creators.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="card-shadow d-flex">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-10">
                  As a content creator, I want to have <strong>direct control over
                  monetization</strong> of my videos.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="card-shadow d-flex my-5">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-10">
                  As a viewer, I want to engage with the creators and <strong>encourage
                  by providing incentives </strong>to quality content.
                </p>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card class="card-shadow d-flex">
                <div
                  style="width:0.5rem;height='100%';"
                  class="streamanity_green lighten-1"
                ></div>
                <p class="ma-10">
                  As a viewer, I want to watch and appreciate quality content
                  about Bitcoin and cryptocurrency.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <div class=" text-center">
        <v-container>
          <p
            class="grey--text text--darken-2 font-weight-medium display-3 my-10"
            style="font-family:'Playfair Display' !important;"
          >
            Carving out a niche in a saturated market.
          </p>
        </v-container>
      </div>
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Design Explorations
              </p>
            </v-flex>
            <v-flex xs12 sm4>
              <v-img
                width="100%"
                height="100%"
                :src="require(`@/assets/media/streamanity/iteration.png`)"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <!-- <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Design System
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </section> -->
      <section>
        <v-container class="py-16">
          <v-layout class="px-10" row align-center justify-center>
            <v-flex xs12 sm12>
              <p
                class="title streamanity_green--text text--darken-1 font-weight-bold "
              >
                Reflections
              </p>
            </v-flex>
            <v-layout row align-center justify-center>
              <v-flex xs12 sm4>
                <v-card class="card-shadow d-flex my-5">
                  <div
                    style="width:15px;height:'100%';"
                    class="streamanity_green lighten-1"
                  ></div>
                  <p class="ma-10">
                    We found that these features were really useful to the user
                    base we tested with.
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card class="card-shadow d-flex mx-4">
                  <div
                    style="width:15px;height:'100%';"
                    class="streamanity_green lighten-1"
                  ></div>
                  <p class="ma-10">
                    While we thought we are building an MVP, We built an entire
                    product used by consumers and this gave me immense
                    satisfaction to see users trying our new platform.
                  </p>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4>
                <v-card class="card-shadow d-flex my-5">
                  <div
                    style="width:15px;heightL'100%';"
                    class="streamanity_green lighten-1"
                  ></div>
                  <p class="ma-10">
                    Most importantly, I had the opportunity to work with a very
                    different set of user base and this really expanded me as a
                    designer to work on consumer facing applications.
                  </p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-container>
      </section>
      <!-- <section>
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
      </section> -->
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
.streamanity-gradient {
  background: linear-gradient(150.03deg, #d8edd4 0.03%, #aad8d3 96.08%);
}
</style>
