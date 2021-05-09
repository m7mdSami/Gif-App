import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";

const VuexModule = createModule({
    namespaced: "gif",
    strict: false,
})

export class GifStore extends VuexModule {

    data: any[] = [];
    next: number = 0;
    lastOffset: number = 0;

    @mutation setData(data: any[]) {
        this.data = [...data]
    }

    get getData() {
        return this.data;
    }

    @mutation setNext(next: number) {
        this.next = next
    }

    get getNext() {
        return this.next;
    }

    @mutation setLastOffset(offset: number) {
        this.lastOffset = offset
    }

    get getLastOffset() {
        return this.lastOffset;
    }
}
export default GifStore;