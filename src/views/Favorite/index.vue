<template>
  <div class="home">
    <div class="container mosaic-layout" v-if="getFav.length">
      <router-link :to="`/details/${item.id}`"
        class="tile"
        :class="{ 'span-2': index % 2 == 0, 'span-3': index % 3 == 0 }"
        v-for="(item, index) in getFav"
        :key="index"
      >
        <b-img-lazy v-bind="imgProps" :key="item.media[0].tinygif.url" :src="item.media[0].tinygif.url" alt="" srcset=""></b-img-lazy>
      </router-link>
    </div>
    <h3 class="text-center mt-5" v-else>Your Favorite Is Empty</h3>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>