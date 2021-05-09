import { Component, Prop, Vue } from "vue-property-decorator";
import { Service, APIs } from '@/services';
import { vxm } from '@/store/index';

@Component
export default class Header extends Vue {

  typingTimer!:number

  get service() {
    return new Service()
  }

  get gifStore() {
    return vxm.gif
  }

  mounted() {

  }

  async search(e: Event) {
    // Handle Input Event when User Finich Typing.
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(async () => {
      try {
        let val = (e.target as any).value;
        console.log(val);
        let data = {
          q: val,
          limit: 8
        }
        let res = await this.service.get(APIs().search, data);
        this.$router.push('/')
        this.gifStore.setData(res?.data?.results);
        this.gifStore.setNext(res?.data?.next);
        this.gifStore.setLastOffset(0);
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }, 1000);
  }

}