import { ref } from 'vue';

export const keyPress = ref({
    isClicked: 0,
    char: '',
    setChar(ch) {
        this.isClicked++;
        this.char = ch;
    }
});
