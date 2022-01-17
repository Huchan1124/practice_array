
import { createApp, ref } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js";

const app = {
    data() {
        return {
            ...data,

        }
    },
    methods: {
        filter(index) {
            this.tempTag = this.itemRefs[index].value;
            this.temp = this.movies.filter((item) => item.tag === this.tempTag);
        },
        addMovie() {
            const id = this.movies.length + 1;
            const name = this.movieNameInput;
            const tag = this.movieTagInput;

            const obj = {
                id,
                name,
                tag
            };

            this.movieNameInput = '';
            this.movieTagInput = '';

            this.movies.push(obj);

        },
        removeMovie(index) {
            const removeMovieIndex = this.$refs.removeBtn[index].dataset.id;

            this.movies.splice(removeMovieIndex, 1);

        },
        setItemRef(el) {
            if (el) {
                this.itemRefs.push(el)
            }
        }
    }
}

createApp(app).mount("#app");