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
            sourya0411@gmail.com <a class="white-text" href="mailto:sourya0411@gmail.com"><i class="fa fa-envelope"></i></a>
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
                href="https://www.linkedin.com/in/souryav/"
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
          <!-- https://confirm.udacity.com/KAVXFTHZ -->
          <p class="grey lighten-4">Grow With Google Scholar, 2018 and
            <a
              class="grey-text text-darken-4"
              target="_blank"
              href="https://confirm.udacity.com/KAVXFTHZ"
              >Udacity Certified Mobile Web Specialist.</a>
          </p>
          <p>
            A UX/UI designer | Front-end developer and a persistent learner driven by passion to design and build user-friendly applications
          </p>
          <div class="main-buttons">
            <a class="waves-effect waves-light  btn-large  z-depth-4" href="#portfolio">Portfolio</a>
            <a
              class="waves-effect  waves-light btn-large z-depth-4"
              target="_blank"
              href="https://drive.google.com/file/d/1G5DYEYGUK-cTU5CE511401vASl233563/view?usp=sharing"
              >Resume</a
            >
          </div>
        </div>
      </div>
    </div>

    <section class="portfolio " id="portfolio">
      <h2 class="center-align ">portfolio</h2>
      <div class="tabs">
        <div :class="{ 'active-tab': active == 1 }" class="card z-depth-0 center-align tab-title" @click="active = 1">UX/UI Design</div>
        <div :class="{ 'active-tab': active == 2 }" class="card z-depth-0 center-align tab-title" @click="active = 2">Code</div>
        <div :class="{ 'active-tab': active == 3 }" class="card z-depth-0 center-align tab-title" @click="active = 3">Mini Code</div>
        <div :class="{ 'active-tab': active == 4 }" class="card z-depth-0 center-align tab-title" @click="active = 4">Art</div>
      </div>
      <div class="container">
        <div class="projects" v-if="active == 3">
          <project v-for="project in getTab()" :key="project.id" :item="project" />
        </div>
        <div class="major" v-if="active == 1">
          <design v-for="project in getTab()" :key="project.id" :item="project" />
        </div>
        <div class="">
          <div class="major" v-if="active == 2">
            <major v-for="project in getTab()" :key="project.id" :item="project" />
          </div>
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
        <div class="col s12 m3 ">
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
        <div class="col s12 m3 ">
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
        <div class="col s12 m2 ">
          <div class="left-align">
            <span>Visual Toolkit</span>
            <div class="skill-bar"></div>
            <p class="grey-text text-darken-2">Figma</p>
            <p class="grey-text text-darken-2">Adobe XD</p>
            <p class="grey-text text-darken-2">Blender 3D</p>
            <p class="grey-text text-darken-2">Sketching</p>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="left-align">
            <img :src="require('@/assets/media/skills.png')" alt="" />
          </div>
        </div>
      </div>
    </section>
    <footer class="page-footer white">
      <div class="footer-copyright">
        <div class="container grey-text text-darken-3">
          © 2020 Copyright Sourya, All rights reserved.
          <!-- <a class="grey-text text-darken-3 right" target="_blank" href="https://www.facebook.com/Sourybunny/"><i class="fa fa-facebook"></i></a>
          <a class="grey-text text-darken-3 ig right" target="_blank" href="https://www.instagram.com/sourya_sketches/"
            ><i class="fab fa-instagram"></i
          ></a> -->
          <a class="grey-text text-darken-3 right" href="mailto:sourya0411@gmail.com">Email <i class="far fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import Project from "./project";
  import Art from "./art";
  import Major from "./major";
  import Design from "./design";
  export default {
    name: "Home",
    props: {
      msg: String,
    },
    data() {
      return {
        active: 1,
        design: [
          {
            title: "Loofi",
            image: "https://i.imgur.com/SCcdxSg.png?2",
            live: "https://drive.google.com/file/d/1PZ1ZDm9NGkYo22booZjk3j0uZansPj_m/view?usp=sharing",
            desc: "Loofi is a reimagined public toilet system that helps people find and use clean and hygienic toilets across the country. It motivates people to use public toilets.",
            tags: ['UX Research', "Persona", "Journey Map","Conceptual Model", "Wireframes"],
            id: 1,
            link: "https://drive.google.com/file/d/1PZ1ZDm9NGkYo22booZjk3j0uZansPj_m/view?usp=sharing",
          },
          {
            title: "Mappuzzle",
            image: "https://i.imgur.com/RzjBlRi.png?3",
            live: "https://drive.google.com/file/d/10IQjuZP91-IyZI0_0M3U8Vws-3ykLwmx/view?usp=sharing",
            desc: "Mappuzzle is a set of 3 interactive game based learning-aids (Word game, World map, India map) designed for visually impaired K-12 students to improve learning experience. ",
            tags: ['UX Research', "Persona","Ideation","Conceptual Model", "Prototypes"],
            id: 2,
            link: "https://drive.google.com/file/d/10IQjuZP91-IyZI0_0M3U8Vws-3ykLwmx/view?usp=sharing",
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
        major: [
          {
            title: "Covid-Viz",
            image: "https://i.imgur.com/OZQvghB.png?1",
            desc: "Covid19 map dashboard visualization of Global and India cases. Utilizes data form RapidApiCovid19 and NovelCovidApi.",
            id: 1,
            tags: ["Javascript", "VueJs", "MapboxGl Js"],
            live: "https://covidviz.netlify.app/",
            link: "https://github.com/sourybunny/covid-19-Geojson",
          },
        ],
      };
    },

    components: {
      Project,
      Art,
      Major,
      Design,
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
  .major {
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 500px) {
    .major {
      grid-template-columns: repeat(1, 1fr);
    }
    .tabs {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 18rem;
      padding-top: 2rem;
      .card {
        width: 10rem;
        padding: 0.5rem 0;
        margin: 0.5rem;
      }
      .tab-title {
        font-size: 1rem;
      }
    }
  }
  /* a {
    color: #42b983;
  } */
</style>
