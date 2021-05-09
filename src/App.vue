<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header/index.vue";

@Component({
  components: {
    Header
  },
})
export default class App extends Vue {}
</script>
