import { Component, Vue } from "vue-property-decorator";
import { vxm } from '@/store/index';
import { Service, APIs } from '@/services';
import { imgProps } from '@/utils/imgLazy';

@Component({
    components: {
    },
})
export default class Home extends Vue {

    imgProps: object = imgProps;

    isScrolled: boolean = true;
    lastOffset: number = 0;

    get gifs() {
        return vxm.gif.getData
    }

    get gifStore() {
        return vxm.gif
    }

    get service() {
        return new Service()
    }

    mounted() {
        this.getGif()
        this.loadMore();
    }

    async getGif() {
        let val = (document.querySelector('.search') as any).value || '';
        let data = {
            q: val,
            pos: this.gifStore.getNext || null,
            limit: 8
        }
        let res = await this.service.get(APIs().search, data);
        let gifs = [...this.gifs, ...res?.data?.results]
        this.gifStore.setData(gifs);        // Set Gif Items in the Vuex store
        this.gifStore.setNext(res?.data?.next); // Set Next Value from response in Vuex store
    }

    async scroll() {
        try {
            if (this.isScrolled) {
                let lastDiv = document.querySelector(".mosaic-layout > .tile:last-of-type") as any;
                let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
                let pageOffset = window.pageYOffset + window.innerHeight;

                if ((pageOffset > lastDivOffset - 20) && (pageOffset > this.gifStore.getLastOffset)) {
                    this.lastOffset = pageOffset;
                    await this.gifStore.setLastOffset(pageOffset);
                    this.isScrolled = false;
                    await this.getGif();
                    setTimeout(() => {
                        this.isScrolled = true
                    }, 1000);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Load More Gif Items when user scroll
    loadMore() {
        window.addEventListener("scroll", this.scroll);
    }

    async addToFav(item: {}) {
        let getFav = await localStorage.getItem('fav') as string;
        getFav = getFav ? JSON.parse(getFav) : [];
        console.log(getFav)
        await localStorage.setItem('fav', JSON.stringify([item, ...getFav]))
    }

    destroyed() {
        // Destroy Scroll Event When User Leave Component
        window.removeEventListener('scroll', this.scroll);
    }

}