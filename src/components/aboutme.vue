<template>
  <div class="white mx-auto">
    <v-layout wrap>
      <v-flex sm2>
        <nav class="left-nav">
          <a
            v-for="item in navItems"
            :key="item.id"
            class="nav-item"
            :class="{ active: activeSection === item.id }"
            @click="scrollToSection(item.id)"
          >
            {{ item.label }}
          </a>
        </nav>
        <div class="vertical-reel-container">
          <div
            class="vertical-reel-track"
            @mouseover="pauseReel"
            @mouseleave="resumeReel"
            :style="{ animationPlayState: isPaused ? 'paused' : 'running' }"
          >
            <!-- Repeat the images to ensure smooth loop -->
            <img
              v-for="(img, index) in images.concat(images)"
              :key="index"
              :src="img"
              :alt="'Me ' + (index + 1)"
            />
          </div>
        </div>
      </v-flex>
      <v-flex sm10>
        <div class="layout-container mx-auto">
          <div class="layout-container__inner">
            <section id="why">
              <section-title
                :is_dark="false"
                :title="'my journey in numbers'"
              ></section-title>
              <div class="my-8">
                <div
                  class="d-flex flex-wrap align-start text-center justify-space-between"
                >
                  <div style="width: auto">
                    <p class="font-weight-bold display-2">5+</p>
                    <p class="text-capitalize">Years of Design Experience</p>
                  </div>

                  <div class="vertical-line"></div>
                  <!-- <img :src="require(`@/assets/Line.png`)" /> -->
                  <div style="width: auto">
                    <p class="font-weight-bold display-2">$50M+</p>
                    <p class="text-capitalize">
                      Million cost savings and revenue generation
                    </p>
                  </div>
                  <div class="vertical-line"></div>

                  <div style="width: auto">
                    <p class="font-weight-bold display-2">6</p>
                    <p class="text-capitalize">High Priority Projects</p>
                  </div>
                </div>
              </div>
            </section>
            <!-- <div
          class="text-h5 font-weight-light py-8 text-center mx-auto"
          style="max-width: 80%"
        >
          From a young age, I enjoyed solving puzzles and building stuff,
          nurturing my creativity and shaping my design mindset
        </div> -->
            <!-- <div class="d-flex justify-center about">
          <TangramAbout />
        </div> -->

            <section id="what">
              <section-title
                :is_dark="false"
                :title="'what i bring to the table'"
              ></section-title>
              <section-overview
                :title="'Design'"
                :emphasize="'Superpowers'"
                :right="true"
              >
              </section-overview>
              <div>

                <v-layout wrap class="my-6">
                  <v-flex xs12 sm6>
                    <section-content
                      class="mr-12"
                      is_number="true"
                      :title="'Cross-Industry Experience'"
                    >
                      5 years across fintech, solar, AI, and B2B SaaS
                    </section-content>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <section-content
                      is_number="true"
                      :title="'Full-Spectrum Skills'"
                    >
                      Research, strategy, visual design, prototyping, testing
                    </section-content>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <section-content
                      class="mr-12"
                      is_number="true"
                      :title="' Stakeholder Alignment'"
                    >
                      Get tech, product, and business rowing together
                    </section-content>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <section-content
                      is_number="true"
                      :title="'Complex-to-Simple Magic'"
                    >
                      Make technical products feel human
                    </section-content>
                  </v-flex>
                </v-layout>
              </div>
            </section>
            <section id="how">
              <section-title
                :is_dark="false"
                :title="'how i work'"
              ></section-title>
              <section-overview
                :title="'Design'"
                :emphasize="'Process'"
                :right="true"
              >
              </section-overview>
              <v-layout wrap class="my-6">
                <v-flex xs12 sm6>
                  <section-content 
                    :number="'01'"
                    class="mr-12"
                    is_number="true"
                    :title="'Align First'"
                  >
                    Get stakeholders on the same page about the problem
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content 
                    :number="'02'"
                    is_number="true"
                    :title="'Ideate Together'"
                  >
                    Run structured brainstorming with everyone's expertise
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content
                    :number="'03'"
                    class="mr-12"
                    is_number="true"
                    :title="'Prototype Fast'"
                  >
                    Build just enough to test assumptions
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content
                    :number="'04'"
                    is_number="true"
                    :title="'Validate Relentlessly'"
                  >
                    User feedback drives every iteration
                  </section-content>
                </v-flex>
              </v-layout>
            </section>
            <section id="lessons">
              <section-title
                :is_dark="false"
                :title="'design truths  '"
              ></section-title>
              <section-overview
                :title="'Design'"
                :emphasize="'Principles'"
                :right="true"
              >
              </section-overview>
              <v-layout wrap class="my-6">
                <v-flex xs12 sm6>
                  <section-content
                    class="mr-12"
                    is_number="true"
                    :title="'Start with why, not what'"
                  >
                    Before I design a single screen, I make sure everyone
                    understands the core problem. If we can't articulate why
                    users need this, we shouldn't build it.
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content
                    is_number="true"
                    :title="`Complex doesn't have to feel complicated`"
                  >
                    Sophisticated products can still be intuitive. The
                    complexity should live in the system, not the interface.
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content
                    class="mr-12"
                    is_number="true"
                    :title="'Alignment accelerates everything'"
                  >
                    A week spent getting stakeholders aligned saves months of
                    redesigns. I'd rather over-communicate upfront than
                    course-correct later.
                  </section-content>
                </v-flex>
                <v-flex xs12 sm6>
                  <section-content
                    is_number="true"
                    :title="'Ideas come from everywhere'"
                  >
                    The best solutions emerge when engineering, product, design,
                    and business collaborate during ideation. My job is to
                    facilitate that magic.
                  </section-content>
                </v-flex>
              </v-layout>
            </section>
            <div
              class="about-card about black white--text text-center pa-1 mt-6"
            >
              <v-row wrap align-lg="center" justify-sm="center">
                <v-col cols="12" xs="6" md="7">
                  <div>
                    <p
                      class="text-h6 text-left font-weight-light opacity-8"
                    >
                      To me, design mirrors the graceful metamorphosis of a
                      butterfly, where ideas undergo a transformative journey to
                      emerge as beautiful & humanized products.
                    </p>
                    <p class="quote-text text-left mt-1">
                      And, great teams shape greater products
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" xs="6" md="3">
                  <TangramAbout style="transform: scale(0.5)" />
                </v-col>
              </v-row>
            </div>
            <section id="facts">
              <section-title
                :is_dark="false"
                :title="'fun facts'"
              ></section-title>

              <img
                width="100%"
                class="my-8"
                :src="require(`@/assets/gamesproblems.png`)"
              />

              <div
                class="text-h6 font-weight-light text-center mx-auto"
                style="max-width: 90%"
              >
                From a young age, I enjoyed solving puzzles and building stuff,
                nurturing my creativity and shaping my design mindset. Tangrams,
                Catan, Chess, Lego are some of my favorites.
              </div>

              <img
                width="100%"
                class="my-8"
                :src="require(`@/assets/cards.png`)"
              />
            </section>
          </div>
        </div>

        <!-- <Grid /> -->
      </v-flex>
    </v-layout>
    <div class="mainbg is-relative">
      <!-- <img
  class="is-absolute" height="80%"
  :src="require(`@/assets/media/intro/grid.svg`)"
