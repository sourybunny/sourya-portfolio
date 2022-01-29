import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#3f51b2',
            secondary: '#b0bec5',
            streamanity: '#d6f5ec',
            streamanity_green:'#21ce98',
            greybg:'#EAEAEB',
            slate:'#818181',
            accent: '#8c9eff',
            error: '#b71c1c',
            nav: '#fff'
          },
        },
      },
});
