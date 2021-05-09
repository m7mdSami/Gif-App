<template>
  <div class="details" v-if="gifItem">
    <div class="container">
      <b-img-lazy class="w-auto h-auto my-5" v-bind="imgProps" :key="gifItem.media[0].gif.url" :src="gifItem.media[0].gif.url"></b-img-lazy>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>