/> -->

      <div class="layout-container black">
        <div
          class="white--text py-16 layout-container__inner mx-auto"
          style="max-width: 90%"
        >
          <v-layout row wrap justify-space-between align-center class="">
            <v-flex xs7>
              <img
                data-aos="slide-down"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
                data-aos-duration="500"
                width="100"
                height="100"
                class="sticker"
                :src="require(`@/assets/media/stickers/thanks.png`)"
              />

              <div class="d-flex align-center">
                <div>
                  <p class="missing-text">
                    I'm the missing piece you're looking for in your team
                  </p>
                  <v-btn
                    large
                    href="https://www.linkedin.com/in/souryav/"
                    target="_blank"
                    dark
                    class="text-capitalize mt-4 tangram_blue"
                    >Let's Chat <v-icon dark> mdi-arrow-right </v-icon></v-btn
                  >
                </div>
                <img
                  width="50"
                  height="60"
                  :src="require(`@/assets/missing-arrow.png`)"
                />
              </div>
            </v-flex>

            <v-flex xs4>
              <img width="70%" :src="require(`@/assets/missing-tangram.png`)" />
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TangramAbout from "./tangram-about.vue";
import Contact from "./contact.vue";
import Grid from "./grid.vue";
import SectionTitle from "@/components/project/section-title";
import SectionOverview from "@/components/project/section-overview.vue";
import SectionHighlight from "@/components/project/section-highlight.vue";
import SectionContent from "@/components/project/section-content.vue";

