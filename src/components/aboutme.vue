<template>
  <div class="mainbg">
    <div class="layout-container bottom-line about">
      <div class="layout-container__inner">
        <v-layout wrap class="align-start justify-space-between">
          <v-flex xs12 sm9 md6 lg5 class="pt-4">
            <p class="font-weight-bold white--text my-6 "
              :class="$vuetify.breakpoint.mdAndUp ? ' display-3' : 'display-1'">
              About
              <span class="tangram_blue--text text--lighten-1 aboutme-gradient">Me</span>
            </p>
            <div class="headline grey--text font-weight-light text-loop">
              <!-- Yay! welcome to my space. -->
              <div>
                I'm a digital designer
                <span class="text-highlight">transforming</span> products
                to
                <span class="text-highlight">humanize</span> them.
              </div>
              <!-- <div>
                I
                <span class="text-highlight font-italic">transform</span>
                products to
                <span class="text-highlight font-italic">humanize</span> them.
              </div> -->
              <!-- <div>
                I value
                <span class="text-highlight">empathy</span> and
                <span class="text-highlight">vulnerability</span>.
              </div>
              <div>
                I write about
                <span class="text-highlight">design</span> and
                <span class="text-highlight">people</span>.
              </div> -->
            </div>
            <v-btn large href="https://www.linkedin.com/in/souryav/" target="_blank" dark
              class="text-capitalize mt-6 tangram_blue">Let's Connect
              <v-icon dark>
                mdi-arrow-right
              </v-icon></v-btn>
          </v-flex>
          <v-flex class="about-right" :order="$vuetify.breakpoint.xsOnly ? '-1' : '13'" xs12 sm3 md6 lg5>
            <div>
              <TangramAbout />
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div class="layout-container bottom-line">
      <div class="layout-container__inner">
        <v-layout xs12 wrap>
          <v-flex xs12 sm9 md6 lg6>
            <div class="grey--text">
              <p class="font-weight-light mb-3 body-1">
                Hi there, I’m Sourya Varanasi. I am a
                <span class="is-relative text-highlight circle-sketch-highlight">data-driven UX/Product Designer
                </span>graduated with an MS. HCI degree from Indiana University
                Bloomington in May, 2023.
              </p>
              
              <p class="font-weight-light mb-3 body-1">
                I help businesses turn their ideas into great products and strive to innovate at the intersection of
                creativity, technology, and user experience. Drawing from my engineering roots, my passion for
                cutting-edge technology empowers me to create designs that resonate with users and push the boundaries of
                digital experiences. I am driven by the challenge of translating
                complex data into meaningful and delightful experiences for users.
              </p>
              
              <p class="text-h5 mt-5 title-gradient white--text">Currently</p>
              <p class="font-weight-light mt-4 body-1">
                I'm interning at Ushur, a no code AI powered workflow automation startup.
                For the last 4 years, I've been working with diverse companies
                under many roles in digital product design. This
                interdisciplinary experience taught me how design processes
                could influence product and business decisions. These insights
                allow me to use design as a strategy rather than being just
                another deliverable.
              </p>
              <p class="font-weight-light mt-4 body-1">I love experimenting with AR, AI and ML to come up with user-centered design solutions in the realm of interaction design.

              </p>
              <v-btn target="_blank" :href="'https://drive.google.com/file/d/1qQjhMxtrAo8mgWzIXkj-DOw2fQPmVvia/view?usp=sharing'
                " dark class="text-capitalize cardbgdark font-weight-light my-2">
                View Resume
                <v-icon dark small class="ml-1">
                  mdi-file-document-outline
                </v-icon>
              </v-btn>
            </div>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex :order="$vuetify.breakpoint.xsOnly ? 1 : 2" xs12 sm3 md7 lg4 :right-align="!$vuetify.breakpoint.mobile">
            <v-card flat class="mt-2 black">
              <v-img class="" :src="require(`@/assets/blue.png`)"></v-img>
            </v-card>
          </v-flex>
        </v-layout>

        <!-- <v-btn medium class="my-8 text-capitalize" outlined rounded>
          see my resume
        </v-btn> -->
      </div>
    </div>
    <section>
      <div class="layout-container bottom-line">
        <div class="layout-container__inner">
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="580" min-height="280">
                <v-card-title class="green-gradient bottom-line--light">
                  Metaphors and Metamorphosis...
                </v-card-title>
                <v-card-text class="pt-4 body-1 paragraph-gradient font-weight-light darken-1">
                  From a young age, I enjoyed solving puzzles and building stuff, nurturing my creativity and shaping
                  my design mindset. I apply my problem-solving skills to meticulously craft delightful experiences by
                  tweaking digital pixels. Design, to me, mirrors the graceful metamorphosis of a butterfly, where ideas
                  undergo a transformative journey to emerge as beautiful and impactful products.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="580" min-height="280">
                <v-card-title class="purple-gradient bottom-line--light">
                  Design and Me...
                </v-card-title>
                <v-card-text class="pt-4 body-1 paragraph-gradient font-weight-light darken-4">
                  As a designer, I embrace a growth mindset and strive to continuously improve by staying abreast of the
                  latest developments in the design industry worldwide. I approach design with a keen sense of
                  observation, drawing inspiration from my surroundings to fuel my creative process. I firmly believe that
                  observation leads to ideas, and ideas lead to innovation—a philosophy that drives the designer in me.

                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="580" min-height="280">
                <v-card-title class="red-gradient bottom-line--light">
                  Collaboration and Communication...
                </v-card-title>
                <v-card-text class="pt-4 body-1 paragraph-gradient font-weight-light darken-2">
                  My experience in tech startups has allowed me to wear multiple hats, fostering strong collaboration
                  skills. I believe in the power of discussions to bring valuable insights, and I effectively communicate
                  my designs with product owners, developers, and stakeholders at all levels. Embracing an iterative
                  approach, I welcome feedback to continuously refine and enhance my designs.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md6>
              <v-card elevation-20 dark class="cardbgdark my-4 mx-auto" max-width="580" min-height="280">
                <v-card-title class="orange-gradient bottom-line--light">
                  Engineering and Design...
                </v-card-title>
                <v-card-text class="pt-4 body-1 paragraph-gradient font-weight-light darken-3">
                  My approach is rooted in the fusion of creativity and technical expertise, where I strive to craft
                  innovative and user-centered solutions that seamlessly integrate form and function. Drawing from my
                  background in engineering, I bring a unique perspective to my design process, leveraging my
                  understanding of technical constraints and possibilities to inform my creative decisions.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <!-- <v-card class="cardbgdark">
                <v-card-title class=" darken-4">
                  What else can I do?
                </v-card-title>
                <v-card-text class="pt-4  accordionbg2 darken-3">
                  I'm a self-taught artist who can work with watercolor,
                  charcoal and acrylic paintings. Occasionally, I partcipated in
                  local exhibits in my city back in India to showcase my work.
                </v-card-text>
              </v-card> -->
        </div>
      </div>
    </section>
    <!-- <Grid /> -->
    <Contact />
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";
import Grid from "./grid.vue";

export default {
  data: function () {
    return {
      isActive: false,
    };
  },
  components: {
    TangramAbout,
    Contact,
    Grid,
  },
};
</script>

<style lang="scss" scoped>
// .intro-left {
//   max-width: 500px;
// }

.green-gradient {
  background-image: linear-gradient(124deg, #5dc942, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.orange-gradient {
  background-image: linear-gradient(138deg, #e5a500, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.red-gradient {
  background-image: linear-gradient(128deg, #fe335e, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.purple-gradient {
  background-image: linear-gradient(140deg, #7b79ff, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-button {
  border: 1px solid #8fbcff;
  // background-color: #192b27;
  // background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(transparent));
  // background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent);
  // -webkit-transition: background-color 500ms cubic-bezier(.19, 1, .22, 1);
  // transition: background-color 500ms cubic-bezier(.19, 1, .22, 1);
  // text-decoration: none;
}</style>
