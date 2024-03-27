import { ref } from 'vue';

export const tileColours = ref({
    curr: getComputedStyles(['--tile-white', '--tile-lightgrey', '--tile-orange', '--tile-green']),
    isDark: false,

    setTileColours(dark) {
        this.isDark = dark;
        if (!dark) {
            this.curr = getComputedStyles(['--tile-white', '--tile-lightgrey', '--tile-orange', '--tile-green']);
        } else {
            this.curr = getComputedStyles(['--tile-dark-white', '--tile-dark-lightgrey', '--tile-dark-orange', '--tile-dark-green']);
        }
    },

    getStyle(idx) {
        if (!this.isDark) {
            return {
                'background-color': this.curr[idx],
                'color': idx === 0 ? 'rgb(110, 110, 110)' : 'white',
                'box-shadow': '0rem 0.25rem 0.25rem ' + (idx === 0 ? 'rgb(200,200,200)' : tileColours.value.curr[idx] + '90'),
                'transition': 'box-shadow 0.5s ease, background-color 0.2s ease',
            }
        }
        return {
            'position': 'relative',
            'transition': 'box-shadow 0.5s ease, background-color 0.2s ease',
            'background-color': this.curr[idx],
            'mix-blend-mode': 'normal',
            'color': 'rgb(210,210,210)',
            'box-shadow': '0rem 0.25rem 0.25rem rgb(15,15,15), 0rem 0.4rem 0.4rem 0.05rem rgb(30,30,30)',
        }
    },

});

function getComputedStyles(colours) {
    const root = document.documentElement;
    return colours.map((x) => getComputedStyle(root).getPropertyValue(x));
}