export default {
  data: function () {
    return {
      isActive: false,
      activeSection: "hero",
      visibleSections: [],
      navItems: [
        { id: "why", label: "Why should you hire me?" },
        { id: "how", label: `What's my design process?` },
        { id: "lessons", label: "Lessons learned" },
        { id: "facts", label: "Fun Facts" },
      ],
      isPaused: false,
      images: [
      require(`@/assets/travel/12.png`),
      require(`@/assets/travel/7.png`),
      require(`@/assets/travel/14.png`),
      require(`@/assets/travel/13.png`),
      require(`@/assets/travel/15.png`),
      require(`@/assets/travel/11.png`),
      require(`@/assets/travel/5.png`),
      ],
    };
  },
  components: {
    TangramAbout,
    Contact,
    Grid,
    SectionTitle,
    SectionOverview,
    SectionHighlight,
    SectionContent,
  },
  mounted() {
    this.setupIntersectionObserver();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    pauseReel() {
      this.isPaused = true;
    },
    resumeReel() {
      this.isPaused = false;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    updateActiveNav() {
      const sections = document.querySelectorAll("section, .hero");
      let current = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      this.activeSection = current;
    },
    handleParallax() {
      const scrolled = window.pageYOffset;
      const hero = this.$refs.hero;
      const rate = scrolled * -0.5;

      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    },
    handleScroll() {
      this.updateActiveNav();
      this.handleParallax();
    },
    setupIntersectionObserver() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (!this.visibleSections.includes(sectionId)) {
              this.visibleSections.push(sectionId);
            }
          }
        });
      }, observerOptions);

      // Observe all sections
      this.$nextTick(() => {
        document.querySelectorAll("section").forEach((section) => {
          this.observer.observe(section);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.missing-text {
  font-family: "Tiempos-Headline-BoldItalic", "Georgia", "Times New Roman",
    Times, serif;
  font-style: italic;
  font-size: 2.2rem;
  line-height: normal;
}
.quote-text {
  font-family: "Tiempos-Headline-BoldItalic", "Georgia", "Times New Roman",
    Times, serif;
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 500;
  // line-height: normal;
}
.vertical-line {
  width: 1px;
  height: 8rem;
  background: #d0d0d0;
  // margin: 0 1rem;
}
.about-card {
  border-radius: 1rem;
  // background: linear-gradient(279deg, #8a68fe 38.47%, #9cf7ff 107.16%);
}
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
}
/* Left Navigation */
.left-nav {
  position: fixed;
  margin-left: 2rem;
  top: 10rem;
  transform: translateY(-50%);
  z-index: 1000;
  // background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.nav-item {
  display: block;
  padding: 0.5rem 0.5rem;
  color: #6b7280;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-item:hover {
  color: #3b82f6;
  // background: rgba(59, 130, 246, 0.1);
}

.nav-item.active {
  color: #3b82f6;
  // background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
}

.nav-item.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 20px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
}

/* Hide nav on mobile */
@media (max-width: 1024px) {
  .left-nav {
    display: none;
  }
}
/* Vertical image reel container */
.vertical-reel-container {
  position: fixed;
  top:15rem;
  margin-top: 40px;
  margin-left: 2rem;
  overflow: hidden;
  
  mask-image: linear-gradient(to bottom,
    rgba(30, 30, 47, 0) 0%,
    rgba(30, 30, 47, 0.9) 3%,
    rgba(30, 30, 47, 1) 10%,
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

/* Scrolling track */
.vertical-reel-track {
  display: flex;
  flex-direction: column;
  animation: scroll-vertical 15s linear infinite;
}

.vertical-reel-track img {
  width:200px;
  height:auto;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 10px;
  align-self: center;
  transition: transform 0.3s ease;
}

.vertical-reel-track img:hover {
  transform: scale(1.1);
}

/* Vertical scrolling animation */
@keyframes scroll-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
</style>
