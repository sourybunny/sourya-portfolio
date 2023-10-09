import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#E5C675',
            secondary: '#b0bec5',
            tangram_orange:'#dd6c3d',
            tangram_blue:'#0162ac',
            tangram_yellow:'#ffcc01',
            // mainbg: '#000',
            accordionbg1:'#024f9c',
            accordionbg2:'#0a2759',
            cardbgdark:'#0F111C',
            stories_cake:'#9C3D3B',
            stories_soar:'#036198',
            stories_medium:'#3B8546',
            stories_speculative: '#942b71',
            stories_designsystem:'C75D14',
            streamanity: '#d6f5ec',
            streamanity_green:'#21ce98',
            greybg:'#F8F9FA',
            paleorange:'#F4EEEE',
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
