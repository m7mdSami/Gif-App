import { Component, Vue } from "vue-property-decorator";
import { imgProps } from '@/utils/imgLazy';

@Component({
    components: {
    },
})
export default class Favorite extends Vue {

    imgProps: object = imgProps

    mounted() {
    
    }

    // Get Favorite Gif Item from localStorage
    get getFav() {
        let getFav = localStorage.getItem('fav') as string;
        getFav = getFav ? JSON.parse(getFav) : [];
        return getFav
    }

}