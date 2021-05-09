<template>
  <div class="home">
    <div class="container mosaic-layout" ref="gif">
      <router-link :to="`/details/${item.id}`"
        class="tile"
        :class="{ 'span-2': index % 2 == 0, 'span-3': index % 3 == 0 }"
        v-for="(item, index) in gifs"
        :key="index"
      >
        <b-img-lazy v-bind="imgProps" :key="item.media[0].tinygif.url" :src="item.media[0].tinygif.url" alt="" srcset=""></b-img-lazy>
        <button class="btn text-light btn-danger btn-sm" v-b-tooltip.hover title="Add To Favorite" @click.stop.prevent="addToFav(item)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>