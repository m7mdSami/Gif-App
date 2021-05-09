import { Component, Vue } from "vue-property-decorator";
import { vxm } from '@/store/index';
import { imgProps } from '@/utils/imgLazy';

@Component({
    components: {
    },
})
export default class Details extends Vue {

    item: object | null = null;

    imgProps: object = imgProps

    get gifStore() {
        return vxm.gif
    }

    get gifItem() {
        return this.item
    }

    mounted() {
        this.getGif()
    }

    // Get The Gif Item By Id 
    async getGif() {
        let gifId = this.$route.params.id;
        let gifItem = this.gifStore.getData.find(({id}) => id == gifId);
        this.item = {...gifItem};
    }

}