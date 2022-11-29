import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#E5C675',
            secondary: '#b0bec5',
            mainbg: '#000',
            streamanity: '#d6f5ec',
            streamanity_green:'#21ce98',
            greybg:'#EAEAEB',
            slate:'#818181',
            lufi: '#edf6fc',
            soar: '#f2f7fb',
            lufi_blue: '#009df5',
            piggie_blue: '#009df5',
            soar_blue: '#3b7ba9',
            soar_crimson: '#990001',
            accent: '#8c9eff',
            error: '#b71c1c',
            nav: '#fff'
          },
        },
      },
});
