<template>
  <header class="p-3 mb-3 border-bottom header bg-dark bg-gradient">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-lg-0 text-dark text-decoration-none me-5">
          <h4 class="text-light">GIF</h4>
        </router-link>


        <form class="col-lg-auto mb-lg-0 me-lg-3 ms-5 flex-fill">
          <input type="search" class="form-control search" placeholder="Search..." aria-label="Search" @input="search($event)">
        </form>
      
        <ul class="nav col-lg-auto me-lg-auto">
          <li>
            <router-link to="/favorite" class="nav-link px-2 link-secondary text-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./index.ts"></script>
<style scoped lang="scss" src="./index.scss"></style>

