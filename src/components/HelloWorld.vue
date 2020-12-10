<template>
  <div>
    <div class="contain">
      <div class="left-content content">
        <div class="white-text brand z-depth-4">s</div>
        <div class="card-photo white z-depth-5 hide-on-small-and-down">
          <div class="card-image "></div>
        </div>

        <div class="details">
          <p class="white-text">contact :</p>
          <p class="white-text">
            soury.bunny@gmail.com <a class="white-text" href="mailto:soury.bunny@gmail.com"><i class="fa fa-envelope"></i></a>
          </p>
          <p class="white-text">Find me on</p>
          <ul>
            <li>
              <a
                class="waves-effect waves-light btn-floating social github z-depth-5 tooltipped"
                data-position="bottom"
                data-tooltip="github"
                href="https://github.com/sourybunny"
                target="_blank"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                class="waves-effect waves-light btn-floating social linkedin z-depth-5 tooltipped"
                data-position="bottom"
                data-tooltip="linkedin"
                href="https://www.linkedin.com/in/sourya-v-8614b979/"
                target="_blank"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                class="waves-effect waves-light btn-floating social  codepen z-depth-5 tooltipped"
                data-position="bottom"
                data-tooltip="codepen"
                href="https://codepen.io/souryacodes/"
                target="_blank"
              >
                <i class="fa fa-codepen "></i
              ></a>
            </li>
            <li>
              <a
                class="waves-effect waves-light btn-floating social free-code-camp z-depth-5 tooltipped"
                data-position="bottom"
                data-tooltip="free code camp"
                href="https://www.freecodecamp.org/certification/sourybunny/legacy-front-end"
                target="_blank"
              >
                <i class="fa fa-free-code-camp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-content content">
        <nav class="transparent z-depth-0">
          <div class="nav-wrapper"></div>
        </nav>

        <div class="head">
          <h1 class="white-text">hello.</h1>
          <h4>I am</h4>
          <h3>Sourya</h3>

          <!-- <h5>&lt; web developer /&gt;</h5> -->
          <p class="grey lighten-4">Grow With Google Scholar, 2018 and Udacity Certified Mobile Web Specialist.</p>
          <p>
          </p>
          <div class="main-buttons">
            <a class="waves-effect waves-light  btn-large  z-depth-4" href="#portfolio">Portfolio</a>
            <a
              class="waves-effect  waves-light btn-large z-depth-4"
              target="_blank"
              href="https://drive.google.com/file/d/1POX9ib81bTSpg50t0jaOZtKlgzZnzTOf/view?usp=sharing"
              >Resume</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="portfolio " id="portfolio">
      <!-- <h2 class="center-align ">portfolio</h2> -->
      <div class="tabs">
        <div :class="{ 'active-tab': active == 1 }" class="card z-depth-0 center-align tab-title" @click="active = 1">UX/UI Design</div>
        <div :class="{ 'active-tab': active == 2 }" class="card z-depth-0 center-align tab-title" @click="active = 2">Code</div>
        <div :class="{ 'active-tab': active == 3 }" class="card z-depth-0 center-align tab-title" @click="active = 3">Mini Code</div>
        <div :class="{ 'active-tab': active == 4 }" class="card z-depth-0 center-align tab-title" @click="active = 4">Art</div>
      </div>
      <div class="container">
        <div class="projects" v-if="active == 2 || active == 3">
          <project v-for="project in getTab()" :key="project.id" :item="project" />
        </div>
        <div class="projects" v-if="active == 4">
          <art v-for="project in getTab()" :key="project.id" :item="project" />
        </div>
        <!--<div class="portfolio-button center-align">  </div>-->
      </div>
    </section>

    <section class="skills container" id="skills">
      <h2 class="center-align">skills</h2>
      <div class="row left-align">
        <!-- <div class="col s12"></div> -->
        <div class="col s3 ">
          <div class="left-align">
            <span>Programming</span>
            <div class="skill-bar"></div>
            <p class="grey-text text-darken-2">HTML / CSS</p>
            <p class="grey-text text-darken-2">Javascript</p>
            <p class="grey-text text-darken-2">VueJs</p>
            <p class="grey-text text-darken-2">Progressive Web Apps</p>
            <p class="grey-text text-darken-2">Arduino</p>
            <p class="grey-text text-darken-2">Unity + Vuforia Engine</p>
          </div>
        </div>
        <div class="col s3 ">
          <div class="left-align">
            <span>UX Research</span>
            <div class="skill-bar"></div>
            <p class="grey-text text-darken-2">User Interviews</p>
            <p class="grey-text text-darken-2">Affinity Mapping</p>
            <p class="grey-text text-darken-2">Journey Mapping</p>
            <p class="grey-text text-darken-2">Task Analysis</p>
            <p class="grey-text text-darken-2">Observation</p>
            <p class="grey-text text-darken-2">Heuristic Evaluation</p>
          </div>
        </div>
        <div class="col s2 ">
          <div class="left-align">
            <span>Visual Toolkit</span>
            <div class="skill-bar"></div>
            <p class="grey-text text-darken-2">Figma</p>
            <p class="grey-text text-darken-2">Adobe XD</p>
            <p class="grey-text text-darken-2">Blender 3D</p>
            <p class="grey-text text-darken-2">Sketching</p>
          </div>
        </div>

        <div class="col s3">
          <div class="left-align">
            <img :src="require('@/assets/media/skills.png')" alt="" />
          </div>
        </div>
      </div>
    </section>
    <footer class="page-footer white">
      <!-- <div class="container">
        <h5 class="black-text center-align">want to know more ?</h5>
        <h6 class="grey-text text-darken-3 center-align">
          Download my <a target="_blank" href="https://drive.google.com/file/d/1POX9ib81bTSpg50t0jaOZtKlgzZnzTOf/view?usp=sharing">Resume</a>.
        </h6>
      </div> -->

      <div class="footer-copyright">
        <div class="container grey-text text-darken-3">
          © 2020 Copyright Sourya, All rights reserved.
          <a class="grey-text text-darken-3 right" target="_blank" href="https://www.facebook.com/Sourybunny/"><i class="fa fa-facebook"></i></a>
          <a class="grey-text text-darken-3 ig right" target="_blank" href="https://www.instagram.com/sourya_sketches/"
            ><i class="fab fa-instagram"></i
          ></a>
          <a class="grey-text text-darken-3 right" href="mailto:soury.bunny@gmail.com"><i class="far fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Project from "./project";
  import Art from "./art";
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    data() {
      return {
        design: [{ title: "", image: "", link: "", desc: "", id: "" }],
        active: 1,
        major: [
          {
            title: "Pomodoro Clock",
            image: "https://i.imgur.com/5Jow8Ms.png",
            live: "https://sourybunny.github.io/pomodoro-clock/",
            desc: "",
            id: 1,
            link: "https://github.com/sourybunny/pomodoro-clock",
          },
        ],
        minis: [
          {
            title: "Pomodoro Clock",
            image: "https://i.imgur.com/5Jow8Ms.png",
            live: "https://sourybunny.github.io/pomodoro-clock/",
            desc: "",
            id: 1,
            link: "https://github.com/sourybunny/pomodoro-clock",
          },
          {
            title: "Slice It",
            image: "https://i.imgur.com/yA3jnXD.png",
            live: "https://sourybunny.github.io/slice-it/",
            desc: "",
            id: 2,
            link: "https://github.com/sourybunny/slice-it",
          },
          {
            title: "Tic Tac Toe",
            image: "https://i.imgur.com/Odp8PxJ.png",
            live: "https://sourybunny.github.io/tic-tac-toe-/",
            link: "https://github.com/sourybunny/tic-tac-toe-",
            desc: "",
            id: 3,
          },
          {
            title: "Simon Game",
            image: "https://i.imgur.com/Cb9wx2F.png",
            live: "https://sourybunny.github.io/simon-game/",
            link: "https://github.com/sourybunny/simon-game",
            desc: "",
            id: 4,
          },
          {
            title: "Local Weather",
            image: "https://i.imgur.com/zGyU8Bz.png",
            live: "https://sourybunny.github.io/weather-api/",
            link: "https://github.com/sourybunny/weather-api",
            desc: "",
            id: 5,
          },
          {
            title: "Calculator",
            image: "https://i.imgur.com/ASOZnqt.png",
            live: "https://sourybunny.github.io/js-calculator/",
            link: "https://github.com/sourybunny/js-calculator",
            desc: "",
            id: 6,
          },
        ],
        art: [
          { title: "", image: "https://i.imgur.com/8AaPWVT.jpg", id: 1 },
          { title: "", image: "https://i.imgur.com/S9xz5Lt.jpg", id: 2 },
          { title: "", image: "https://i.imgur.com/xigLMy2.jpg", id: 3 },
          { title: "", image: "https://i.imgur.com/rLYGNrV.jpg", id: 4 },
          { title: "", image: "https://i.imgur.com/j3Re5kz.jpg", id: 5 },
          { title: "", image: "https://i.imgur.com/lKRhimz.jpg", id: 6 },
        ],
      };
    },

    components: {
      Project,
      Art,
    },
    methods: {
      getTab() {
        if (this.active == 1) {
          return this.design;
        } else if (this.active == 2) {
          return this.major;
        } else if (this.active == 3) {
          return this.minis;
        } else {
          return this.art;
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  .portfolio {
    background: #f6f6f6;
    padding-bottom: 3rem;
  }
  .tabs {
    background: #f6f6f6;

    // padding-top:2rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    .card {
      margin-top: 4rem;
      margin-bottom: 2rem;
      border-radius: 0.3rem;
      border: 3px solid #4a21fc;
      cursor: pointer;
    }
  }

  .tabs .tab-title {
    font-size: 1.5rem;
    padding-top: 0.6rem;
  }
  .active-tab {
    background: #4a21fc;
    color: white;
    // height: 8rem;
    border-radius: 4rem;
    // border: none;
  }
  .skill-bar {
    margin-top: 2px;
    background-color: #4a21fc;
    height: 0.3rem;
    width: 3rem;
    border-radius: 5rem;
  }
  .ig {
    margin: 0 0.5rem;
  }
  /* a {
    color: #42b983;
  } */
</style>
