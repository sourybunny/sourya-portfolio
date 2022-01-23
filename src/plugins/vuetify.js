import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3f51b2',
            secondary: '#b0bec5',
            streamanity: '#c1e2d9',
            streamanity_green:'#35d7a5',
            greybg:'#EAEAEB',
            accent: '#8c9eff',
            error: '#b71c1c',
            nav: '#fff'
          },
        },
      },
});
